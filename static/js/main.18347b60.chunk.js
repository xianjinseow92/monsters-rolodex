(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={"card-container":"card_styles_card-container__2mev5"}},function(e,t,n){e.exports={"card-list":"card-list_styles_card-list__6QBZc"}},function(e,t,n){e.exports={search:"search-input_search__1vyr7"}},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(3),o=n.n(c),a=(n(15),n(4)),i=n(5),l=n(10),d=n(9),u=(n(16),n(6)),h=n.n(u),j=n(0),m=function(e){var t=e.monster;return Object(j.jsxs)("div",{className:h.a["card-container"],children:[Object(j.jsx)("img",{src:"https://robohash.org/".concat(t.id,"?set=").concat("set2","&size=").concat("180x180"),alt:"monster"}),Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("p",{children:t.email})]})},p=n(7),f=n.n(p),b=function(e){var t=e.monsters;return Object(j.jsx)("div",{className:f.a["card-list"],children:t.map((function(e){return Object(j.jsx)(m,{monster:e},e.id)}))})},x=n(8),O=function(e){var t=e.textChangeHandler,n=e.placeholder;return Object(j.jsx)("input",{className:x.search,type:"search",onChange:t,placeholder:n})},v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).componentDidMount=function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})})),console.log("ComponentDidMount")},e.filterNames=function(t){var n=t.target.value;e.setState((function(e){return{searchField:n}}))},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return console.log("App rendered"),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Monsters Rolodex"}),Object(j.jsx)(O,{textChangeHandler:this.filterNames,placeholder:"Find Monster(s)"}),Object(j.jsx)(b,{monsters:r}),Object(j.jsx)("button",{onClick:this.initializeMonstersHandler,children:"Create Monsters"})]})}}]),n}(r.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.18347b60.chunk.js.map