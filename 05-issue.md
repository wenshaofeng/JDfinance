## 常见问题汇总

**1. CSS Module 和 Vue <style> 的 scoped 属性有啥异同？**

这是个相当好的问题，看的仔细的同学发现项目中都使用的是 CSS Module，没有提 scoped 属性。在这里给大家做下总结：

- 相同点

  两者都是为了解决 CSS 类名相互干扰的问题，也就是大家常说的“作用域”问题。使用两种方案都可以达到类似效果，但是两者的区别也很明显。

- 不同点

  1. CSS Module 是所有组件化框架都支持的技术方案，他不属于某个框架的私有属性。而 scoped 是 Vue 框架的私有属性。
  2. CSS Module 的工作原理直白的讲就是把一个类名做 md5 ，然后在引用的时候直接使用 md5 字符串，进而保证相同的类名根据不同的路径和组件名称得到不同的 md5 值，保证了最终的类名隔离。而 scoped 的做法是做命名空间限制，也就是说每个组件就是一个命名空间，每个命名空间拥有不同的类名（md5）,然后每个下面的类名都会挂在这个命名空间下进而达到隔离。
  3. 对于父组件声明的类名，在子组件内，CSS Module 是不处理的，想用必须显示调用类名($style.类名)，而使用了 scoped 的因为是命名空间的方式，所以子组件依然有效。

大家如有疑问欢迎补充。

**2. 为啥我们的项目中没有用到 render 函数？**

虽然 Vue 在高版本中借鉴了 React 的写法支持了 render 函数，但是大多数项目不需要这样做。关于 render 函数请先看官方的解释 [render函数](https://cn.vuejs.org/v2/guide/render-function.html)。

在此也给大家做下较容易理解的解释：

- Vue 可以使用 template 或者 render 函数管理 HTML 内容，而 template 是常规的做法，因为 render 对开发者的要求比较高，需要对 Vue 的 API 非常了解，不然弄巧成拙。
- 使用 template 所见即所得，再结合预编译工具更容易开发和调试、用最简单的方式完成任务不是很好吗？也更适合团队的需要。

**3. Atom 常用插件**

1. Emmet，用来快速生成HTML片段，比如输入ul>li*3可以快速生成

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

[详细地址](https://atom.io/packages/emmet)，[Emmet教程](https://docs.emmet.io/cheat-sheet/)

2. Snippets， 用来处理代码片段的模板输出，[详细地址](https://atom.io/packages/snippets)
3. Tree View，文件浏览器，[详细地址](https://atom.io/packages/tree-view)
4. file icons，文件识别图标，使用这个插件会让你的编辑器显示对应的图标，[详细地址](https://atom.io/packages/file-icons)
5. language-javascript-jsx，jsx语法高亮 ，[详细地址](https://atom.io/packages/language-javascript-jsx)
6. language-vue，vue语法高亮，[详细地址](https://atom.io/packages/language-vue)
7. linter-eslint，eslint插件，[详细地址](https://atom.io/packages/linter-eslint)
8. vue-snippets，vue代码片段，[详细地址](https://atom.io/packages/vue-snippets)
9. pigments，颜色显示器，[详细地址](https://atom.io/packages/pigments)

**4. px2rem-loader的参数配置问题**

有的同学对px2rem-loader的参数配置有疑问，我们一共使用了2个参数 remUnit 和 remPrecision 。第一个表示默认的 html 的 fontSize，第二个是 px 转 rem 后小数精度。那为什么我把 remUnit 默认设置为 40 呢？

整个自适应方案分成两部分：

1、 viewport 自动计算并生成 viewport 。

2、 px2rem-loader 把 css 文件中 px 转换成 rem 。

其中 px2rem-loader 对 remUnit 的默认值是 75 。viewport 的计算是以 iphone 5s的设计尺寸来计算的。所以按照 ihpone 5s 的设计尺寸算出来 html 的 fontSize 是 40px。我们需要让 px2rem-loader 的基础单位是 40 。

如果我的设计尺寸变了怎么办？比如我是 iphone 6 。

很简单，现有的项目直接在Chrome模拟器选择 iphone 6，查看下 html 的 fontSize 是多少，把那个值设置到 remUnit，然后去 viewport 把 320 改成对应的值就好了。就这么简单，神奇不神奇。

**5. 导航的选中问题**

之前为了保持和京东的一致，在设计上也是采用的静态导航，但是因为图片不好裁剪，没有细致的说明，现在补充下：

导航这块其实非常简单，有两种思路：

1、 使用课程中的 img 方法。每个 router-link 下放置两个 img 标签（课程中用了一个），两个 img 分别代表未激活的状态图片、激活的状态图片，要知道 router-link 本身提供了激活状态的，即用户点击之后会在当前的链接上增加两个类 router-link-exact-active router-link-active (这两个类有什么区别另说)。所以只要结合 css 的 nth-child  就可以很容易的对应显示两种不同的图片。

2、 使用背景图的方式。如果觉得 img 标签的方式很麻烦，可以结合两个 router-link-exact-active router-link-active 切换链接的背景图也是不错的选择。

**6. router-link-exact-active 和 router-link-active 的区别**

这块的内容其实官方文档说的很清楚，[router-link](https://router.vuejs.org/zh-cn/api/router-link.html)，仔细看 exact 选项，默认是 false。也就是说默认不是精确匹配的。

>>"是否激活" 默认类名的依据是 inclusive match （全包含匹配）。 举个例子，如果当前的路径是 /a 开头的，那么 <code><router-link to="/a"> </code>也会被设置 CSS 类名。按照这个规则，每个路由都会激活<code><router-link to="/"></code>

这是官方的原话，我给翻译下：默认的 router-link 是非精确匹配，当你的路由是 /a 时，除了 /a 的链接被激活，链接为 / 的也被激活，那这时候的表现是 /a 的链接有两个类，一个是 router-link-exact-active，一个是 router-link-active。而 / 的链接只有 router-link-active 类。如果开启了 exact 模式，/ 的链接不会被激活。


**7. windows下安装nvm无法切换node版本**

查看这篇博客[nvm安装显示node无效](https://blog.csdn.net/Quincylk/article/details/78249235)
