"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{541:function(e,r,t){t.r(r);var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(791),i=t(220),o=t(689),p=t(184);r.default=function(){var e=(0,o.UO)().movieId,r=(0,s.useState)(null),t=(0,a.Z)(r,2),u=t[0],f=t[1],v=(0,s.useState)(null),l=(0,a.Z)(v,2),d=l[0],h=l[1],m=(0,s.useState)(!1),w=(0,a.Z)(m,2),x=w[0],g=w[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,g(!0),h(null),r.next=5,(0,i.zv)(e);case 5:t=r.sent,f(t),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(0),console.error(r.t0),h("Something went wrong");case 13:return r.prev=13,g(!1),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[0,9,13,16]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,p.jsxs)("div",{children:[d&&(0,p.jsx)("div",{children:d}),x&&"Loading ...",u&&(0,p.jsx)("ul",{children:u.cast.map((function(e){var r=e.name,t=e.character,n=e.profile_path,a=e.id;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{alt:r,src:n?"https://image.tmdb.org/t/p/w92".concat(n):"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"}),(0,p.jsx)("h3",{children:r}),(0,p.jsx)("p",{children:t})]},a)}))})]})}},220:function(e,r,t){t.d(r,{Df:function(){return s},V0:function(){return i},t2:function(){return o},tx:function(){return f},zv:function(){return p}});var n=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"7a96b7d3f2fd15994813e6eeb1d3cb9e",language:"en-US"};var s=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.page,n={page:t},e.next=4,c.Z.get("/trending/movie/day",{params:n});case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r,t){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={query:t},e.next=3,c.Z.get("/search/movie?query=".concat(r),{params:n});case 3:return a=e.sent,e.abrupt("return",a.data.results);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/reviews?"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=541.01192c83.chunk.js.map