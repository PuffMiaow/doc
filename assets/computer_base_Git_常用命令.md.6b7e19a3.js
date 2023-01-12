import{_ as s,c as a,o as e,d as n}from"./app.cf0ffa8f.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Git 一些常用指令和规范","slug":"git-一些常用指令和规范","link":"#git-一些常用指令和规范","children":[]},{"level":2,"title":"初始化 git","slug":"初始化-git","link":"#初始化-git","children":[]},{"level":2,"title":"Git 基本使用","slug":"git-基本使用","link":"#git-基本使用","children":[]},{"level":2,"title":"1、拉取项目","slug":"_1、拉取项目","link":"#_1、拉取项目","children":[]},{"level":2,"title":"2、创建分支","slug":"_2、创建分支","link":"#_2、创建分支","children":[]},{"level":2,"title":"3、提交代码到缓存","slug":"_3、提交代码到缓存","link":"#_3、提交代码到缓存","children":[]},{"level":2,"title":"4、查看已经提交到缓存的数据","slug":"_4、查看已经提交到缓存的数据","link":"#_4、查看已经提交到缓存的数据","children":[]},{"level":2,"title":"5、删除缓存中的文件","slug":"_5、删除缓存中的文件","link":"#_5、删除缓存中的文件","children":[]},{"level":2,"title":"6、代码提交的注释","slug":"_6、代码提交的注释","link":"#_6、代码提交的注释","children":[]},{"level":2,"title":"7、代码提交","slug":"_7、代码提交","link":"#_7、代码提交","children":[]},{"level":2,"title":"代码仓库建立","slug":"代码仓库建立","link":"#代码仓库建立","children":[]},{"level":2,"title":"远程操作指令","slug":"远程操作指令","link":"#远程操作指令","children":[]},{"level":2,"title":"1、显示所有远程仓库","slug":"_1、显示所有远程仓库","link":"#_1、显示所有远程仓库","children":[]},{"level":2,"title":"2、获取远程仓库的变动","slug":"_2、获取远程仓库的变动","link":"#_2、获取远程仓库的变动","children":[]},{"level":2,"title":"3、将代码进行合并","slug":"_3、将代码进行合并","link":"#_3、将代码进行合并","children":[]},{"level":2,"title":"4、拉取远程仓库代码并与本地分支合并","slug":"_4、拉取远程仓库代码并与本地分支合并","link":"#_4、拉取远程仓库代码并与本地分支合并","children":[]},{"level":2,"title":"5.、强行推送当前分支到远程仓库，即使有冲突","slug":"_5-、强行推送当前分支到远程仓库-即使有冲突","link":"#_5-、强行推送当前分支到远程仓库-即使有冲突","children":[]},{"level":2,"title":"其它指令","slug":"其它指令","link":"#其它指令","children":[]},{"level":2,"title":"1、显示有变更的文件状态","slug":"_1、显示有变更的文件状态","link":"#_1、显示有变更的文件状态","children":[]},{"level":2,"title":"2、显示当前分支版本历史","slug":"_2、显示当前分支版本历史","link":"#_2、显示当前分支版本历史","children":[]},{"level":2,"title":"3、显示提交的历史和发生变更的文件","slug":"_3、显示提交的历史和发生变更的文件","link":"#_3、显示提交的历史和发生变更的文件","children":[]},{"level":2,"title":"4、显示过去 5(n)次提交","slug":"_4、显示过去-5-n-次提交","link":"#_4、显示过去-5-n-次提交","children":[]},{"level":2,"title":"5、显示该仓库所有提交过代码的用户，并按提交次数排名","slug":"_5、显示该仓库所有提交过代码的用户-并按提交次数排名","link":"#_5、显示该仓库所有提交过代码的用户-并按提交次数排名","children":[]},{"level":2,"title":"6、显示今天提交的文件变更、代码变动的行数","slug":"_6、显示今天提交的文件变更、代码变动的行数","link":"#_6、显示今天提交的文件变更、代码变动的行数","children":[]},{"level":2,"title":"7、删除本地分支","slug":"_7、删除本地分支","link":"#_7、删除本地分支","children":[]},{"level":2,"title":"8、删除远程分支","slug":"_8、删除远程分支","link":"#_8、删除远程分支","children":[]},{"level":2,"title":"代码回滚","slug":"代码回滚","link":"#代码回滚","children":[]},{"level":2,"title":"1、回退到上个版本","slug":"_1、回退到上个版本","link":"#_1、回退到上个版本","children":[]},{"level":2,"title":"2、回退到 n 次提交之前","slug":"_2、回退到-n-次提交之前","link":"#_2、回退到-n-次提交之前","children":[]},{"level":2,"title":"3、回退到指定提交版本","slug":"_3、回退到指定提交版本","link":"#_3、回退到指定提交版本","children":[]},{"level":2,"title":"4、回到 merge 时最初的状态，取消 merge 后的修改操作","slug":"_4、回到-merge-时最初的状态-取消-merge-后的修改操作","link":"#_4、回到-merge-时最初的状态-取消-merge-后的修改操作","children":[]},{"level":2,"title":"远程仓库控制","slug":"远程仓库控制","link":"#远程仓库控制","children":[]},{"level":2,"title":"1.查看远程仓库地址","slug":"_1-查看远程仓库地址","link":"#_1-查看远程仓库地址","children":[]},{"level":2,"title":"2.修改远程仓库地址","slug":"_2-修改远程仓库地址","link":"#_2-修改远程仓库地址","children":[]},{"level":2,"title":"3.删除远程仓库地址","slug":"_3-删除远程仓库地址","link":"#_3-删除远程仓库地址","children":[]},{"level":2,"title":"4.添加远程仓库地址","slug":"_4-添加远程仓库地址","link":"#_4-添加远程仓库地址","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"computer_base/Git/常用命令.md","lastUpdated":1673448677000}'),l={name:"computer_base/Git/常用命令.md"},p=n(`<h2 id="git-一些常用指令和规范" tabindex="-1">Git 一些常用指令和规范 <a class="header-anchor" href="#git-一些常用指令和规范" aria-hidden="true">#</a></h2><p>当我们写完代码的时候肯定是需要提交代码的，这时候就需要用到 Git 了，所以我们必须要了解一些 Git 常用的指令。在多人协作的大项目中，我们也要懂得一些规范。</p><p>首先我们电脑需要安装 git，安装好 git 之后做一些配置，以及设置好 SSH 才可以正常使用 git</p><p><a href="https://git-scm.com/" target="_blank" rel="noreferrer">git 官网</a> 在官网中我们可以找到 git 的下载地址</p><p>安装完 git 之后，如果是 Windows 系统我们可以打开<strong>git bash(就是那个带颜色的黑框框，安装好 git 后可以直接在 win 菜单搜索)<strong>控制台来使用 git 指令，如果是 mac 的系统，我们可以直接按</strong>command + 空格</strong>，搜索<strong>terminal</strong>打开控制台，然后我们输入<code>git --version</code>便可以看到我们安装的<code>git版本</code>(进了滴滴之后公司发了 Macbook Pro，第一次使用 mac，不得不说 mac 对于程序员真的很友好，省去了在 windows 上的好多麻烦)。</p><p>然后第一次使用 git 我们还需要进行一下用户环境的配置。</p><h2 id="初始化-git" tabindex="-1">初始化 git <a class="header-anchor" href="#初始化-git" aria-hidden="true">#</a></h2><p>第一次使用 git 的时候我们需要给 git 配置用户名和邮箱，用户和邮箱可以使用 github 的，也可以使用自己公司的 git lab 仓库的账号</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 配置用户名</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">用户名</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置邮箱</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">邮箱地址</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>配置好这个以后我们输入便可以看到我们所有的配置信息了，然后可以看到 <a href="http://user.name" target="_blank" rel="noreferrer">user.name</a> 和 user.email 配置得对不对</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>另外，当我们配置好邮箱和用户名之外，还需要配置一下 ssh 密钥（当然不配置也行，就是每次 pull、push 代码的时候都要输入密码，比较麻烦，所以还是一劳永逸配置一下 ssh 密钥方便以后开发）</p><p>关于 github 如何配置 ssh 密钥可以参考这篇文章 <a href="https://blog.csdn.net/qq_32641813/article/details/104510186?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-2&amp;spm=1001.2101.3001.4242" target="_blank" rel="noreferrer">将 ssh 密钥添加到 github</a></p><p>关于 gitlab 如何配置 ssh 密钥可以参考这篇文章<a href="https://blog.csdn.net/lizhiqiang1217/article/details/88801158" target="_blank" rel="noreferrer">gitlab 配置 ssh 密钥</a></p><h2 id="git-基本使用" tabindex="-1">Git 基本使用 <a class="header-anchor" href="#git-基本使用" aria-hidden="true">#</a></h2><p>在开发项目中，我们一般需要创建自己的代码分支，多人同时开发的时候项目就很容易产生冲突，所以我们每个人拥有一个自己的开发分支是比较好的选择，最后开发完成上线的时候再提交的预发环境分支中进行测试，当最后测试完成通过后再提交到项目的主分支 master，然后就可以通过 CI/CD 进行部署了，这是一套开发的基本的流程，所以我们再来看看如何去创建自己的分支。</p><h2 id="_1、拉取项目" tabindex="-1">1、拉取项目 <a class="header-anchor" href="#_1、拉取项目" aria-hidden="true">#</a></h2><p>我们到公司中，首先就是要先克隆公司的代码到本地</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">仓库地址</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当 clone 完成之后，本地仓库就与远程仓库自己进行了连接，接下来我们就可以进行自己的开发以及自己的代码提交了。</p><h2 id="_2、创建分支" tabindex="-1">2、创建分支 <a class="header-anchor" href="#_2、创建分支" aria-hidden="true">#</a></h2><p>首先拉取项目下来之后，我们就要创建自己的开发分支，以后提交代码都主要在自己的开发分支上进行提交</p><p>首先我们可以先查看一下目前所有的分支</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后可以创建自己的分支</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">分支名称</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>切换到自己创建的分支</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">需要切换到的分支名称</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上述两个指令可以合并成下面的这一个指令，<strong>创建并切换到分支</strong></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">分支名称</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>创建完分支并切换之后，查看自己当前分支</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3、提交代码到缓存" tabindex="-1">3、提交代码到缓存 <a class="header-anchor" href="#_3、提交代码到缓存" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_4、查看已经提交到缓存的数据" tabindex="-1">4、查看已经提交到缓存的数据 <a class="header-anchor" href="#_4、查看已经提交到缓存的数据" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">git status</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_5、删除缓存中的文件" tabindex="-1">5、删除缓存中的文件 <a class="header-anchor" href="#_5、删除缓存中的文件" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 如果没设置.gitignore不小心上传了一些不想上传的东西可以删除掉</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm --cached 文件名</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_6、代码提交的注释" tabindex="-1">6、代码提交的注释 <a class="header-anchor" href="#_6、代码提交的注释" aria-hidden="true">#</a></h2><p>一般提交代码的时候我们都要写上注释，而且写注释也有一定的规范，然后这个规范跟自己的公司有关，按照自己公司的规范来提交就行了，另外一般我们使用的提交规范有比如说像下面这样：</p><blockquote><p>feat：增加新功能</p><p>fix：修复 bug</p><p>docs：只改动文档</p><p>style：格式（不影响代码运行的改动）</p><p>refactor：重构</p><p>test：增加测试</p></blockquote><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">注释内容</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>比如我们增加了一个新模块：<code>git commit -m &quot;feat: 完成了订单下载模块&quot;</code></p><h2 id="_7、代码提交" tabindex="-1">7、代码提交 <a class="header-anchor" href="#_7、代码提交" aria-hidden="true">#</a></h2><p>代码写完之后就可以提交到我们自己的开发分支上了</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">提交的分支名字</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">比如说主分支origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这上面就是一套简单的拉取别人仓库代码以及开发提交代码的流程了。</p><h2 id="代码仓库建立" tabindex="-1">代码仓库建立 <a class="header-anchor" href="#代码仓库建立" aria-hidden="true">#</a></h2><p>我们在某一个项目的文件夹下可以建立一个 git 代码仓库，然后就可以给我们生成关于 git 的一些文件（可能是隐藏了的文件夹）</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者我们可以使用下面这个指令来直接新建一个目录，该目录会作为 git 代码库</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">项目名称</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="远程操作指令" tabindex="-1">远程操作指令 <a class="header-anchor" href="#远程操作指令" aria-hidden="true">#</a></h2><h2 id="_1、显示所有远程仓库" tabindex="-1">1、显示所有远程仓库 <a class="header-anchor" href="#_1、显示所有远程仓库" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2、获取远程仓库的变动" tabindex="-1">2、获取远程仓库的变动 <a class="header-anchor" href="#_2、获取远程仓库的变动" aria-hidden="true">#</a></h2><p>一般是将远程代码获取下来，然后去和<code>git merge</code>做合并处理</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">分支名称</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">比如说主分支origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3、将代码进行合并" tabindex="-1">3、将代码进行合并 <a class="header-anchor" href="#_3、将代码进行合并" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">分支名</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_4、拉取远程仓库代码并与本地分支合并" tabindex="-1">4、拉取远程仓库代码并与本地分支合并 <a class="header-anchor" href="#_4、拉取远程仓库代码并与本地分支合并" aria-hidden="true">#</a></h2><p>一般可以看作是 git fetch 和 git merge 的结合体，如果要追究它们有什么不同，那就是更深入的了，这篇文章只做 git 使用的基本介绍</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_5-、强行推送当前分支到远程仓库-即使有冲突" tabindex="-1">5.、强行推送当前分支到远程仓库，即使有冲突 <a class="header-anchor" href="#_5-、强行推送当前分支到远程仓库-即使有冲突" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--force</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="其它指令" tabindex="-1">其它指令 <a class="header-anchor" href="#其它指令" aria-hidden="true">#</a></h2><h2 id="_1、显示有变更的文件状态" tabindex="-1">1、显示有变更的文件状态 <a class="header-anchor" href="#_1、显示有变更的文件状态" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2、显示当前分支版本历史" tabindex="-1">2、显示当前分支版本历史 <a class="header-anchor" href="#_2、显示当前分支版本历史" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3、显示提交的历史和发生变更的文件" tabindex="-1">3、显示提交的历史和发生变更的文件 <a class="header-anchor" href="#_3、显示提交的历史和发生变更的文件" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--stat</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_4、显示过去-5-n-次提交" tabindex="-1">4、显示过去 5(n)次提交 <a class="header-anchor" href="#_4、显示过去-5-n-次提交" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-5</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--pretty</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--oneline</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_5、显示该仓库所有提交过代码的用户-并按提交次数排名" tabindex="-1">5、显示该仓库所有提交过代码的用户，并按提交次数排名 <a class="header-anchor" href="#_5、显示该仓库所有提交过代码的用户-并按提交次数排名" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shortlog</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sn</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_6、显示今天提交的文件变更、代码变动的行数" tabindex="-1">6、显示今天提交的文件变更、代码变动的行数 <a class="header-anchor" href="#_6、显示今天提交的文件变更、代码变动的行数" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight has-diff"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">diff</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--shortstat</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@{0 day ago}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_7、删除本地分支" tabindex="-1">7、删除本地分支 <a class="header-anchor" href="#_7、删除本地分支" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">git branch -d localBranchName</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_8、删除远程分支" tabindex="-1">8、删除远程分支 <a class="header-anchor" href="#_8、删除远程分支" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">git push origin --delete remoteBranchName</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="代码回滚" tabindex="-1">代码回滚 <a class="header-anchor" href="#代码回滚" aria-hidden="true">#</a></h2><p>在代码回滚之前我们先使用 <code>git log</code> 查看我们的代码提交记录，然后看了代码提交记录之后我们便可以按照版本进行回退</p><h2 id="_1、回退到上个版本" tabindex="-1">1、回退到上个版本 <a class="header-anchor" href="#_1、回退到上个版本" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--hard</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD^</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2、回退到-n-次提交之前" tabindex="-1">2、回退到 n 次提交之前 <a class="header-anchor" href="#_2、回退到-n-次提交之前" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--hard</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD~n</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3、回退到指定提交版本" tabindex="-1">3、回退到指定提交版本 <a class="header-anchor" href="#_3、回退到指定提交版本" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--hard</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit的哈希值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#这个哈希值就是输入git log之后可以看到的一大串字符</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#比如说 git reset --hard 92f1eb5aa5db9e04753e75a37ffd76f793cb281e</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>回滚后有可能代码会提交失败，必须进行强制推送到远程</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--force</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_4、回到-merge-时最初的状态-取消-merge-后的修改操作" tabindex="-1">4、回到 merge 时最初的状态，取消 merge 后的修改操作 <a class="header-anchor" href="#_4、回到-merge-时最初的状态-取消-merge-后的修改操作" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--abort</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="远程仓库控制" tabindex="-1">远程仓库控制 <a class="header-anchor" href="#远程仓库控制" aria-hidden="true">#</a></h2><h2 id="_1-查看远程仓库地址" tabindex="-1">1.查看远程仓库地址 <a class="header-anchor" href="#_1-查看远程仓库地址" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-修改远程仓库地址" tabindex="-1">2.修改远程仓库地址 <a class="header-anchor" href="#_2-修改远程仓库地址" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote set-url origin 仓库url</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3-删除远程仓库地址" tabindex="-1">3.删除远程仓库地址 <a class="header-anchor" href="#_3-删除远程仓库地址" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote rm origin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_4-添加远程仓库地址" tabindex="-1">4.添加远程仓库地址 <a class="header-anchor" href="#_4-添加远程仓库地址" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote add origin 仓库url</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p>上面就是一些 git 的基本使用指令了，其实还有很多很多指令以及一些 git 的原理我们也需要去了解，后面使用到的时候再去了解即可，现在这些指令已经基本够我们日常开发使用了，所以就目前记录一下，方便今后自己使用查阅，同时希望也可以帮助大家。</p>`,105),i=[p];function r(t,o,c,d,h,u){return e(),a("div",null,i)}const b=s(l,[["render",r]]);export{g as __pageData,b as default};
