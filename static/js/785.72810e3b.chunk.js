"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{785:function(e,r,t){t.r(r);var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(791),i=t(689),o=t(220),p=t(184);r.default=function(){var e=(0,i.UO)().movieId,r=(0,s.useState)(null),t=(0,a.Z)(r,2),u=t[0],f=t[1],v=(0,s.useState)(null),l=(0,a.Z)(v,2)[1],d=(0,s.useState)(!1),h=(0,a.Z)(d,2)[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return h(!0),r.prev=1,r.next=4,(0,o.tx)(e);case 4:t=r.sent,f(t),l(null),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.error(r.t0);case 12:return r.prev=12,h(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[1,9,12,15]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,p.jsx)("div",{children:u&&u.length>0?(0,p.jsx)("ul",{children:u.map((function(e){return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:e.author}),(0,p.jsx)("p",{children:e.content})]},e.id)}))}):(0,p.jsx)("p",{children:"No reviews available."})})}},220:function(e,r,t){t.d(r,{Df:function(){return s},V0:function(){return i},t2:function(){return o},tx:function(){return f},zv:function(){return p}});var n=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"7a96b7d3f2fd15994813e6eeb1d3cb9e",language:"en-US"};var s=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.page,n={page:t},e.next=4,c.Z.get("/trending/movie/day",{params:n});case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r,t){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={query:r,page:t},e.next=3,c.Z.get("/search/movie",{params:n});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/reviews?"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=785.72810e3b.chunk.js.map