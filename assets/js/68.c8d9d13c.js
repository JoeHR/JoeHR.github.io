(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{669:function(e,t,r){"use strict";r.r(t);var a=r(21),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("本文使用到的插件：")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Vetur")])]),e._v(" "),r("li",[r("strong",[e._v("ESLint")])]),e._v(" "),r("li",[e._v("Prettier")]),e._v(" "),r("li",[e._v("EditorConfig for VS Code")]),e._v(" "),r("li",[e._v("Bracket Pair Colorizer 2")]),e._v(" "),r("li",[e._v("Live Server")]),e._v(" "),r("li",[e._v("Better Comments")]),e._v(" "),r("li",[e._v("Auto Close Tag")]),e._v(" "),r("li",[e._v("Code Spell Checker")])]),e._v(" "),r("p",[e._v("核心就是 Vetur+ESLint，其他的我觉得就是锦上添花的作用")]),e._v(" "),r("blockquote",[r("p",[e._v("本文的配置是记录 "),r("code",[e._v("Vue CLI")]),e._v(" 生成的项目，若不是，请自行处理依赖关系")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("打开 vscode 的插件安装，搜索上面的插件，一一安装")])]),e._v(" "),r("li",[r("p",[e._v("打开 vscode 的设置，键入以下代码")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{  // 保存时自动格式化代码  "editor.formatOnSave": true,  // eslint配置项，保存时自动修复错误  "editor.codeActionsOnSave": {    "source.fixAll": true  },  // 让vetur使用vs自带的js格式化工具，以便在函数前面加个空格  "vetur.format.defaultFormatter.js": "vscode-typescript",  "javascript.format.semicolons": "remove",  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,  // 指定 *.vue 文件的格式化工具为vetur  "[vue]": {    "editor.defaultFormatter": "octref.vetur"  },  // 指定 *.js 文件的格式化工具为vscode自带  "[javascript]": {    "editor.defaultFormatter": "vscode.typescript-language-features"  },  // 默认使用prettier格式化支持的文件  "editor.defaultFormatter": "esbenp.prettier-vscode"}\n')])])])]),e._v(" "),r("li",[r("p",[e._v("在项目的根目录建立"),r("code",[e._v(".eslintrc.js")]),e._v(" 文件，键入以下代码（Vue CLI 已带）")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("module.exports = {  root: true,  env: {    node: true,  },  extends: ['plugin:vue/essential', '@vue/standard'],  parserOptions: {    parser: 'babel-eslint',  },  rules: {    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',  },}\n")])])])]),e._v(" "),r("li",[r("p",[e._v("在项目的根目录建立"),r("code",[e._v(".prettierrc")]),e._v(" 文件，键入以下代码")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{  "semi": false,  "singleQuote": true}\n')])])])]),e._v(" "),r("li",[r("p",[e._v("在项目的根目录建立"),r("code",[e._v(".editorconfig")]),e._v(" 文件，键入以下代码（Vue CLI 已带）")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[*.{js,jsx,ts,tsx,vue}]indent_style = spaceindent_size = 2trim_trailing_whitespace = trueinsert_final_newline = true\n")])])])])]),e._v(" "),r("p",[e._v("至此，即可完成，详细解释请看后面")]),e._v(" "),r("h2",{attrs:{id:"vetur"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vetur"}},[e._v("#")]),e._v(" Vetur")]),e._v(" "),r("p",[e._v("这个插件是 vscode 能优雅写 Vue 的核心，绝对的神器，它的优点：")]),e._v(" "),r("ul",[r("li",[e._v("代码高亮")]),e._v(" "),r("li",[e._v("代码片段")]),e._v(" "),r("li",[e._v("Emmet 语法支持")]),e._v(" "),r("li",[e._v("语法错误校验检查")]),e._v(" "),r("li",[e._v("格式化代码")]),e._v(" "),r("li",[e._v("代码提醒")]),e._v(" "),r("li",[e._v("对三方 UI 框架的支持")])]),e._v(" "),r("p",[e._v("这里主要说说格式化代码相关，防止和 "),r("code",[e._v("ESLint")]),e._v(" 打架。")]),e._v(" "),r("p",[e._v("从官方文档可以看出，"),r("code",[e._v("Vetur")]),e._v(" 集成了 "),r("code",[e._v("prettier")]),e._v("，这就非常棒了。"),r("code",[e._v("Vetur")]),e._v(" 能够让 "),r("code",[e._v("*.vue")]),e._v(" 文件中不同的块使用不同的格式化方案，` 调用 html 格式化工具，"),r("code",[e._v("低啊用 JavaScript 格式化工具，")]),e._v(" 使用样式格式化工具。")]),e._v(" "),r("p",[e._v("默认的格式化工具")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{  "vetur.format.defaultFormatter.html": "prettyhtml",  "vetur.format.defaultFormatter.css": "prettier",  "vetur.format.defaultFormatter.postcss": "prettier",  "vetur.format.defaultFormatter.scss": "prettier",  "vetur.format.defaultFormatter.less": "prettier",  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",  "vetur.format.defaultFormatter.js": "prettier",  "vetur.format.defaultFormatter.ts": "prettier",  "vetur.format.defaultFormatter.sass": "sass-formatter"}\n')])])]),r("p",[e._v("重要的是，这些工具已经集成！！！不需要额外下载了。")]),e._v(" "),r("p",[e._v("然后来进行一些设置，解决 "),r("code",[e._v("Vetur")]),e._v(" 和 "),r("code",[e._v("ESlint")]),e._v(" 的冲突。")]),e._v(" "),r("p",[e._v("打开 vscode 的设置")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://files.zuiyu1818.cn/H5/VSCodeSetting.jpg",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://files.zuiyu1818.cn/H5/VSCodeSetting.jpg",alt:"VSCode设置"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://files.zuiyu1818.cn/H5/VSCodeSetting.jpg",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSCode 设置"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("找个地方加入以下设置（注意最外层的 "),r("code",[e._v("{}")]),e._v("）")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{  // 将vetur的js格式化工具指定为vscode自带的  "vetur.format.defaultFormatter.js": "vscode-typescript",  // 移除js语句的分号  "javascript.format.semicolons": "remove",  // 在函数名后面加上括号，类似这种形式 foo () {}  "javascript.format.insertSpaceBeforeFunctionParenthesis": true}\n')])])]),r("p",[e._v("这里说说为什么要将 js 的格式化工具改为 vscode 自带的。查阅 "),r("em",[e._v("Prettier")]),e._v(" 官方文档，发现不支持在函数名后面加上括号。")]),e._v(" "),r("p",[e._v("这点和 "),r("em",[e._v("ESLint")]),e._v(" 冲突了，所以要更改。")]),e._v(" "),r("h2",{attrs:{id:"eslint"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[e._v("#")]),e._v(" ESLint")]),e._v(" "),r("p",[e._v("vscode 的 "),r("em",[e._v("ESLint")]),e._v(" 插件在某个版本已经移除了 "),r("code",[e._v('"eslint.validate"')]),e._v(" 这个配置选项，而网上很多教程都是使用的这个，导致一贴进 vscode 的配置文件，就开始保存和不兼容。")]),e._v(" "),r("p",[e._v("在新版的 "),r("em",[e._v("ESLint")]),e._v(" 中已经支持了对 "),r("code",[e._v("*.vue")]),e._v(" 文件的校验，所以无需再进行这项配置了，只需要添加一个保存时自动修复 ESLint 错误的功能就行了。")]),e._v(" "),r("p",[e._v("在 vscode 的配置文件中加入")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{  // eslint配置项，保存时自动修复错误  "editor.codeActionsOnSave": {    "source.fixAll": true  }}\n')])])]),r("p",[e._v("在项目的根目录（也就是和 "),r("code",[e._v("package.json")]),e._v(" 同级的目录）建立"),r("code",[e._v(".eslintrc.js")]),e._v(" 文件，键入以下代码：")]),e._v(" "),r("blockquote",[r("p",[e._v("一般来说使用 "),r("em",[e._v("Vue CLI")]),e._v(" 生成的项目，启用 ESLint 后会自动生成这个文件。")]),e._v(" "),r("p",[e._v("若忘了启用，自己手动 npm 安装 eslint 相关插件即可")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("module.exports = {  root: true,  env: {    node: true,  },  extends: ['plugin:vue/essential', '@vue/standard'],  parserOptions: {    parser: 'babel-eslint',  },  rules: {    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',  },}\n")])])]),r("h2",{attrs:{id:"prettier"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prettier"}},[e._v("#")]),e._v(" Prettier")]),e._v(" "),r("p",[r("em",[e._v("Vueter")]),e._v(" 虽好但只能作用于 "),r("code",[e._v("*.vue")]),e._v(" 文件，其他的文件像 "),r("code",[e._v("*.js *.html")]),e._v(" 等还需要使用 "),r("em",[e._v("Prettier")]),e._v(" 来格式化")]),e._v(" "),r("p",[e._v("这里做下简单配置，来让 "),r("em",[e._v("Prettier")]),e._v(" 更好的和和 "),r("em",[e._v("ESLint")]),e._v(" 配合。在项目的根目录建立"),r("code",[e._v(".prettierrc")]),e._v(" 文件，键入以下代码")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{  "semi": false,  "singleQuote": true}\n')])])]),r("p",[e._v("这两行代码的作用是去除语句结尾的分号 "),r("code",[e._v(";")]),e._v(" ，以及使用单引号 "),r("code",[e._v("'")]),e._v(" 替代双引号 "),r("code",[e._v('"')])]),e._v(" "),r("p",[e._v("同时建议在 vscode 的配置文件中加入以下代码：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{  // 保存时自动格式化代码  "editor.formatOnSave": true,  // 默认使用prettier格式化支持的文件  "editor.defaultFormatter": "esbenp.prettier-vscode",  // 指定 *.vue 文件的格式化工具为vetur，防止和prettier冲突  "[vue]": {    "editor.defaultFormatter": "octref.vetur"  },  // 指定 *.js 文件的格式化工具为vscode自带，以符合ESLint规范  "[javascript]": {    "editor.defaultFormatter": "vscode.typescript-language-features"  }}\n')])])]),r("blockquote",[r("p",[e._v("为符合 ESLint 规范，建议将不要使用 Prettier 来对 js 进行格式化，手动指定自带格式化工具")])]),e._v(" "),r("h2",{attrs:{id:"editorconfig-for-vs-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#editorconfig-for-vs-code"}},[e._v("#")]),e._v(" EditorConfig for VS Code")]),e._v(" "),r("p",[r("em",[e._v("EditorConfig")]),e._v(" 主要是用于让 vscode 支持"),r("code",[e._v(".editorconfig")]),e._v(" 文件。")]),e._v(" "),r("p",[r("code",[e._v(".editorconfig")]),e._v(" 文件中的设置用于在基本代码库中维持一致的编码风格和设置，例如缩进样式、选项卡宽度、行尾字符以及编码等，并且它还是跨编辑器的")]),e._v(" "),r("h4",{attrs:{id:"你需要和-eslint-的配置相符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#你需要和-eslint-的配置相符"}},[e._v("#")]),e._v(" 你需要和 ESLint 的配置相符")]),e._v(" "),r("p",[e._v("否则会出现你格式化代码以后，却不能通过你的代码校验工具的检验")]),e._v(" "),r("p",[e._v("可以这样说，"),r("em",[e._v("EditorConfig")]),e._v(" 是让代码创建前保持规范， "),r("em",[e._v("Prettier")]),e._v(" 是让代码保存后保持规范")]),e._v(" "),r("p",[e._v("示例：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[*.{js,jsx,ts,tsx,vue}]indent_style = spaceindent_size = 2trim_trailing_whitespace = trueinsert_final_newline = true\n")])])]),r("h2",{attrs:{id:"bracket-pair-colorizer-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bracket-pair-colorizer-2"}},[e._v("#")]),e._v(" Bracket Pair Colorizer 2")]),e._v(" "),r("blockquote",[r("p",[e._v("安装即可，无需额外配置")])]),e._v(" "),r("p",[e._v("有了它，你再也不怕找不到匹配的各种括号了。他会给匹配的括号赋予同样的颜色，并且给你圈出范围来")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://files.zuiyu1818.cn/H5/BracketPairColorizer.gif",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://files.zuiyu1818.cn/H5/BracketPairColorizer.gif",alt:"BracketPairColorizer 插件"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://files.zuiyu1818.cn/H5/BracketPairColorizer.gif",target:"_blank",rel:"noopener noreferrer"}},[e._v("BracketPairColorizer 插件"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"live-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#live-server"}},[e._v("#")]),e._v(" Live Server")]),e._v(" "),r("p",[e._v("为静态和动态页面生成一个具有实时重新加载功能的本地开发服务器，可以右击直接在浏览器查看")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://files.zuiyu1818.cn/H5/liveServe.gif",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://files.zuiyu1818.cn/H5/liveServe.gif",alt:"Live Server 插件"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://files.zuiyu1818.cn/H5/liveServe.gif",target:"_blank",rel:"noopener noreferrer"}},[e._v("Live Server 插件"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"better-comments"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#better-comments"}},[e._v("#")]),e._v(" Better Comments")]),e._v(" "),r("p",[e._v("更好看的注释，更好的区分各个地方了")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://files.zuiyu1818.cn/H5/betterComments.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://files.zuiyu1818.cn/H5/betterComments.png",alt:"Better Comments 插件"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://files.zuiyu1818.cn/H5/betterComments.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("Better Comments 插件"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"auto-close-tag"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#auto-close-tag"}},[e._v("#")]),e._v(" Auto Close Tag")]),e._v(" "),r("p",[e._v("自动闭合标签")]),e._v(" "),r("h2",{attrs:{id:"code-spell-checker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#code-spell-checker"}},[e._v("#")]),e._v(" Code Spell Checker")]),e._v(" "),r("p",[e._v("单词校验插件，可以避免很多错误，单词写错造成的 bug，一言难尽，强烈安利")]),e._v(" "),r("h2",{attrs:{id:"后记"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[e._v("#")]),e._v(" 后记")]),e._v(" "),r("p",[e._v("为什么不使用下面的插件")]),e._v(" "),r("ul",[r("li",[e._v("CSS Peek ： 可能某些会造成 CPU 负载巨高")]),e._v(" "),r("li",[e._v("Auto Rename Tag ：作者说可能存在性能问题")])]),e._v(" "),r("p",[e._v("当然，以上都是自己的浅薄之见，欢迎评论交流")])])}),[],!1,null,null,null);t.default=s.exports}}]);