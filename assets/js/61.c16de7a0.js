(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{660:function(s,e,a){"use strict";a.r(e);var t=a(21),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"在-centos-7-中安装-node-js-12-x-lts-最新版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-centos-7-中安装-node-js-12-x-lts-最新版"}},[s._v("#")]),s._v(" 在 Centos 7 中安装 Node.js 12.x LTS 最新版")]),s._v(" "),a("p",[s._v("由于 centos 中，Node.js 的 yum 源默认不是最新发行版，所以为了安装最新稳定版的nodejs,我们可以采用 二进制发行版 来快速安装 Node.js")]),s._v(" "),a("p",[s._v("执行命令：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sL")]),s._v(" https://rpm.nodesource.com/setup_10.x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -\n")])])]),a("p",[a("strong",[s._v("注意")]),s._v(" 上面命令中的"),a("code",[s._v("setup_10.x")]),s._v(" 表示你即将安装的 最新稳定发行版，如果想安装12.x版本的，上面的 "),a("code",[s._v("setup_10.x")]),s._v(" 改为 "),a("code",[s._v("setup_12.x")]),s._v("即可")]),s._v(" "),a("p",[s._v("这个命令将为问哦们配置Node.js NPM 存储库")]),s._v(" "),a("p",[s._v("配置了存储库之后，需要清理yum 源缓存并选择最快的源重新生成缓存")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum clean all\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum makecache fast\n")])])]),a("p",[s._v("安装编译环境：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" gcc-c++ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])]),a("p",[s._v("安装Node.js")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" nodejs\n")])])]),a("p",[s._v("查看Node.js 版本")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("node -v\n")])])]),a("p",[s._v("如果输出的版本不是最新的Node.js版本的话，那么执行命令"),a("code",[s._v("yum remove nodejs")]),s._v("将已安装的Node.js移除，然后重新安装即可")]),s._v(" "),a("Vssue",{attrs:{title:"Vssue Demo"}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);