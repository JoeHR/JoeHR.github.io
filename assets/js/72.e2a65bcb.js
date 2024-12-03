(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{674:function(e,t,a){"use strict";a.r(t);var s=a(21),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"单元测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单元测试"}},[e._v("#")]),e._v(" 单元测试")]),e._v(" "),a("p",[e._v("顾名思义单元测试就是测试最小单元，我们的单元可能是一个函数，一个button的样式，一个文案等等都可能是一个单元。那么我们在做需求的时候没有必要将所有的单元都做测试，那可能测试代码要比需求代码多得多呢。我们在做需求之前需要提前想好我们的测试用例，并针对测试用例编写测试代码，然后写需求代码。")]),e._v(" "),a("h3",{attrs:{id:"为什么做单元测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么做单元测试"}},[e._v("#")]),e._v(" 为什么做单元测试")]),e._v(" "),a("p",[e._v("做前端的很多人可能不会去写单元测试，认为这是一个浪费时间的事情，我们有这么多的需求，哪还有时间跟精力去编写测试代码？这么想当然没有错，但是当一个项目由多人一起维护的时候，假如A写了一个页面，B去维护A的页面加了一些逻辑，C去维护该页面再添加一些逻辑，当A再去维护这个页面的时候，可能就会发现已经不是当初他认识的代码了，函数也不是原来的语义，大部分的变量不知道干什么用的。那么A需要捋清楚B、C的逻辑，在B、C的基础上小心翼翼的编写新的需求，生怕哪一步写错，导致线上的代码出错。长此以往下去代码越来越难以维护，越来越少的人能看懂页面内的逻辑，糊墙试代码将页面堵得水泄不通！当然这是最坏的想法，我们不防往好的一方面来想，假如我们每个人的编码水平都很高，都按着规范去写代码，A写完代码，B去维护的时候将A的代码全部了解之后健壮了新的代码，C去维护的时候再把A、B的代码全部掌握后再去写代码，一个月，三个月。。。")]),e._v(" "),a("p",[e._v("所以依赖我们自觉去维护代码首先对我们个人能力有很大要求，其次对我们精力也是恨到的浪费。我们要时刻注意是否自己的代码影响到别人的代码。从长远考虑，单元测试是一个大型项目的必然选择。")]),e._v(" "),a("p",[e._v("我们讲的单元测试，只是测试代码的最小单元，一个函数就是一个单元，在这里我要提倡大家去学习一下函数式编程。")]),e._v(" "),a("h2",{attrs:{id:"mocha"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mocha"}},[e._v("#")]),e._v(" mocha")]),e._v(" "),a("p",[e._v("使用 NPM 全局安装 ：")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("global mocha\n")])])]),a("p",[e._v("也可以作为项目的依赖进行安装")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("dev mocha\n")])])]),a("blockquote",[a("p",[e._v("安装mocha> = v3.0.0，"),a("code",[e._v("npm")]),e._v("的版本应该> = v2.14.2。除此，确保使用Node.js的版本> = v4来运行mocha")])]),e._v(" "),a("h3",{attrs:{id:"测试脚本的编写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试脚本的编写"}},[e._v("#")]),e._v(" 测试脚本的编写")]),e._v(" "),a("p",[a("code",[e._v("Mocha")]),e._v('的作用是运行测试脚本，首先必须学会写测试脚本。所谓"测试脚本"，就是用来测试源码的脚本。')]),e._v(" "),a("p",[e._v("下面是一个 加法模块 "),a("code",[e._v("add.js")]),e._v("的代码")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// add.js\nfunction add(x,y){\n\treturn x+y\n}\n\nmodule.exports = add\n")])])]),a("p",[e._v("要测试这个加法模块是否正确，就要写测试脚本。")]),e._v(" "),a("p",[e._v("通常，测试脚本与所要测试的源码脚本同名，但是后缀名为"),a("code",[e._v(".test.js")]),e._v("（表示测试）或者"),a("code",[e._v(".spec.js")]),e._v("（表示规格）。比如，"),a("code",[e._v("add.js")]),e._v("的测试脚本名字就是"),a("a",{attrs:{href:"https://github.com/ruanyf/mocha-demos/blob/master/demo01/add.test.js",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("add.test.js")]),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// add.test.js\n\nvar add = require('./add.js')\nvar expect = require('chai').expect\n\ndescribe('测试 add 函数'，function(){\n\tit('1+1应该等于2',function(){\n\t\texpect(add(1,1)).to.be(2)\n\t})\n})\n")])])]),a("p",[e._v("上面这段代码，就是测试脚本，它可以独立执行。测试脚本里面应该包括一个或多个"),a("code",[e._v("describe")]),e._v("块，每个"),a("code",[e._v("describe")]),e._v("块应该包括一个或多个"),a("code",[e._v("it")]),e._v("块。")]),e._v(" "),a("p",[a("code",[e._v("describe")]),e._v('块称为"测试套件"（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称（"加法函数的测试"），第二个参数是一个实际执行的函数。')]),e._v(" "),a("p",[a("code",[e._v("it")]),e._v('块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数。')]),e._v(" "),a("h3",{attrs:{id:"断言库的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#断言库的用法"}},[e._v("#")]),e._v(" 断言库的用法")]),e._v(" "),a("p",[e._v("上面的测试脚本里面 ，有一句断言")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("expect（add(1,1)）.to.be.equal(2)\n")])])]),a("p",[e._v('所谓"断言"，就是判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误。上面这句断言的意思是，调用'),a("code",[e._v("add(1, 1)")]),e._v("，结果应该等于2。")]),e._v(" "),a("p",[e._v("所有的测试用例（it块）都应该含有一句或多句的断言。它是编写测试用例的关键。断言功能由断言库来实现，Mocha本身不带断言库，所以必须先引入断言库。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var expect = require('chai').expect;\n")])])]),a("p",[e._v("断言库有很多种，Mocha并不限制使用哪一种。上面代码引入的断言库是"),a("a",{attrs:{href:"http://chaijs.com/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("chai")]),a("OutboundLink")],1),e._v("，并且指定使用它的"),a("a",{attrs:{href:"http://chaijs.com/api/bdd/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("expect")]),a("OutboundLink")],1),e._v("断言风格。")]),e._v(" "),a("p",[a("code",[e._v("expect")]),e._v("断言的优点是很接近自然语言，下面是一些例子。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 相等或不相等\nexpect(4 + 5).to.be.equal(9);\nexpect(4 + 5).to.be.not.equal(10);\nexpect(foo).to.be.deep.equal({ bar: 'baz' });\n\n// 布尔值为true\nexpect('everthing').to.be.ok;\nexpect(false).to.not.be.ok;\n\n// typeof\nexpect('test').to.be.a('string');\nexpect({ foo: 'bar' }).to.be.an('object');\nexpect(foo).to.be.an.instanceof(Foo);\n\n// include\nexpect([1,2,3]).to.include(2);\nexpect('foobar').to.contain('foo');\nexpect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');\n\n// empty\nexpect([]).to.be.empty;\nexpect('').to.be.empty;\nexpect({}).to.be.empty;\n\n// match\nexpect('foobar').to.match(/^foo/);\n")])])]),a("p",[e._v("基本上，"),a("code",[e._v("expect")]),e._v("断言的写法都是一样的。头部是"),a("code",[e._v("expect")]),e._v("方法，尾部是断言方法，比如"),a("code",[e._v("equal")]),e._v("、"),a("code",[e._v("a")]),e._v("/"),a("code",[e._v("an")]),e._v("、"),a("code",[e._v("ok")]),e._v("、"),a("code",[e._v("match")]),e._v("等。两者之间使用"),a("code",[e._v("to")]),e._v("或"),a("code",[e._v("to.be")]),e._v("连接。")]),e._v(" "),a("p",[e._v("如果"),a("code",[e._v("expect")]),e._v("断言不成立，就会抛出一个错误。事实上，只要不抛出错误，测试用例就算通过。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("it('1 加 1 应该等于 2', function() {});\n")])])]),a("p",[e._v("上面的这个测试用例，内部没有任何代码，由于没有抛出了错误，所以还是会通过。")]),e._v(" "),a("h3",{attrs:{id:"异步测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步测试"}},[e._v("#")]),e._v(" 异步测试")]),e._v(" "),a("p",[e._v("Mocha默认每个测试用例最多执行2000毫秒，如果到时没有得到结果，就报错。对于涉及异步操作的测试用例，这个时间往往是不够的，需要用"),a("code",[e._v("-t")]),e._v("或"),a("code",[e._v("--timeout")]),e._v("参数指定超时门槛。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("it('测试应该5000毫秒后结束', function(done) {\n  var x = true;\n  var f = function() {\n    x = false;\n    expect(x).to.be.not.ok;\n    done(); // 通知Mocha测试结束\n  };\n  setTimeout(f, 4000);\n});\n")])])]),a("p",[e._v("上面的测试用例，需要4000毫秒之后，才有运行结果。所以，需要用"),a("code",[e._v("-t")]),e._v("或"),a("code",[e._v("--timeout")]),e._v("参数，改变默认的超时设置。")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("$ mocha "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("t "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5000")]),e._v(" timeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("js\n")])])]),a("p",[e._v("上面命令将测试的超时时限指定为5000毫秒。")]),e._v(" "),a("p",[e._v("另外，上面的测试用例里面，有一个"),a("code",[e._v("done")]),e._v("函数。"),a("code",[e._v("it")]),e._v("块执行的时候，传入一个"),a("code",[e._v("done")]),e._v("参数，当测试结束的时候，必须显式调用这个函数，告诉Mocha测试结束了。否则，Mocha就无法知道，测试是否结束，会一直等到超时报错。你可以把这行删除试试看。")]),e._v(" "),a("p",[e._v("Mocha默认会高亮显示超过75毫秒的测试用例，可以用"),a("code",[e._v("-s")]),e._v("或"),a("code",[e._v("--slow")]),e._v("调整这个参数。")]),e._v(" "),a("p",[e._v("上面命令指定高亮显示耗时超过1000毫秒的测试用例。")]),e._v(" "),a("p",[e._v("下面是另外一个异步测试的例子"),a("a",{attrs:{href:"https://github.com/ruanyf/mocha-demos/blob/master/demo05/async.test.js",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("async.test.js")]),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("it('异步请求应该返回一个对象', function(done){\n  request\n    .get('https://api.github.com')\n    .end(function(err, res){\n      expect(res).to.be.an('object');\n      done();\n    });\n});\n")])])]),a("p",[e._v("运行下面命令，可以看到这个测试会通过。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ mocha -t 10000 async.test.js\n")])])]),a("p",[e._v("另外，Mocha内置对Promise的支持，允许直接返回Promise，等到它的状态改变，再执行断言，而不用显式调用"),a("code",[e._v("done")]),e._v("方法。请看"),a("a",{attrs:{href:"https://github.com/ruanyf/mocha-demos/blob/master/demo05/promise.test.js",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("promise.test.js")]),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("it('异步请求应该返回一个对象', function() {\n  return fetch('https://api.github.com')\n    .then(function(res) {\n      return res.json();\n    }).then(function(json) {\n      expect(json).to.be.an('object');\n    });\n});\n")])])]),a("h3",{attrs:{id:"测试用例的钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试用例的钩子"}},[e._v("#")]),e._v(" 测试用例的钩子")]),e._v(" "),a("p",[e._v("Mocha在"),a("code",[e._v("describe")]),e._v("块之中，提供测试用例的四个钩子："),a("code",[e._v("before()")]),e._v("、"),a("code",[e._v("after()")]),e._v("、"),a("code",[e._v("beforeEach()")]),e._v("和"),a("code",[e._v("afterEach()")]),e._v("。它们会在指定时间执行。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("describe('hooks', function() {\n\n  before(function() {\n    // 在本区块的所有测试用例之前执行\n  });\n\n  after(function() {\n    // 在本区块的所有测试用例之后执行\n  });\n\n  beforeEach(function() {\n    // 在本区块的每个测试用例之前执行\n  });\n\n  afterEach(function() {\n    // 在本区块的每个测试用例之后执行\n  });\n\n  // test cases\n});\n")])])]),a("p",[e._v("进入"),a("a",{attrs:{href:"https://github.com/ruanyf/mocha-demos/tree/master/demo06",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("demo06")]),a("OutboundLink")],1),e._v("子目录，可以看到下面两个例子。首先是"),a("code",[e._v("beforeEach")]),e._v("的例子"),a("a",{attrs:{href:"https://github.com/ruanyf/mocha-demos/blob/master/demo06/beforeEach.test.js",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("beforeEach.test.js")]),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// beforeEach.test.js\ndescribe('beforeEach示例', function() {\n  var foo = false;\n\n  beforeEach(function() {\n    foo = true;\n  });\n\n  it('修改全局变量应该成功', function() {\n    expect(foo).to.be.equal(true);\n  });\n});\n")])])]),a("Vssue",{attrs:{title:"Vssue Demo"}})],1)}),[],!1,null,null,null);t.default=n.exports}}]);