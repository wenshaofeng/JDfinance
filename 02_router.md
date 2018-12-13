一般 SPA 前端路由有2种实现方式：

- History API（window.history）

- Hash（location.hash）

####一.history基本介绍
window.history 对象包含浏览器的历史，window.history 对象在编写时可不使用 window 这个前缀。history是实现SPA前端路由是一种主流方法，它有几个原始方法：

- history.back() - 与在浏览器点击后退按钮相同
- history.forward() - 与在浏览器中点击按钮向前相同
- history.go(n) - 接受一个整数作为参数，移动到该整数指定的页面，比如go(1)相当于forward()，go(-1)相当于back()，go(0)相当于刷新当前页面
- 如果移动的位置超出了访问历史的边界，以上三个方法并不报错，而是静默失败

>在HTML5，history对象提出了 pushState() 方法和 replaceState() 方法，这两个方法可以用来向历史栈中添加数据，就好像 url 变化了一样（过去只有 url 变化历史栈才会变化），这样就可以很好的模拟浏览历史和前进后退了，现在的前端路由也是基于这个原理实现的。

**1.history.pushState**

pushState(stateObj, title, url) 方法向历史栈中写入数据，其第一个参数是要写入的数据对象（不大于640kB)，第二个参数是页面的 title, 第三个参数是 url (相对路径)。

- stateObj ：一个与指定网址相关的状态对象，popstate事件触发时，该对象会传入回调函数。如果不需要这个对象，此处可以填null。
- title：新页面的标题，但是所有浏览器目前都忽略这个值，因此这里可以填null。
- url：新的网址，必须与当前页面处在同一个域。浏览器的地址栏将显示这个网址。

>关于pushState，有几个值得注意的地方：

pushState方法不会触发页面刷新，只是导致history对象发生变化，地址栏会有反应,只有当触发前进后退等事件（back()和forward()等）时浏览器才会刷新

这里的 url 是受到同源策略限制的，防止恶意脚本模仿其他网站 url 用来欺骗用户，所以当违背同源策略时将会报错

**2.history.replaceState**

replaceState(stateObj, title, url) 和pushState的区别就在于它不是写入而是替换修改浏览历史中当前纪录，其余和 pushState一模一样

**3.popstate事件**

>定义：每当同一个文档的浏览历史（即history对象）出现变化时，就会触发popstate事件。

注意：**仅仅调用pushState方法或replaceState方法 ，并不会触发该事件**，只有用户点击浏览器倒退按钮和前进按钮，或者使用JavaScript调用back、forward、go方法时才会触发。另外，该事件只针对同一个文档，如果浏览历史的切换，导致加载不同的文档，该事件也不会触发。

用法：使用的时候，可以为popstate事件指定回调函数。这个回调函数的参数是一个event事件对象，它的state属性指向pushState和replaceState方法为当前URL所提供的状态对象（即这两个方法的第一个参数）。

**4.history实现spa路由**

```
 <a class="api a">a.html</a>
 <a class="api b">b.html</a>
    <script type="text/javascript">  
      //注册路由
      document.querySelectorAll('.api').forEach((item)=>{
        item.addEventListener('click',(e)=>{
          e.preventDefault();
          let link = item.textContent
          window.history.pushState({name:'api'},link,link);
        },false)
      })
      //监听路由
      window.addEventListener('popstate',(e)=>{
        console.log(
          {
            location:location.href,
            state:e.state
          }
        );
      },false)
    </script>
```
![](https://upload-images.jianshu.io/upload_images/9249356-56a3634dca5c3f16.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
popstate监听函数里打印的e.state便是history.pushState()里传入的第一个参数，在这里即为{name: 'api'}
![](https://upload-images.jianshu.io/upload_images/9249356-56b6de4a3c3007a6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 二.Hash

**1.Hash基本介绍**

url 中可以带有一个 hash [http://localhost:9000/#/a.html](http://localhost:9000/#/a.html)

window 对象中有一个事件是 onhashchange，以下几种情况都会触发这个事件：
1. 直接更改浏览器地址，在最后面增加或改变#hash；
2.  通过改变location.href或location.hash的值；
3.  通过触发点击带锚点的链接；
4.  浏览器前进后退可能导致hash的变化，前提是两个网页地址中的hash值不同。

**2.Hash实现spa前端路由代码**

```
<h3>Hash</h3>
  <a href="" class="hash a">#a.html</a>
  <a href="" class="hash b">#b.html</a>

  <script type="text/javascript">
    //注册路由
    document.querySelectorAll('.hash').forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        let link = item.textContent
        location.hash = link
      }, false)
    })

    //监听路由
    window.addEventListener('hashchange', (e) => {
      console.log({
        location: location.href,
        hash: location.hash
      });
    }, false)
  </script>
```
由于地址改变了，所以popstate也能监听到变化
![](https://upload-images.jianshu.io/upload_images/9249356-27efb6e88b134cb2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
