"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3085],{6416:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(7294),a=t(6010),l=t(2472),i=t(7287),c=t(1575),o=t(1944),u=t(5281),s="mdxPageWrapper_zHyg";function m(e){var n=e.content,t=n.metadata,m=t.title,d=t.description,v=t.frontMatter,f=v.wrapperClassName,g=v.hide_table_of_contents;return r.createElement(o.FG,{className:(0,a.Z)(null!=f?f:u.k.wrapper.mdxPages,u.k.page.mdxPage)},r.createElement(o.d,{title:m,description:d}),r.createElement(l.Z,null,r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",s)},r.createElement("div",{className:(0,a.Z)("col",!g&&"col--8")},r.createElement(i.Z,null,r.createElement(n,null))),!g&&n.toc&&r.createElement("div",{className:"col col--2"},r.createElement(c.Z,{toc:n.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level}))))))}},1575:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(7462),a=t(3366),l=t(7294),i=t(6010),c=t(721),o="tableOfContents_cNA8",u=["className"];function s(e){var n=e.className,t=(0,a.Z)(e,u);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",n)},l.createElement(c.Z,(0,r.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},721:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(7462),a=t(3366),l=t(7294);function i(e){var n=e.toc,t=e.className,r=e.linkClassName,a=e.isChild;return n.length?l.createElement("ul",{className:a?void 0:t},n.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:t,linkClassName:r}))}))):null}var c=l.memo(i),o=["parentIndex"];function u(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var r=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),t[e.level]=n}));var r=[];return n.forEach((function(e){var t=e.parentIndex,l=(0,a.Z)(e,o);t>=0?n[t].children.push(l):r.push(l)})),r}function s(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}var m=t(6668);function d(e){var n=e.getBoundingClientRect();return n.top===n.bottom?d(e.parentNode):n}function v(e,n){var t,r,a=n.anchorTopOffset,l=e.find((function(e){return d(e).top>=a}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null:null!=(t=e[e.length-1])?t:null}function f(){var e=(0,l.useRef)(0),n=(0,m.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function g(e){var n=(0,l.useRef)(void 0),t=f();(0,l.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],a=n;a<=t;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=v(c,{anchorTopOffset:t.current}),u=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){if(t){var r;n.current&&n.current!==e&&(null==(r=n.current)||r.classList.remove(a)),e.classList.add(a),n.current=e}else e.classList.remove(a)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}var h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function p(e){var n=e.toc,t=e.className,i=void 0===t?"table-of-contents table-of-contents__left-border":t,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,f=void 0===v?void 0:v,p=e.minHeadingLevel,L=e.maxHeadingLevel,x=(0,a.Z)(e,h),E=(0,m.L)(),H=null!=p?p:E.tableOfContents.minHeadingLevel,N=null!=L?L:E.tableOfContents.maxHeadingLevel,Z=function(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,l.useMemo)((function(){return s({toc:u(n),minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}({toc:n,minHeadingLevel:H,maxHeadingLevel:N});return g((0,l.useMemo)((function(){if(d&&f)return{linkClassName:d,linkActiveClassName:f,minHeadingLevel:H,maxHeadingLevel:N}}),[d,f,H,N])),l.createElement(c,(0,r.Z)({toc:Z,className:i,linkClassName:d},x))}},2186:function(e,n,t){t.d(n,{e:function(){return c}});var r=t(7462),a=t(3366),l=t(7294),i=["color"],c=function(e){var n=e.color,t=void 0===n?"white":n,c=(0,a.Z)(e,i);return l.createElement("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:"13",height:"12",viewBox:"0 0 13 12",fill:"none"},c),l.createElement("path",{d:"M6.3331 11.6362L12.0604 5.90891L6.3331 0.181641L5.01491 1.49414L8.47514 4.94869H0.367188V6.86914H8.47514L5.01491 10.3294L6.3331 11.6362Z",fill:t}))}},7287:function(e,n,t){t.d(n,{Z:function(){return b}});var r,a,l,i,c,o=t(7294),u=t(3905),s=t(2390),m=t(1880),d=t(2125),v=d.ZP.blockquote(r||(r=(0,m.Z)(["\n  text-align: center;\n  margin: 32px auto 32px;\n  border: 0;\n  padding: 0;\n  p {\n    font-size: 22px;\n  }\n"]))),f=t(2186),g=t(3366),h=t(9218),p=["children"],L=(0,d.ZP)(h.xv)(a||(a=(0,m.Z)(["\n  font-size: 18px;\n"]))),x=function(e){var n=e.children,t=(0,g.Z)(e,p);return o.createElement(L,t,n)},E=d.ZP.li(l||(l=(0,m.Z)(["\n  list-style-type: none;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin: 0 0 16px;\n"]))),H=(0,d.ZP)(f.e)(i||(i=(0,m.Z)(["\n  margin: 2px 4px 0 0;\n"]))),N=(0,d.ZP)(x)(c||(c=(0,m.Z)(["\n  margin: 0;\n  line-height: 1.2em;\n"]))),Z=function(e){var n=e.children,t=(0,d.Fg)();return o.createElement(E,null,o.createElement(H,{color:t.colors.primary.background}),o.createElement(N,null,n))};function b(e){var n=e.children;return o.createElement(u.Zo,{components:Object.assign({},s.Z,{h1:function(e){var n=e.children;return o.createElement(h.Dx,{variant:"primary"},n)},h2:function(e){var n=e.children;return o.createElement(h.Dx,{variant:"light-primary"},n)},h3:function(e){var n=e.children;return o.createElement(h.Dx,{variant:"light-secondary"},n)},h4:function(e){var n=e.children;return o.createElement(h.DK,{variant:"primary"},n)},h5:function(e){var n=e.children;return o.createElement(h.DK,{variant:"secondary"},n)},p:x,blockquote:v,li:Z})},n)}}}]);