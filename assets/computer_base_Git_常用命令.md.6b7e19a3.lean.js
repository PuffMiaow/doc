import{_ as s,c as a,o as e,d as n}from"./app.cf0ffa8f.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Git 一些常用指令和规范","slug":"git-一些常用指令和规范","link":"#git-一些常用指令和规范","children":[]},{"level":2,"title":"初始化 git","slug":"初始化-git","link":"#初始化-git","children":[]},{"level":2,"title":"Git 基本使用","slug":"git-基本使用","link":"#git-基本使用","children":[]},{"level":2,"title":"1、拉取项目","slug":"_1、拉取项目","link":"#_1、拉取项目","children":[]},{"level":2,"title":"2、创建分支","slug":"_2、创建分支","link":"#_2、创建分支","children":[]},{"level":2,"title":"3、提交代码到缓存","slug":"_3、提交代码到缓存","link":"#_3、提交代码到缓存","children":[]},{"level":2,"title":"4、查看已经提交到缓存的数据","slug":"_4、查看已经提交到缓存的数据","link":"#_4、查看已经提交到缓存的数据","children":[]},{"level":2,"title":"5、删除缓存中的文件","slug":"_5、删除缓存中的文件","link":"#_5、删除缓存中的文件","children":[]},{"level":2,"title":"6、代码提交的注释","slug":"_6、代码提交的注释","link":"#_6、代码提交的注释","children":[]},{"level":2,"title":"7、代码提交","slug":"_7、代码提交","link":"#_7、代码提交","children":[]},{"level":2,"title":"代码仓库建立","slug":"代码仓库建立","link":"#代码仓库建立","children":[]},{"level":2,"title":"远程操作指令","slug":"远程操作指令","link":"#远程操作指令","children":[]},{"level":2,"title":"1、显示所有远程仓库","slug":"_1、显示所有远程仓库","link":"#_1、显示所有远程仓库","children":[]},{"level":2,"title":"2、获取远程仓库的变动","slug":"_2、获取远程仓库的变动","link":"#_2、获取远程仓库的变动","children":[]},{"level":2,"title":"3、将代码进行合并","slug":"_3、将代码进行合并","link":"#_3、将代码进行合并","children":[]},{"level":2,"title":"4、拉取远程仓库代码并与本地分支合并","slug":"_4、拉取远程仓库代码并与本地分支合并","link":"#_4、拉取远程仓库代码并与本地分支合并","children":[]},{"level":2,"title":"5.、强行推送当前分支到远程仓库，即使有冲突","slug":"_5-、强行推送当前分支到远程仓库-即使有冲突","link":"#_5-、强行推送当前分支到远程仓库-即使有冲突","children":[]},{"level":2,"title":"其它指令","slug":"其它指令","link":"#其它指令","children":[]},{"level":2,"title":"1、显示有变更的文件状态","slug":"_1、显示有变更的文件状态","link":"#_1、显示有变更的文件状态","children":[]},{"level":2,"title":"2、显示当前分支版本历史","slug":"_2、显示当前分支版本历史","link":"#_2、显示当前分支版本历史","children":[]},{"level":2,"title":"3、显示提交的历史和发生变更的文件","slug":"_3、显示提交的历史和发生变更的文件","link":"#_3、显示提交的历史和发生变更的文件","children":[]},{"level":2,"title":"4、显示过去 5(n)次提交","slug":"_4、显示过去-5-n-次提交","link":"#_4、显示过去-5-n-次提交","children":[]},{"level":2,"title":"5、显示该仓库所有提交过代码的用户，并按提交次数排名","slug":"_5、显示该仓库所有提交过代码的用户-并按提交次数排名","link":"#_5、显示该仓库所有提交过代码的用户-并按提交次数排名","children":[]},{"level":2,"title":"6、显示今天提交的文件变更、代码变动的行数","slug":"_6、显示今天提交的文件变更、代码变动的行数","link":"#_6、显示今天提交的文件变更、代码变动的行数","children":[]},{"level":2,"title":"7、删除本地分支","slug":"_7、删除本地分支","link":"#_7、删除本地分支","children":[]},{"level":2,"title":"8、删除远程分支","slug":"_8、删除远程分支","link":"#_8、删除远程分支","children":[]},{"level":2,"title":"代码回滚","slug":"代码回滚","link":"#代码回滚","children":[]},{"level":2,"title":"1、回退到上个版本","slug":"_1、回退到上个版本","link":"#_1、回退到上个版本","children":[]},{"level":2,"title":"2、回退到 n 次提交之前","slug":"_2、回退到-n-次提交之前","link":"#_2、回退到-n-次提交之前","children":[]},{"level":2,"title":"3、回退到指定提交版本","slug":"_3、回退到指定提交版本","link":"#_3、回退到指定提交版本","children":[]},{"level":2,"title":"4、回到 merge 时最初的状态，取消 merge 后的修改操作","slug":"_4、回到-merge-时最初的状态-取消-merge-后的修改操作","link":"#_4、回到-merge-时最初的状态-取消-merge-后的修改操作","children":[]},{"level":2,"title":"远程仓库控制","slug":"远程仓库控制","link":"#远程仓库控制","children":[]},{"level":2,"title":"1.查看远程仓库地址","slug":"_1-查看远程仓库地址","link":"#_1-查看远程仓库地址","children":[]},{"level":2,"title":"2.修改远程仓库地址","slug":"_2-修改远程仓库地址","link":"#_2-修改远程仓库地址","children":[]},{"level":2,"title":"3.删除远程仓库地址","slug":"_3-删除远程仓库地址","link":"#_3-删除远程仓库地址","children":[]},{"level":2,"title":"4.添加远程仓库地址","slug":"_4-添加远程仓库地址","link":"#_4-添加远程仓库地址","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"computer_base/Git/常用命令.md","lastUpdated":1673448677000}'),l={name:"computer_base/Git/常用命令.md"},p=n("",105),i=[p];function r(t,o,c,d,h,u){return e(),a("div",null,i)}const b=s(l,[["render",r]]);export{g as __pageData,b as default};
