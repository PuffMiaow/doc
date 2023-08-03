import{_ as s,v as e,b as a,R as n}from"./chunks/framework.1b762308.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"backend/Node.js/Nest实战一.md","filePath":"backend/Node.js/Nest实战一.md","lastUpdated":1686499922000}'),p={name:"backend/Node.js/Nest实战一.md"},l=n('<h2 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h2><p>安装脚手架</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i -g @nestjs/cli</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>创建项目</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nest new ordering-app</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="创建子项目" tabindex="-1">创建子项目 <a class="header-anchor" href="#创建子项目" aria-label="Permalink to &quot;创建子项目&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nest generate app orders</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将项目转成 monorepo 结构的。</p><p>然后移除掉 apps/ordering-app 目录以及 nest-cli.json 中的 projects.ordering-app 结构</p><p>然后修改 nest-cli.json 中的所有 ordering-app 成 orders</p><p>然后再创建两个子项目</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nest g app billing</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nest g app auth</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>创建一个公用的library</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nest g library common</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',15),i=[l];function r(t,o,d,c,u,m){return e(),a("div",null,i)}const g=s(p,[["render",r]]);export{h as __pageData,g as default};
