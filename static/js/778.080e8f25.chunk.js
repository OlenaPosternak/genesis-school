(self.webpackChunkgenesis_school=self.webpackChunkgenesis_school||[]).push([[778],{8831:function(n,e,r){"use strict";r.d(e,{C:function(){return a},Y:function(){return u}});var t=r(5861),i=r(7757),s=r.n(i),o=r(1243);o.Z.defaults.baseURL="https://api.wisey.app/api/v1";var c=function(){var n=(0,t.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("auth/anonymous?platform=subscriptions");case 3:e=n.sent,r=e.data.token,o.Z.defaults.headers.common.Authorization="Bearer ".concat(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}var r}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),a=function(){var n=(0,t.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c();case 3:return n.next=5,o.Z.get("/core/preview-courses",{mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*"}});case 5:return e=n.sent,n.abrupt("return",e.data.courses);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(s().mark((function n(e){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c();case 3:return n.next=5,o.Z.get("/core/preview-courses/".concat(e),{mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*"}});case 5:return r=n.sent,n.abrupt("return",r.data);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},5308:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return R}});var t,i,s,o,c,a,u,l,p,d=r(9439),x=r(2791),h=r(8831),f=r(3181),v=r.n(f),g=(r(3540),r(168)),m=r(6444),j=m.ZP.div(t||(t=(0,g.Z)(["\n  display: flex;\n\n  gap: 10px;\n  justify-content: center;\n\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]))),w=m.ZP.button(i||(i=(0,g.Z)(["\n  outline: none;\n  background-color: lightblue;\n  border: 1px solid lightblue;\n  border-radius: 10px;\n  width: 150px;\n  height: 50px;\n  font-size: 20px;\n\n  &:hover,\n  &:focus-visible {\n    background-color: #1d89ae;\n    border: 1px solid #1d89ae;\n    color: white;\n  }\n"]))),Z=r(184),b=function(n){var e=n.setPage,r=n.page,t=n.maxPage;return(0,Z.jsxs)(j,{children:[0!==r&&(0,Z.jsx)(w,{onClick:function(){return e(r-1)},children:"Previous page"}),r===t-1?"":(0,Z.jsx)(w,{onClick:function(){return e(r+1)},children:"Next page"})]})},P=r(1087),k=m.ZP.ul(s||(s=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 10px;\n  @media screen and (min-width: 1440px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"]))),y=m.ZP.li(o||(o=(0,g.Z)(["\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  min-height: 500px;\n\n  border-radius: 4px;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14),\n    0px 3px 4px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.2);\n"]))),C=(0,m.ZP)(P.rU)(c||(c=(0,g.Z)(["\n  color: #212121;\n"]))),L=m.ZP.span(a||(a=(0,g.Z)(["\n  font-weight: 500;\n"]))),A=m.ZP.div(u||(u=(0,g.Z)(["\n  width: 300px;\n  height: 130px;\n  display: flex;\n  align-items: flex-end;\n"]))),S=m.ZP.img(l||(l=(0,g.Z)(["\n  width: 300px;\n  height: 130px;\n  object-fit: cover;\n"]))),M=m.ZP.div(p||(p=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  margin-top: 5px;\n"]))),R=function(){var n=(0,x.useState)([]),e=(0,d.Z)(n,2),r=e[0],t=e[1],i=(0,x.useState)(0),s=(0,d.Z)(i,2),o=s[0],c=s[1],a=(0,x.useState)(0),u=(0,d.Z)(a,2),l=u[0],p=u[1];(0,x.useEffect)((function(){try{(0,h.C)().then((function(n){var e=n.reverse();return f(e)}))}catch(n){console.log(n)}}),[]);var f=function(n){for(var e=[];n.length;)e.push(n.splice(0,10));t(e),p(e.length)},g=(0,x.useRef)(null),m=function(n){var e=n.img,r=n.courseVideoPreview,t=(0,x.useState)(!1),i=(0,d.Z)(t,2),s=i[0],o=i[1];return(0,Z.jsx)(Z.Fragment,{children:s&&r?(0,Z.jsx)("div",{children:(0,Z.jsx)("video",{ref:g,id:"my_video",className:"video-js",preload:"auto","data-setup":"{}",onPlay:function(){return o(!0)},onPause:function(){return o(!1)},onMouseEnter:function(){window.videojs=v();var n=v()(g.current);n.width(300),n.height("auto"),s&&n.play()},onMouseLeave:function(){v()(g.current).pause()},children:(0,Z.jsx)("source",{src:r,type:"application/x-mpegURL"})})}):(0,Z.jsx)(A,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},children:(0,Z.jsx)(S,{src:e,alt:"",width:300})})})};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(k,{children:0!==r.length&&r["".concat(o)].map((function(n){var e,r,t,i;return(0,Z.jsx)(y,{children:(0,Z.jsxs)(C,{to:"".concat(n.id),style:{display:"flex",flexDirection:"column"},children:[(0,Z.jsx)(m,{img:n.previewImageLink+"/cover.webp",courseVideoPreview:null===(e=n.meta)||void 0===e||null===(r=e.courseVideoPreview)||void 0===r?void 0:r.link}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(M,{children:[(0,Z.jsx)(L,{children:"Title: "}),(0,Z.jsx)("span",{children:n.title})]}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(L,{children:"Description: "}),(0,Z.jsx)("span",{children:n.description})]}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(L,{children:"Lessons Count: "}),(0,Z.jsx)("span",{children:n.lessonsCount})]}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)(L,{children:"Skills: "}),(null===(t=n.meta)||void 0===t?void 0:t.skills)&&(null===(i=n.meta)||void 0===i?void 0:i.skills.map((function(n,e){return(0,Z.jsxs)("li",{children:[n," "]},e)})))]}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(L,{children:"Course Raiting: "}),(0,Z.jsx)("span",{children:n.rating})]})]})]})},n.id)}))}),0!==r.length&&(0,Z.jsx)(b,{setPage:c,page:o,maxPage:l})]})}},5893:function(){}}]);
//# sourceMappingURL=778.080e8f25.chunk.js.map