(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{109:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),i=t(116),s=t(124),m=t(115),o=t(114);var c=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(o.b)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t},r.a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.a.createElement(o.a,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(m.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},r.a.createElement(o.a,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},d=t(121);a.default=function(e){var a=e.metadata,t=e.items,n=e.sidebar,m=Object(l.default)().siteConfig.title,o=a.blogDescription,g=a.blogTitle,u="/"===a.permalink?m:g;return r.a.createElement(i.a,{title:u,description:o,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_posts_list"}},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(d.a,{sidebar:n})),r.a.createElement("main",{className:"col col--7"},t.map((function(e){var a=e.content;return r.a.createElement(s.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(c,{metadata:a})))))}},118:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(119),r=t(0),l=t.n(r),i=t(23);function s(e){var a=Object(i.useLocation)();console.log(a.pathname);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"Share this page in MS Teams ",l.a.createElement("a",{class:"teams-share-button","data-href":"https://sachipanda.github.io"+Object(i.useLocation)().pathname},"Share this link")),l.a.createElement("div",null,l.a.createElement("h1",null,Math.random()),l.a.createElement("button",{onClick:function(){window.location.reload(),console.log("Just ran refreshPage method")}},"Refresh")),l.a.createElement(n.a,e))}},121:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),r=t.n(n),l=t(112),i=t(115),s=t(56),m=t.n(s);function o(e){var a=e.sidebar;return 0===a.items.length?null:r.a.createElement("div",{className:Object(l.a)(m.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:m.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:m.a.sidebarItemList},a.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:m.a.sidebarItem},r.a.createElement(i.a,{isNavLink:!0,to:e.permalink,className:m.a.sidebarItemLink,activeClassName:m.a.sidebarItemLinkActive},e.title))}))))}},124:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(112),i=t(111),s=t(114),m=t(115),o=t(125),c=t(123),d=t(58),g=t.n(d),u=t(113);a.a=function(e){var a,t,n=(a=Object(u.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return a(t,Object(s.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),d=e.children,p=e.frontMatter,E=e.metadata,h=e.truncated,b=e.isBlogPostPage,v=void 0!==b&&b,N=E.date,f=E.formattedDate,_=E.permalink,k=E.tags,w=E.readingTime,T=p.author,L=p.title,M=p.image,O=p.keywords,P=p.author_url||p.authorURL,j=p.author_title||p.authorTitle,x=p.author_image_url||p.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{keywords:O,image:M}),r.a.createElement("article",{className:v?void 0:"margin-bottom--xl"},(t=v?"h1":"h2",r.a.createElement("header",null,r.a.createElement(t,{className:Object(l.a)("margin-bottom--sm",g.a.blogPostTitle)},v?L:r.a.createElement(m.a,{to:_},L)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:N,className:g.a.blogPostDate},f,w&&r.a.createElement(r.a.Fragment,null," \xb7 ",n(w)))),r.a.createElement("div",{className:"avatar margin-vert--md"},x&&r.a.createElement(m.a,{className:"avatar__photo-link avatar__photo",href:P},r.a.createElement("img",{src:x,alt:T})),r.a.createElement("div",{className:"avatar__intro"},T&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(m.a,{href:P},T)),r.a.createElement("small",{className:"avatar__subtitle"},j)))))),r.a.createElement("div",{className:"markdown"},r.a.createElement(i.a,{components:o.a},d)),(k.length>0||h)&&r.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),h&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(m.a,{to:E.permalink,"aria-label":"Read more about "+L},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);