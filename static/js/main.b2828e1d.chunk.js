(this["webpackJsonpshopify-frontend-typescript"]=this["webpackJsonpshopify-frontend-typescript"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(11),r=a.n(c),s=(a(103),a(24)),l=a(25),o=a.n(l),d=(a(104),a(14)),b=a(177),j=a(72),u="https://api.nasa.gov/planetary/apod",h="Shopify_is_Awesome",m="YYYY-MM-DD",g=(a(105),a(6)),O=function(e){var t=e.id,a=e.label,n=e.date,i=e.onChange,c=function(e){i(e)};return Object(g.jsx)(d.a,{"date-testid":"date-picker",libInstance:o.a,utils:j.a,children:Object(g.jsx)(b.a,{id:t,label:a,disableToolbar:!0,variant:"inline",format:m,margin:"normal",autoOk:!0,inputValue:n,value:n,onChange:function(e,t){return c(t)},maxDate:new Date,KeyboardButtonProps:{"aria-label":"change date"}})})},f=(a(112),function(e){var t=e.startDate,a=e.clicker,n=e.setStartDate,i=e.setClicker,c=e.buttonDisabled;return Object(g.jsxs)("div",{id:"selection-bar",className:"selection-bar",children:[Object(g.jsx)(O,{id:"start-date",label:"Select Start Date",date:t,onChange:n,"aria-label":"Select Start Date"}),Object(g.jsx)("div",{className:"easter-egg-text",children:Object(g.jsx)("p",{children:"There might be an easter egg in the headings"})}),Object(g.jsx)("button",{"data-testid":"pull-images-button",type:"button",className:"btn ripple",onClick:function(){i(a+1)},"aria-label":"Click Here To Pull Images",disabled:c,children:"Click Here To Pull Images"})]})}),p=(a(113),function(e){var t=e.children;return Object(g.jsx)("div",{className:"layout",children:t})}),x=a(81),k=a(28),v=a(176),N=a(79),y=a.n(N),D=a(78),S=a.n(D),C=a(77),L=a.n(C),w=(a(114),function(e){var t=e.image,a=e.toggleLiked,i=Object(n.useState)(!1),c=Object(s.a)(i,2),r=c[0],l=c[1],o=t.id,d=t.date,b=t.title,j=t.imageUrl,u=t.explanation,h=t.isLiked;return Object(g.jsxs)("div",{id:"image-card-".concat(o),className:"image-card",children:[Object(g.jsxs)("div",{id:"image-header-".concat(o),children:[Object(g.jsx)("div",{id:"image-title-".concat(o),className:"image-title","aria-label":b,children:Object(g.jsx)("p",{children:b})}),Object(g.jsx)("div",{id:"image-date-".concat(o),className:"image-date","aria-label":d,children:Object(g.jsx)("p",{children:d})})]}),Object(g.jsx)("img",{id:"image-media-".concat(o),className:"image-media",alt:b,src:j}),Object(g.jsxs)("div",{className:"btn-section",children:[Object(g.jsx)("div",{children:Object(g.jsx)("button",{type:"button",id:"like-button-".concat(o),className:"like-btn",onClick:function(){a(o)},"aria-pressed":h,"aria-label":"Like Button",children:h?Object(g.jsx)(L.a,{className:"liked-btn"}):Object(g.jsx)(S.a,{})})}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{type:"button",id:"expand-button-".concat(o),className:"expand-btn",onClick:function(){l(!r)},"aria-expanded":r,"aria-label":"Expand Button","aria-controls":"image-description",children:Object(g.jsx)(y.a,{className:"expand ".concat(r?"expand-open":"")})})})]}),Object(g.jsx)("div",{role:"region",id:"image-description-".concat(o),className:"image-description",hidden:!r,"aria-label":u,"aria-labelledby":"expand-button-".concat(o),"aria-hidden":!r,children:Object(g.jsx)("p",{children:u})})]})}),E=a(80),B=a.n(E).a.create({baseURL:u}),U=a(49),Y=a(135),J=a(136),T=J,_=(a(147),function(e){var t=e.startDate,a=e.clicker,i=e.setButtonDisabled,c=Object(n.useState)([]),r=Object(s.a)(c,2),l=r[0],d=r[1],b=Object(n.useState)(!1),j=Object(s.a)(b,2),O=j[0],f=j[1],p=o()().format(m);Object(n.useEffect)((function(){var e,t;T.get(h)||(e=h,t=l,J.set(e,t.reduce((function(e,t){return t.isLiked&&(e[t.imageUrl]=t.isLiked),e}),{})))}),[l]),Object(n.useEffect)((function(){N(t,p)}),[a]);var N=function(e,t){i(!0),f(!0),function(e,t,a){return B.get("".concat(u,"?api_key=").concat("U2TiaNUBuC9WfVnbkXciJtbq7Z5KJxaFrnJkx0nJ","&start_date=").concat(e,"&end_date=").concat(t,"&thumbs=").concat(JSON.stringify(a))).then((function(e){return e.data}))}(e,t,!0).then((function(e){d(y(e))})).catch((function(e){var t=function(e){return 500===e.response.data.code?new Error("Error occurred, please try again with a start date nearer to today"):new Error("Error occurred while fetching data")}(e);t.message?alert(t.message):alert("Error occurred while fetching images."),d([])})).finally((function(){f(!1),i(!1)}))},y=function(e){return e.map((function(e,t){var a=e.media_type,n=e.thumbnail_url,i=e.url,c=t,r="video"===a&&""!==n?n:i,s=T.get(h)[r]||!1;return Object(k.a)(Object(k.a)({},e),{id:c,imageUrl:r,isLiked:s})}))},D=function(e){var t=Object(x.a)(l);t[e]=Object(k.a)(Object(k.a)({},t[e]),{isLiked:!t[e].isLiked}),T.get(h)&&function(e,t,a){t[a].isLiked?J.set(e,Object(k.a)(Object(k.a)({},J.get(e)),Object(U.a)({},t[a].imageUrl,t[a].isLiked))):J.set(e,Y.omit(J.get(e),t[a].imageUrl))}(h,t,e),d(t)};return Object(g.jsx)(n.Fragment,{children:O?Object(g.jsx)(v.a,{}):Object(g.jsx)("div",{className:"grid",children:l.map((function(e,t){return Object(g.jsx)(w,{image:e,toggleLiked:D},t)}))})})});var F=function(){var e=Object(n.useState)(o()().format("YYYY-MM-DD")),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(0),r=Object(s.a)(c,2),l=r[0],d=r[1],b=Object(n.useState)(!1),j=Object(s.a)(b,2),u=j[0],m=j[1];return Object(n.useEffect)((function(){T.get(h)||T.set(h,{})}),[]),Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(p,{children:[Object(g.jsxs)("header",{role:"banner",children:[Object(g.jsx)("h1",{className:"header-title",children:"Spacestagram"}),Object(g.jsxs)("h2",{className:"subheader-title",children:["Image-sharing from"," ",Object(g.jsx)("span",{className:"easter-egg",onClick:function(){window.open("https://waqarkalim.github.io")},children:"the final frontier"})]})]}),Object(g.jsxs)("main",{role:"main",children:[Object(g.jsx)("section",{children:Object(g.jsx)(f,{startDate:a,clicker:l,setStartDate:i,setClicker:d,buttonDisabled:u})}),Object(g.jsx)("section",{children:Object(g.jsx)(_,{startDate:a,clicker:l,setButtonDisabled:m})})]})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,180)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};r.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root")),I()}},[[148,1,2]]]);
//# sourceMappingURL=main.b2828e1d.chunk.js.map