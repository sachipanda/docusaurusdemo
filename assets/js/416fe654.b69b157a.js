(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=o,m=b["".concat(u,".").concat(d)]||b[d]||p[d]||a;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var s=2;s<a;s++)u[s]=n[s];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),a=(n(0),n(111)),u={id:"contribution",title:"Contributing!"},i={unversionedId:"contribution",id:"contribution",isDocsHomePage:!1,title:"Contributing!",description:"Contributing to the DevOps Portal",source:"@site/docs/contribution.md",slug:"/contribution",permalink:"/docusaurusdemo/docs/contribution",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/contribution.md",version:"current",sidebar:"docs",previous:{title:"Style Guide",permalink:"/docusaurusdemo/docs/styleguide"},next:{title:"Project Structure",permalink:"/docusaurusdemo/docs/project-structure"}},c=[{value:"Contributing to the DevOps Portal",id:"contributing-to-the-devops-portal",children:[]},{value:"Creating a Pull Request",id:"creating-a-pull-request",children:[]},{value:"Issues",id:"issues",children:[]},{value:"New Content",id:"new-content",children:[]}],s={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"contributing-to-the-devops-portal"},"Contributing to the DevOps Portal"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"We contributions to the DevOps Portal, big or small."))),Object(a.b)("p",null,"Anyone is free to suggest changes to the DevOps Portal's documentation, handbook or website"),Object(a.b)("p",null,"There is a useful guide on ",Object(a.b)("a",{parentName:"p",href:"/docusaurusdemo/docs/styleguide"},"updating our docs"),"."),Object(a.b)("h2",{id:"creating-a-pull-request"},"Creating a Pull Request"),Object(a.b)("p",null,"Just create a new Pull Request if you want to make an update."),Object(a.b)("p",null,"For now, please request Joe Bloggs ",Object(a.b)("a",{parentName:"p",href:"mailto:_joebloggs@acme.com_"},"_joebloggs@acme.com_")," to do the QA."),Object(a.b)("p",null,"If you want to speak to us before doing lots of work, just email ",Object(a.b)("a",{parentName:"p",href:"mailto:_joebloggs@acme.com_"},"_joebloggs@acme.com_")," - we're very responsive and friendly."),Object(a.b)("h2",{id:"issues"},"Issues"),Object(a.b)("p",null,"Spotted a typo? Not got time or unsure how to fix it yourself? Raise an issue so we can spot it!"),Object(a.b)("p",null,"\u2026or pick up and fix an issue if you want to do a Pull Request."),Object(a.b)("h2",{id:"new-content"},"New Content"),Object(a.b)("p",null,"Would you like to see us add something new to our docs/handbook or website?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"There is a useful guide on ",Object(a.b)("a",{parentName:"p",href:"/docusaurusdemo/docs/create-a-blog-post"},"creating a blog on our docs"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"There is a useful guide on ",Object(a.b)("a",{parentName:"p",href:"/docusaurusdemo/docs/create-a-document"},"creating a document on our docs")))),Object(a.b)("p",null,"Raise an issue and tag it as an Enhancement. We love every idea."),Object(a.b)("p",null,"Note: Please give us as much context as possible regarding why the enhancement is needed."))}l.isMDXComponent=!0}}]);