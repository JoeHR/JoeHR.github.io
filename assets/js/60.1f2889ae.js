(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{656:function(a,t,s){"use strict";s.r(t);var e=s(21),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"使用docker-docker-compose-快速-搭建gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用docker-docker-compose-快速-搭建gitlab"}},[a._v("#")]),a._v(" 使用Docker,Docker-compose 快速 搭建Gitlab")]),a._v(" "),s("blockquote",[s("p",[a._v("** gitlab 至少需要2核2G的配置 **")])]),a._v(" "),s("h2",{attrs:{id:"docker-搭建-gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-搭建-gitlab"}},[a._v("#")]),a._v(" Docker 搭建 gitlab")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://docs.gitlab.com/omnibus/docker/README.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方安装文档"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("官方文档 给出的搭建 gitlab命令只有下面这条命令：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--detach")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--hostname")]),a._v(" gitlab.example.com "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--publish")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v(":443 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--publish")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--publish")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(":22 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" gitlab "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--volume")]),a._v(" /srv/gitlab/config:/etc/gitlab "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--volume")]),a._v(" /srv/gitlab/logs:/var/log/gitlab "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--volume")]),a._v(" /srv/gitlab/data:/var/opt/gitlab "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  gitlab/gitlab-ce:latest\n")])])]),s("ul",[s("li",[a._v("--detach ： 跟 -d 参数 相同，表示  后台 运行")]),a._v(" "),s("li",[a._v("--hostname:  主机域名（没有域名 可有 直接写 ip，有域名的")]),a._v(" "),s("li",[a._v("-- publish:  标识使用开放的端口  443 一般是 https 端口，80端口一般是 默认的访问端口，22 是 克隆需要访问的端口，（一般 ssh 走的也是 22端口，直接走22 端口 容易 被攻击）")]),a._v(" "),s("li",[a._v("--name:  镜像名称")]),a._v(" "),s("li",[a._v("--restart:  docker 服务重启的时候 ，gitlab服务也自动重启")]),a._v(" "),s("li",[a._v("--volume:  将 gitlab 上的一些数据和日志 配置 映射到 宿主机上")])]),a._v(" "),s("p",[a._v("但在这里，我们不采用默认的配置，修改一些配置，所有")]),a._v(" "),s("p",[a._v("将上面的命令 复制 修改成 下面的样式，然后运行下面的命令：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--detach")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--hostname")]),a._v(" ***.**.**.** "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--publish")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("13800")]),a._v(":80 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--publish")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("13822")]),a._v(":22 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" gitlab_test "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  gitlab/gitlab-ce:latest\n")])])]),s("p",[a._v("运行命令 结果如下：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@VM_0_6_centos ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# sudo docker run --detach \\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--hostname")]),a._v(" 宿主机的ip "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--publish")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("13800")]),a._v(":80 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--publish")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("13822")]),a._v(":22 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" gitlab_test "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   gitlab/gitlab-ce:latest\nUnable to "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" image "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'gitlab/gitlab-ce:latest'")]),a._v(" locally\nlatest: Pulling from gitlab/gitlab-ce\ne80174c8b43b: Pull complete \nd1072db285cc: Pull complete \n858453671e67: Pull complete \n3d07b1124f98: Pull complete \n43d9dea843dd: Pull complete \ncab5a34e8fb7: Pull complete \n635509edca6d: Pull complete \nf91b4dfa0ce0: Pull complete \na3ea8e47245c: Pull complete \ne6ad628e595f: Pull complete \nDigest: sha256:bbd8d61fbf66321e454225001e67ff5bf19ef9f64c1f26210ea4479130cc4e5d\nStatus: Downloaded newer image "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" gitlab/gitlab-ce:latest\n0308ae8385076c8be779d1e2e1d61a0565e8a0d10443b2a8a6280a977794e325\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@VM_0_6_centos ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@VM_0_6_centos ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@VM_0_6_centos ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@VM_0_6_centos ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@VM_0_6_centos ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker ps")]),a._v("\nCONTAINER ID        IMAGE                     COMMAND                  CREATED             STATUS                    PORTS                                                   NAMES\n0308ae838507        gitlab/gitlab-ce:latest   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/assets/wrapper"')]),a._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("49")]),a._v(" minutes ago      Up "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("49")]),a._v(" minutes "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("healthy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v("/tcp, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:13822-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v("/tcp, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:13800-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("/tcp   gitlab_test\nd68f1d62a0f2        mysql                     "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"docker-entrypoint.s…"')]),a._v("   About an hour ago   Up About an hour          "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("33060")]),a._v("/tcp, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:28003-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("/tcp                      home_mysql2_1\n37fd5e41efed        mysql                     "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"docker-entrypoint.s…"')]),a._v("   About an hour ago   Up About an hour          "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("33060")]),a._v("/tcp, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:28002-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("/tcp                      home_mysql1_1\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@VM_0_6_centos ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker ps |grep gitlab_test")]),a._v("\n0308ae838507        gitlab/gitlab-ce:latest   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/assets/wrapper"')]),a._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),a._v(" minutes ago      Up "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),a._v(" minutes "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("healthy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v("/tcp, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:13822-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v("/tcp, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:13800-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("/tcp   gitlab_test\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@VM_0_6_centos ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ")]),a._v("\n")])])]),s("p",[a._v("然后 开放 防火墙 13800 对外端口")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("13800")]),a._v("/tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\n")])])]),s("p",[a._v("打印 docker 日志")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" gitlab_test\n")])])]),s("p",[a._v("[gitlab访问]（ http://122.51.167.54:13800/ ）")]),a._v(" "),s("h2",{attrs:{id:"使用-docker-compose-来安装-gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-compose-来安装-gitlab"}},[a._v("#")]),a._v(" 使用 docker-compose 来安装 Gitlab")]),a._v(" "),s("h3",{attrs:{id:"_1、先删除-上面-安装的-gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、先删除-上面-安装的-gitlab"}},[a._v("#")]),a._v(" 1、先删除 上面 安装的 Gitlab")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("docker ps")]),a._v(" 或者 "),s("code",[a._v("docker ps -a")])])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@VM_0_6_centos ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker ps -a")]),a._v("\nCONTAINER ID        IMAGE                     COMMAND                  CREATED             STATUS                PORTS                                                   NAMES\n0308ae838507        gitlab/gitlab-ce:latest   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/assets/wrapper"')]),a._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" days ago          Up "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" days "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("healthy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v("/tcp, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:13822-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v("/tcp, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:13800-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("/tcp   gitlab_test\nd68f1d62a0f2        mysql                     "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"docker-entrypoint.s…"')]),a._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" days ago          Up "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" days             "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("33060")]),a._v("/tcp, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:28003-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("/tcp                      home_mysql2_1\n37fd5e41efed        mysql\n")])])]),s("ul",[s("li",[s("p",[a._v("停止 Gitlab_test 镜像："),s("code",[a._v("docker stop gitlab_test")])])]),a._v(" "),s("li",[s("p",[a._v("删除 gitlab_test 镜像： docker rm gitlab_test")])])]),a._v(" "),s("h3",{attrs:{id:"_2、创建编辑-docker-compose-yml-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、创建编辑-docker-compose-yml-文件"}},[a._v("#")]),a._v(" 2、创建编辑 docker-compose.yml 文件")]),a._v(" "),s("blockquote",[s("p",[a._v("**前提是 已安装好  docker-compose **")])]),a._v(" "),s("ul",[s("li",[a._v("进入 到 某个目录（自定义）")]),a._v(" "),s("li",[a._v("创建或编辑已有的 docker-compose.yml 文件")])]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker-compose.yml")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("web")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'gitlab/gitlab-ce:latest'")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" always\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hostname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'122.51.167.54'")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("GITLAB_OMNIBUS_CONFIG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[a._v("\n      external_url 'http://122.51.167.54'\n      # Add any other gitlab.rb configuration here, each on its own line")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'13800:80'")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'13822:22'")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/srv/gitlab/config:/etc/gitlab'")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/srv/gitlab/logs:/var/log/gitlab'")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/srv/gitlab/data:/var/opt/gitlab'")]),a._v("\n\n")])])]),s("ul",[s("li",[a._v("保存退出后  运行 "),s("code",[a._v("docker-compose up -d")]),a._v("命令")]),a._v(" "),s("li",[a._v("之后 浏览器打开 122.51.167.54:13800 就可以访问 gitlab")])]),a._v(" "),s("h3",{attrs:{id:"附件-完整的-gitlab-docker-compose-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附件-完整的-gitlab-docker-compose-配置"}},[a._v("#")]),a._v(" 附件：完整的 gitlab docker-compose 配置")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('version: "2"\n\nservices:\n  redis:\n    restart: always\n    image: sameersbn/redis:4.0.9-2\n    command:\n      - --loglevel warning\n    volumes:\n      - redis-data:/temp/lib/redis:Z\n\n  postgresql:\n    restart: always\n    image: sameersbn/postgresql:10-2\n    volumes:\n      - postgresql-data:/temp/lib/postgresql:Z\n    environment:\n      - DB_USER=gitlab\n      - DB_PASS=password\n      - DB_NAME=gitlabhq_production\n      - DB_EXTENSION=pg_trgm\n\n  gitlab:\n    restart: always\n    image: sameersbn/gitlab:12.4.3\n    depends_on:\n      - redis\n      - postgresql\n    ports:\n      - "13800:80"\n      - "13822:22"\n    volumes:\n      - gitlab-data:/temp/git/data:Z\n    environment:\n      - DEBUG=false\n\n      - DB_ADAPTER=postgresql\n      - DB_HOST=postgresql\n      - DB_PORT=5432\n      - DB_USER=gitlab\n      - DB_PASS=password\n      - DB_NAME=gitlabhq_production\n\n      - REDIS_HOST=redis\n      - REDIS_PORT=6379\n\n      - TZ=Asia/Kolkata\n      - GITLAB_TIMEZONE=Kolkata\n\n      - GITLAB_HTTPS=true\n      - SSL_SELF_SIGNED=true\n\n      - GITLAB_HOST=122.51.167.54\n      - GITLAB_PORT=13800\n      - GITLAB_SSH_PORT=13822\n      - GITLAB_RELATIVE_URL_ROOT=\n      - GITLAB_SECRETS_DB_KEY_BASE=long-and-random-alphanumeric-string\n      - GITLAB_SECRETS_SECRET_KEY_BASE=long-and-random-alphanumeric-string\n      - GITLAB_SECRETS_OTP_KEY_BASE=long-and-random-alphanumeric-string\n\n      - GITLAB_ROOT_PASSWORD=12345678\n      - GITLAB_ROOT_EMAIL=qiaoxinhen@sina.com\n\n      - GITLAB_NOTIFY_ON_BROKEN_BUILDS=true\n      - GITLAB_NOTIFY_PUSHER=false\n\n      - GITLAB_EMAIL=notifications@example.com\n      - GITLAB_EMAIL_REPLY_TO=noreply@example.com\n      - GITLAB_INCOMING_EMAIL_ADDRESS=reply@example.com\n\n      - GITLAB_BACKUP_SCHEDULE=daily\n      - GITLAB_BACKUP_TIME=01:00\n\n      - SMTP_ENABLED=false\n      - SMTP_DOMAIN=www.example.com\n      - SMTP_HOST=smtp.gmail.com\n      - SMTP_PORT=587\n      - SMTP_USER=mailer@example.com\n      - SMTP_PASS=password\n      - SMTP_STARTTLS=true\n      - SMTP_AUTHENTICATION=login\n\n      - IMAP_ENABLED=false\n      - IMAP_HOST=imap.gmail.com\n      - IMAP_PORT=993\n      - IMAP_USER=mailer@example.com\n      - IMAP_PASS=password\n      - IMAP_SSL=true\n      - IMAP_STARTTLS=false\n\n      - OAUTH_ENABLED=false\n      - OAUTH_AUTO_SIGN_IN_WITH_PROVIDER=\n      - OAUTH_ALLOW_SSO=\n      - OAUTH_BLOCK_AUTO_CREATED_USERS=true\n      - OAUTH_AUTO_LINK_LDAP_USER=false\n      - OAUTH_AUTO_LINK_SAML_USER=false\n      - OAUTH_EXTERNAL_PROVIDERS=\n\n      - OAUTH_CAS3_LABEL=cas3\n      - OAUTH_CAS3_SERVER=\n      - OAUTH_CAS3_DISABLE_SSL_VERIFICATION=false\n      - OAUTH_CAS3_LOGIN_URL=/cas/login\n      - OAUTH_CAS3_VALIDATE_URL=/cas/p3/serviceValidate\n      - OAUTH_CAS3_LOGOUT_URL=/cas/logout\n\n      - OAUTH_GOOGLE_API_KEY=\n      - OAUTH_GOOGLE_APP_SECRET=\n      - OAUTH_GOOGLE_RESTRICT_DOMAIN=\n\n      - OAUTH_FACEBOOK_API_KEY=\n      - OAUTH_FACEBOOK_APP_SECRET=\n\n      - OAUTH_TWITTER_API_KEY=\n      - OAUTH_TWITTER_APP_SECRET=\n\n      - OAUTH_GITHUB_API_KEY=\n      - OAUTH_GITHUB_APP_SECRET=\n      - OAUTH_GITHUB_URL=\n      - OAUTH_GITHUB_VERIFY_SSL=\n\n      - OAUTH_GITLAB_API_KEY=\n      - OAUTH_GITLAB_APP_SECRET=\n\n      - OAUTH_BITBUCKET_API_KEY=\n      - OAUTH_BITBUCKET_APP_SECRET=\n\n      - OAUTH_SAML_ASSERTION_CONSUMER_SERVICE_URL=\n      - OAUTH_SAML_IDP_CERT_FINGERPRINT=\n      - OAUTH_SAML_IDP_SSO_TARGET_URL=\n      - OAUTH_SAML_ISSUER=\n      - OAUTH_SAML_LABEL="Our SAML Provider"\n      - OAUTH_SAML_NAME_IDENTIFIER_FORMAT=urn:oasis:names:tc:SAML:2.0:nameid-format:transient\n      - OAUTH_SAML_GROUPS_ATTRIBUTE=\n      - OAUTH_SAML_EXTERNAL_GROUPS=\n      - OAUTH_SAML_ATTRIBUTE_STATEMENTS_EMAIL=\n      - OAUTH_SAML_ATTRIBUTE_STATEMENTS_NAME=\n      - OAUTH_SAML_ATTRIBUTE_STATEMENTS_USERNAME=\n      - OAUTH_SAML_ATTRIBUTE_STATEMENTS_FIRST_NAME=\n      - OAUTH_SAML_ATTRIBUTE_STATEMENTS_LAST_NAME=\n\n      - OAUTH_CROWD_SERVER_URL=\n      - OAUTH_CROWD_APP_NAME=\n      - OAUTH_CROWD_APP_PASSWORD=\n\n      - OAUTH_AUTH0_CLIENT_ID=\n      - OAUTH_AUTH0_CLIENT_SECRET=\n      - OAUTH_AUTH0_DOMAIN=\n      - OAUTH_AUTH0_SCOPE=\n\n      - OAUTH_AZURE_API_KEY=\n      - OAUTH_AZURE_API_SECRET=\n      - OAUTH_AZURE_TENANT_ID=\n\nvolumes:\n  redis-data:\n  postgresql-data:\n  gitlab-data:\n\n')])])]),s("Vssue",{attrs:{title:"Vssue Demo"}})],1)}),[],!1,null,null,null);t.default=n.exports}}]);