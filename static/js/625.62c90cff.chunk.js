"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[625],{625:function(t,e,n){n.r(e);var r=n(439),a=n(791),u=n(220),c=n(665),s=n(184);e.default=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],i=e[1],o=(0,a.useState)(null),f=(0,r.Z)(o,2),p=f[0],l=f[1],v=(0,a.useState)(!1),d=(0,r.Z)(v,2),h=d[0],m=d[1];return(0,a.useEffect)((function(){m(!0),(0,u.Df)({page:1}).then((function(t){i(t.results),l(null)})).catch((function(t){l("Something went wrong")})).finally((function(){return m(!1)}))}),[]),(0,s.jsxs)("div",{children:[p&&(0,s.jsx)("div",{children:p}),h?"Loading ":(0,s.jsx)(c.Z,{list:n})," "]})}},665:function(t,e,n){n.d(e,{Z:function(){return i}});n(791);var r=n(689),a=n(87),u="MoviesList_UlStyle__5lG5T",c="MoviesList_Stylelinks__hLVBg",s=n(184);var i=function(t){var e=t.list,n=(0,r.TH)();return(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:u,children:e.map((function(t){var e=t.title,r=t.id;return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"/movies/".concat(r),state:{from:n},className:c,children:e})},r)}))})})}},220:function(t,e,n){n.d(e,{Df:function(){return s},V0:function(){return i},t2:function(){return o},tx:function(){return p},zv:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"7a96b7d3f2fd15994813e6eeb1d3cb9e",language:"en-US"};var s=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.page,r={page:n},t.next=4,c.Z.get("/trending/movie/day",{params:r});case 4:return a=t.sent,t.abrupt("return",a.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(u().mark((function t(e,n){var r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={query:n},t.next=3,c.Z.get("/search/movie?query=".concat(e),{params:r});case 3:return a=t.sent,t.abrupt("return",a.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews?"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=625.62c90cff.chunk.js.map