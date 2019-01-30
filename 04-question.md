## 关于课程最后抛出的一些可能会遇到的面试问题总结

**为什么选择Vue框架？**

学习成本低

流行程度和作者对框架的维护热度高

文档完善、生态圈庞大、bug修复速度块

**Sass**

变量、嵌套规则、mixins、导入

**Vue的双向绑定是如何实现的？**

基本原理：数据驱动页面，页面映射数据

核心API：Object.defineProperty()

设计模式：观察者模式

监听者Observer监听Data变化，Data变化会触发Object.defineProperty()的set函数，通知观察者列表Dep，Wather订阅Dep，Dep接到通知后回调Watcher执行update函数，更新View

<img src="https://upload-images.jianshu.io/upload_images/9328836-50059cb6bc2384a5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700"/>

**有没有使用过CSS Module，基本原理是什么，Vue该如何做？**

CSS Module的工作原理就是把一个类名编译成哈希字符串，然后在引用的时候直接使用这个哈希字符串字符串，进而保证相同的类名根据不同的路径和组件名称得到不同的值，保证了最终的类名隔离。

Vue在vue-loader中配置开启CSS Module

    cssModules: {

      localIdentName: '[path][name]---[local]---[hash:base64:5]',

      camelCase: true

    },

在vue文件中style标签上加module属性

对于父组件声明的类名，在子组件内，CSS Module是不处理的，想用必须显示调用类名($style.类名）

**开启CSS Module之后如何使用第三方样式库？**

@import引入

**Vue的安装包有几个版本，遇到问题如何解决？**

<a href="https://cn.vuejs.org/v2/guide/installation.html#%E5%AF%B9%E4%B8%8D%E5%90%8C%E6%9E%84%E5%BB%BA%E7%89%88%E6%9C%AC%E7%9A%84%E8%A7%A3%E9%87%8A" target="_blank">对不同构建版本的解释</a>

在webpack中引入vue.esm.js

    resolve: {

      alias: {

          'vue$': 'vue/dist/vue.esm.js'

      }

    },

**为什么选择Webpack构建工具？**

CSS、JS模块化管理

资源合并、压缩，编译、打包，性能优化

提升开发效率

**项目是如何使用Webpack的？dev-server的原理是什么？**

entry    配置入口

module    配置loader

plugins    配置插件

output    配置输出

resolve    查询文件

devServer    开启服务

devServer利用websocket，在页面中注入JS，devServer会启动一个服务，JS和服务之间通过websocket建立通讯，服务监听改变后push更新，客户端接收更新做浏览器的刷新

**有没有实现一个webpack的loader？**

loader本质就是接收字符串(或者buffer)，再返回处理完的字符串(或者buffer)的过程。webpack会将加载的资源作为参数传入loader方法，交于loader处理，再返回。

**如何做任务管理？**

npm scripts、gulp

**你的项目有什么特色？**

自适应方案、模块化设计（CSS、JS）

**解决过什么问题，怎么解决的？用的什么技术方案？**

自适应。

自适应在移动端要适配很多种机型，通常是使用media+rem的方式去做，缺点是media是有优先级的，多个media有优先级覆盖不好会导致失效，设备太多测试很难，不具备通用性。

在vue中配置px2rem-loader，在开发时只使用px，px2rem把px转成rem，再动态的计算font-size。

**你对自己的项目是否满意，有改进空间吗？**

gzip压缩，vue异步加载

**如果这个项目现在让你重新设计，你会怎么思考？**



**前后端分离是如何做的？**

后端专注于服务、数据

前端专注于业务，视图

**前端的路由是什么原理？**

    history    pushstate、onpopstate

    hash    location.hash、hashchange

**Vue相关用法**

组件、模板、插槽等
