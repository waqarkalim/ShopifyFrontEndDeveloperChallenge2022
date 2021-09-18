(this["webpackJsonpshopify-frontend-typescript"]=this["webpackJsonpshopify-frontend-typescript"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},124:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(11),r=a.n(c),s=(a(100),a(27)),l=a(24),o=a.n(l),d=(a(101),a(14)),b=a(174),j=a(73),u=(a(102),a(6)),m=function(e){var t=e.id,a=e.label,n=e.date,i=e.onChange,c=function(e){i(e)};return Object(u.jsx)(d.a,{libInstance:o.a,utils:j.a,children:Object(u.jsx)(b.a,{id:t,label:a,disableToolbar:!0,variant:"inline",format:"YYYY-MM-DD",margin:"normal",autoOk:!0,inputValue:n,value:n,onChange:function(e,t){return c(t)},maxDate:new Date,KeyboardButtonProps:{"aria-label":"change date"}})})},g=(a(109),function(e){var t=e.startDate,a=e.clicker,n=e.setStartDate,i=e.setClicker;return Object(u.jsxs)("div",{id:"selection-bar",className:"selection-bar",children:[Object(u.jsx)(m,{id:"start-date",label:"Select Start Date",date:t,onChange:n,"aria-label":"Select Start Date"}),Object(u.jsx)("div",{className:"easter-egg-text",children:Object(u.jsx)("p",{children:"There might be an easter egg in the headings"})}),Object(u.jsx)("button",{type:"button",className:"btn ripple",onClick:function(){i(a+1)},"aria-label":"Click Here To Pull Images",children:"Click Here To Pull Images"})]})}),h=(a(110),function(e){var t=e.children;return Object(u.jsx)("div",{className:"layout",children:t})}),O=a(37),f=a(49),x=a(79),p=a(173),k=a(77),v=a.n(k),N=a(76),y=a.n(N),D=a(75),L=a.n(D),C=(a(111),function(e){var t=e.image,a=e.toggleLiked,i=Object(n.useState)(!1),c=Object(s.a)(i,2),r=c[0],l=c[1],o=t.id,d=t.date,b=t.title,j=t.imageUrl,m=t.explanation,g=t.isLiked;return Object(u.jsxs)("div",{id:"image-card-".concat(o),className:"image-card",children:[Object(u.jsxs)("div",{id:"image-header-".concat(o),children:[Object(u.jsx)("div",{id:"image-title-".concat(o),className:"image-title","aria-label":b,children:Object(u.jsx)("p",{children:b})}),Object(u.jsx)("div",{id:"image-date-".concat(o),className:"image-date","aria-label":d,children:Object(u.jsx)("p",{children:d})})]}),Object(u.jsx)("img",{id:"image-media-".concat(o),className:"image-media",alt:b,src:j}),Object(u.jsxs)("div",{className:"btn-section",children:[Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"button",id:"like-button-".concat(o),className:"like-btn",onClick:function(){a(o)},"aria-pressed":g,"aria-label":"Like Button",children:g?Object(u.jsx)(L.a,{className:"liked-btn"}):Object(u.jsx)(y.a,{})})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"button",id:"expand-button-".concat(o),className:"expand-btn",onClick:function(){l(!r)},"aria-expanded":r,"aria-label":"Expand Button","aria-controls":"image-description",children:Object(u.jsx)(v.a,{className:"expand ".concat(r?"expand-open":"")})})})]}),Object(u.jsx)("div",{role:"region",id:"image-description-".concat(o),className:"image-description",hidden:!r,"aria-label":m,"aria-labelledby":"expand-button-".concat(o),"aria-hidden":!r,children:Object(u.jsx)("p",{children:m})})]})}),S="https://api.nasa.gov/planetary/apod",w="Shopify_is_Awesome",Y=a(113),E=(a(124),a(125)),I=function(e){var t=e.isLoading,a=e.images,i=e.setImages,c=function(e){var t=Object(x.a)(a);Y.get(w)&&(t[e].isLiked?Y.set(w,E.omit(Y.get(w),t[e].imageUrl)):Y.set(w,Object(O.a)(Object(O.a)({},Y.get(w)),Object(f.a)({},t[e].imageUrl,!t[e].isLiked)))),t[e].isLiked=!t[e].isLiked,i(t)};return Object(u.jsx)(n.Fragment,{children:t?Object(u.jsx)(p.a,{}):Object(u.jsx)("div",{className:"grid",children:a.map((function(e,t){return Object(u.jsx)(C,{image:e,toggleLiked:c},t)}))})})},U=a(78),M=a.n(U).a.create({baseURL:S}),T=(a(145),function(e){var t=e.startDate,a=e.clicker,i=Object(n.useState)([]),c=Object(s.a)(i,2),r=c[0],l=c[1],d=Object(n.useState)(!1),b=Object(s.a)(d,2),j=b[0],m=b[1],g=o()().format("YYYY-MM-DD");Object(n.useEffect)((function(){Y.get(w)||Y.set(w,r.reduce((function(e,t){return t.isLiked&&(e[t.imageUrl]=t.isLiked),e}),{}))}),[r]),Object(n.useEffect)((function(){h()}),[a]);var h=function(){m(!0);var e="".concat(S,"?api_key=").concat("U2TiaNUBuC9WfVnbkXciJtbq7Z5KJxaFrnJkx0nJ","&start_date=").concat(t,"&end_date=").concat(g,"&thumbs=true");M.get(e).then((function(e){l(f(e.data))})).catch((function(e){var t=function(e){return 500===e.response.data.code?new Error("Error occurred, please try again with a start date nearer to today"):new Error("Error occurred while fetching data")}(e);t.message?alert(t.message):alert("Error occurred while fetching images."),l([])})).finally((function(){m(!1)}))},f=function(e){return e.map((function(e,t){var a=e.media_type,n=e.thumbnail_url,i=e.url,c=t,r="video"===a&&""!==n?n:i,s=Y.get(w)[r]||!1;return Object(O.a)(Object(O.a)({},e),{id:c,imageUrl:r,isLiked:s})}))};return Object(u.jsx)(I,{images:r,isLoading:j,setImages:l})});var _=function(){var e=Object(n.useState)(o()().format("YYYY-MM-DD")),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(0),r=Object(s.a)(c,2),l=r[0],d=r[1];return Object(n.useEffect)((function(){Y.get(w)||Y.set(w,{})}),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(h,{children:[Object(u.jsxs)("header",{role:"banner",children:[Object(u.jsx)("h1",{className:"header-title",children:"Spacestagram"}),Object(u.jsxs)("h2",{className:"subheader-title",children:["Image-sharing from"," ",Object(u.jsx)("span",{className:"easter-egg",onClick:function(){window.open("https://waqarkalim.github.io")},children:"the final frontier"})]})]}),Object(u.jsxs)("main",{role:"main",children:[Object(u.jsx)("section",{children:Object(u.jsx)(g,{startDate:a,clicker:l,setStartDate:i,setClicker:d})}),Object(u.jsx)("section",{children:Object(u.jsx)(T,{startDate:a,clicker:l})})]})]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,177)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),B()}},[[146,1,2]]]);
//# sourceMappingURL=main.90e44825.chunk.js.map