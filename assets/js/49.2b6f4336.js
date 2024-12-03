(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{637:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简单介绍下promise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单介绍下promise"}},[s._v("#")]),s._v(" 简单介绍下Promise")]),s._v(" "),a("p",[s._v("Promise 是异步编程的一种解决方案（实现异步编程的方法有：回调函数callback，promise,Generator和 async/await），比传统的解决方案--回调函数和事件--更合理和更强大。它有社区最早提出和实现，ES6将其写进了语言标准，统一了用法，原生提供了Promise对象。有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。")]),s._v(" "),a("p",[s._v("Promise的精髓是“状态”，用维护状态、传递状态的方式来使得回调函数能够及时调用，它比传递callback函数要简单、灵活的多")]),s._v(" "),a("blockquote",[a("p",[s._v("异步的行为是js的基础，以前的实现并不理想。早起js只支持定义回调函数来表明异步操作完成。串联多个异步操作是一个常见的问题。通常需要深度嵌套回调函数（俗称“回调地狱”）。Promise 解决了这个问题，因为他可以链式调用")])]),s._v(" "),a("p",[a("strong",[s._v("解决了什么问题")])]),s._v(" "),a("ul",[a("li",[s._v("消灭嵌套调用：通过Promise的链式调用可以解决；")]),s._v(" "),a("li",[s._v("合并多个任务的请求结果： Promise.all(), Promise.race()")])]),s._v(" "),a("h2",{attrs:{id:"实现一个简单的-支持异步链式调用的promise类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现一个简单的-支持异步链式调用的promise类"}},[s._v("#")]),s._v(" 实现一个简单的，支持异步链式调用的Promise类")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/frontend/js-js03.html#promise"}},[s._v("手写一个符合Promise A+ 规范的Promise 类")])],1),s._v(" "),a("h2",{attrs:{id:"promise存在哪些缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise存在哪些缺点"}},[s._v("#")]),s._v(" Promise存在哪些缺点")]),s._v(" "),a("ul",[a("li",[s._v("无法取消"),a("code",[s._v("Promise")]),s._v("：一旦新建它就会立即执行，无法中途取消")]),s._v(" "),a("li",[s._v("如果不设置reject回调函数，Promise内部抛出的错误，不会反映到外部。")]),s._v(" "),a("li",[s._v("吞掉错误或异常，错误只能顺序处理，即便在"),a("code",[s._v("Promise")]),s._v("链最后添加"),a("code",[s._v("catch")]),s._v("方法，依然可能存在无法捕获的错误（catch内部可能会出现错误）")])]),s._v(" "),a("h2",{attrs:{id:"使用promise-进行顺序-sequence-处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用promise-进行顺序-sequence-处理"}},[s._v("#")]),s._v(" 使用Promise 进行顺序（sequence）处理")]),s._v(" "),a("ul",[a("li",[s._v("使用"),a("code",[s._v("async")]),s._v("函数配合 "),a("code",[s._v("await")]),s._v(" 或者使用 "),a("code",[s._v("generator")]),s._v("函数配合"),a("code",[s._v("yield")])]),s._v(" "),a("li",[s._v("使用"),a("code",[s._v("promise.then")]),s._v(" 通过 for循环或者 Array.prototype.reduce 实现")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sequenceTasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("recordVal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" results\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" pushValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("recordVal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("task")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pushValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"如何停止一个promise链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何停止一个promise链"}},[s._v("#")]),s._v(" 如何停止一个Promise链")]),s._v(" "),a("p",[s._v("在要停止的"),a("code",[s._v("promise")]),s._v("链位置添加一个方法，返回一个永不执行的"),a("code",[s._v("resolve")]),s._v("或者"),a("code",[s._v("reject")]),s._v("的"),a("code",[s._v("promise")]),s._v(",那么这个"),a("code",[s._v("promise")]),s._v("永远处于"),a("code",[s._v("pending")]),s._v("状态，所以永远也不会向下执行"),a("code",[s._v("then")]),s._v("或"),a("code",[s._v("catch")]),s._v("了，这样就停止了一个"),a("code",[s._v("promise")]),s._v("链")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\npromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cancel "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("stop")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n")])])]),a("h2",{attrs:{id:"promise链上返回的最后一个promise出错了怎么办"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise链上返回的最后一个promise出错了怎么办"}},[s._v("#")]),s._v(" Promise链上返回的最后一个Promise出错了怎么办")]),s._v(" "),a("p",[s._v("catch 在promise 链式调用的末尾调用，用于捕获链条中的错误信息，但是catch方法内部也可能出现错误，所以有些 promise 实现中增加了一个方法 done, done 相当于提供了一个不会出错的catch方法，并且不再返回一个promise,一般用来结束一个promise链。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("reason")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'done'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reason"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" reason\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"promise-存在哪些使用技巧或者最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-存在哪些使用技巧或者最佳实践"}},[s._v("#")]),s._v(" Promise 存在哪些使用技巧或者最佳实践")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("链式 "),a("code",[s._v("promise")]),s._v(" 要返回一个 "),a("code",[s._v("promise")]),s._v("， 而不是构造一个 "),a("code",[s._v("promise")])])]),s._v(" "),a("li",[a("p",[s._v("合理的使用 "),a("code",[s._v("promise.all")]),s._v(" 和 "),a("code",[s._v("promise.race")]),s._v(" 等方法")])]),s._v(" "),a("li",[a("p",[s._v("在写 "),a("code",[s._v("promise")]),s._v(" 链式调用的时候， "),a("code",[s._v("then")]),s._v(" 方法不传 "),a("code",[s._v("onRejected")]),s._v(" 函数，只需要在最末尾加一个 "),a("code",[s._v("catch()")]),s._v(" 就可以了，这样在该链条中的 "),a("code",[s._v("promise")]),s._v(" 发生的错误都会被最后的"),a("code",[s._v("catch")]),s._v(" 捕获到。如果 "),a("code",[s._v("catch()")]),s._v(" 代码有出现错误的可能，需要在链式调用的末尾增加 "),a("code",[s._v("done()")]),s._v(" 函数")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);