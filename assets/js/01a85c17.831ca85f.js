"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13],{4118:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(3366),r=a(7294),l=a(6010),i=a(2472),c=a(9960),s=a(5999),m="sidebar_TMXw",o="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",g="sidebarItem_spIe",b="sidebarItemLink_eqrF",d="sidebarItemLinkActive_XZSJ";function E(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:g},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:b,activeClassName:d},e.title))})))))}var p=a(3102);function v(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function f(e){return r.createElement(p.Zo,{component:v,props:e})}var h=a(7524);function _(e){var t=e.sidebar,a=(0,h.i)();return null!=t&&t.items.length?"mobile"===a?r.createElement(f,{sidebar:t}):r.createElement(E,{sidebar:t}):null}var k=["sidebar","toc","children"];function N(e){var t=e.sidebar,a=e.toc,c=e.children,s=(0,n.Z)(e,k),m=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(_,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&r.createElement("div",{className:"col col--2"},a))))}},3881:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),r=a(4118),l=a(7774),i=a(5999);var c="tag_Shcx";function s(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:c},n.createElement(l.Z,e))}))),n.createElement("hr",null))}function m(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],n=t[0];return a.localeCompare(n)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return n.createElement("section",{className:"margin-vert--lg"},t.map((function(e){return n.createElement(s,{key:e.letter,letterEntry:e})})))}var o=a(1944),u=a(5281),g=a(4739),b=a(6010);function d(e){var t=e.tags,a=e.sidebar,l=(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return n.createElement(o.FG,{className:(0,b.Z)(u.k.wrapper.blogPages,u.k.page.blogTagsListPage)},n.createElement(o.d,{title:l}),n.createElement(g.Z,{tag:"blog_tags_list"}),n.createElement(r.Z,{sidebar:a},n.createElement("h1",null,l),n.createElement(m,{tags:t})))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(6010),l=a(9960),i="tag_hD8n",c="tagRegular_D6E_",s="tagWithCount_i0QQ";function m(e){var t=e.permalink,a=e.label,m=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(i,m?s:c)},a,m&&n.createElement("span",null,m))}}}]);