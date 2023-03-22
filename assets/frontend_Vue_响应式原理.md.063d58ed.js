import{_ as t,c as a,o as r,a as e,b as o}from"./app.9a745452.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"响应式系统综述","slug":"响应式系统综述","link":"#响应式系统综述","children":[]}],"relativePath":"frontend/Vue/响应式原理.md","lastUpdated":1679496622000}'),n={name:"frontend/Vue/响应式原理.md"},s=e("h2",{id:"响应式系统综述",tabindex:"-1"},[o("响应式系统综述 "),e("a",{class:"header-anchor",href:"#响应式系统综述","aria-hidden":"true"},"#")],-1),c=e("p",null,"Vue 的核心之一就是数据响应式系统，当我们的数据发生改变的时候视图会跟着发生改变，而不需要我们去手动去设置。和 React 对比, React 像是手动挡,Vue 更像是自动挡。Vue3 中在对数据做劫持时使用 Proxy，从在 Vue2 中使用 defineProperty 属性层面的数据监听提升到了整个对象层面。Vue2 中使用 defineProperty 这个 API 做数据劫持存在很多局限性，比如这个 API 不能监听到对象的属性新增和删除，也不能监听到数组的变化，而 Proxy 就很好的解决了这些回逊。同时也大大提高了整个响应式系统的性能，比如说在 Vue2 中对一个深层嵌套对象进行监听时，是一股脑去遍 历下去的，而在 Vue3 中则是只有调用到那个嵌套对象里的属性时，才会去进行监听，大大提高了初始化的性能，比如我们访问一个 a.b.c 属性的时候，才会去监听 c 所在那个层级的对象。",-1),d=[s,c];function _(i,l,u,p,f,h){return r(),a("div",null,d)}const x=t(n,[["render",_]]);export{m as __pageData,x as default};
