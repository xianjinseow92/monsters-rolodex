(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={"card-container":"card_styles_card-container__2mev5"}},function(e,t,n){e.exports={"card-list":"card-list_styles_card-list__6QBZc"}},function(e,t,n){e.exports={search:"search-input_search__1vyr7"}},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),a=n.n(s),o=(n(15),n(4)),i=n(5),l=n(10),h=n(9),u=(n(16),n(6)),d=n.n(u),j=n(0),f=function(e){var t=e.monster;return Object(j.jsxs)("div",{className:d.a["card-container"],children:[Object(j.jsx)("img",{src:"https://robohash.org/".concat(t.id,"?set=").concat("set2","&size=").concat("180x180"),alt:"monster"}),Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("p",{children:t.email})]})},m=n(7),p=n.n(m),b=function(e){var t=e.monsters;return Object(j.jsx)("div",{className:p.a["card-list"],children:t.map((function(e){return Object(j.jsx)(f,{monster:e},e.id)}))})},x=n(8),g=function(e){var t=e.textChangeHandler,n=e.placeholder;return Object(j.jsx)("input",{className:x.search,type:"search",onChange:t,placeholder:n})},O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).componentDidMount=function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})})),console.log("ComponentDidMount")},e.filterNames=function(t){var n=t.target.value;e.setState((function(e){return{searchField:n}}))},e.changeTitle=function(t){var n=t.target.value;e.setState((function(e){return{title:n}}))},e.state={monsters:[],searchField:"",title:""},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=e.title,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return console.log("App rendered"),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:r||"Change Me!"}),Object(j.jsx)(g,{textChangeHandler:this.filterNames,placeholder:"Find Monster(s)"}),Object(j.jsx)("br",{}),Object(j.jsx)(g,{textChangeHandler:this.changeTitle,placeholder:"Change the Title!"}),Object(j.jsx)(b,{monsters:c}),Object(j.jsx)("button",{onClick:this.initializeMonstersHandler,children:"Create Monsters"})]})}}]),n}(r.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),v()}],[[18,1,2]]]);
//# sourceMappingURL=main.c9b0bfb6.chunk.js.map