"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[354],{650:function(e,t,n){n.d(t,{Df:function(){return o},t2:function(){return l},tx:function(){return f},z1:function(){return d},zv:function(){return h}});var r=n(861),a=n(757),c=n.n(a),i=n(243),s="7a96b7d3f2fd15994813e6eeb1d3cb9e",u="https://api.themoviedb.org/3",o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/week?api_key=".concat(s,"&page=1&language=en-US&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function d(e,t){return i.Z.get("".concat(u,"/search/movie"),{params:{api_key:s,query:e,page:t}})}var l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/movie/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function h(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"/credits"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"/reviews"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},354:function(e,t,n){n.r(t);var r=n(439),a=n(791),c=n(689),i=n(87),s=n(650),u=n(184);t.default=function(){var e=(0,a.useState)(null),t=(0,r.Z)(e,2),n=t[0],o=t[1],d=(0,a.useState)(null),l=(0,r.Z)(d,2),h=l[0],p=l[1],f=(0,a.useState)(!1),v=(0,r.Z)(f,2),x=v[0],m=v[1],g=(0,c.UO)().movieId;return(0,a.useEffect)((function(){m(!0),(0,s.t2)(g).then((function(e){o(e),p(null)})).catch((function(e){p("Something went wrong")})).finally((function(){m(!1)}))}),[g]),(0,u.jsxs)("div",{children:[(0,u.jsx)(i.rU,{to:"/",children:"Go back"}),h&&(0,u.jsx)("div",{children:h}),x&&"Loading ...",n&&(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:n.poster_path?"https://image.tmdb.org/t/p/w200/".concat(n.poster_path):"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",alt:n.title,width:"200",height:"300"}),(0,u.jsx)("h2",{children:n.title}),(0,u.jsxs)("p",{children:["User Score: ",Math.round(10*n.vote_average)," %"]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:n.overview})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("div",{children:n.genres.map((function(e){var t=e.name,n=e.id;return(0,u.jsx)("p",{children:t},n)}))})]})]}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(i.rU,{to:"cast",state:{from:"/"},children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(i.rU,{to:"reviews",state:{from:"/"},children:"Reviews"})})]}),(0,u.jsx)(a.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading..."}),children:(0,u.jsx)(c.j3,{})})]})]})}}}]);
//# sourceMappingURL=354.619661df.chunk.js.map