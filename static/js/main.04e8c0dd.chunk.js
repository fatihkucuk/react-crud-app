(this["webpackJsonpreact-crud"]=this["webpackJsonpreact-crud"]||[]).push([[0],{194:function(e,t,a){e.exports=a(420)},392:function(e,t,a){},393:function(e,t,a){},394:function(e,t,a){},416:function(e,t,a){},417:function(e,t,a){},418:function(e,t,a){},419:function(e,t,a){},420:function(e,t,a){"use strict";a.r(t);a(195),a(204);var n=a(1),c=a.n(n),o=a(191),l=a.n(o),i=(a(392),a(393),a(51)),r=(a(394),function(){return c.a.createElement("div",{className:"NavigationBar"},c.a.createElement("header",null,c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{to:"/item-list",exact:!0},"Home")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/add-new-item"},"Add New Item"))))))}),m=a(47),u=a(39),s=a(53),d=a.n(s),p=(a(416),Object(m.g)((function(e){return c.a.createElement("div",{className:"ItemCard"},c.a.createElement("div",{className:"button-container"},c.a.createElement("button",{onClick:function(){e.history.push("/update-item/".concat(e.item.id))}},"Update"),c.a.createElement("button",{onClick:function(){e.onDelete(e.item.id)}},"Delete")),c.a.createElement("h3",{className:"title",title:e.item.title},e.item.title),c.a.createElement("p",{className:"body",title:e.item.body},e.item.body))}))),f=(a(417),a(418),function(){return c.a.createElement("div",{className:"lds-ripple"},c.a.createElement("div",null),c.a.createElement("div",null))}),h=Object(m.g)((function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)(!0),r=Object(u.a)(i,2),m=r[0],s=r[1];Object(n.useEffect)((function(){h()}),[]);var h=function(){s(!0),d.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){l(e.data),s(!1)})).catch((function(e){s(!1),alert(e)}))},E=function(e){s(!0),d.a.delete("https://jsonplaceholder.typicode.com/posts/".concat(e)).then((function(t){var a=o.filter((function(t){return t.id!==e}));l(a),s(!1)})).catch((function(e){s(!1),alert(e)}))},b=o.map((function(e){return c.a.createElement(p,{key:e.id,item:e,onDelete:E})}));return c.a.createElement("div",{className:"ItemList"},b,m&&c.a.createElement(f,null),!m&&0===b.length&&c.a.createElement("p",{className:"not-found-text"},"No Item Found"))})),E=(a(419),function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)(""),r=Object(u.a)(i,2),m=r[0],s=r[1],p=Object(n.useState)(""),h=Object(u.a)(p,2),E=h[0],b=h[1],v=Object(n.useState)(e.match.params.id?"Update":"Insert"),j=Object(u.a)(v,2),y=j[0],g=(j[1],Object(n.useState)(!1)),N=Object(u.a)(g,2),O=N[0],w=N[1];Object(n.useEffect)((function(){"Update"===y&&(w(!0),d.a.get("https://jsonplaceholder.typicode.com/posts/".concat(e.match.params.id)).then((function(e){var t=e.data;l(t.id),s(t.title),b(t.body),w(!1)})).catch((function(e){alert(e),w(!1)})))}),[]);return c.a.createElement("div",{className:"ItemDetail"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Title"),c.a.createElement("input",{className:"form-item",id:"title",type:"text",placeholder:"Title",onChange:function(e){s(e.target.value)},value:m})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Body"),c.a.createElement("textarea",{className:"form-item",id:"body",type:"text",rows:"5",placeholder:"Body",onChange:function(e){b(e.target.value)},value:E})),c.a.createElement("div",{className:"form-group"},"Insert"===y?c.a.createElement("button",{className:"button",onClick:function(){var t={title:m,body:E};w(!0),d.a.post("https://jsonplaceholder.typicode.com/posts",t).then((function(t){e.history.push("/item-list"),w(!1)})).catch((function(e){alert(e),w(!1)}))}},"Add"):c.a.createElement("button",{className:"button",onClick:function(){var t={id:o,title:m,body:E};w(!0),d.a.put("https://jsonplaceholder.typicode.com/posts/".concat(o),t).then((function(t){e.history.push("/item-list"),w(!1)})).catch((function(e){alert(e),w(!1)}))}},"Update")),O&&c.a.createElement(f,null))}),b=[{path:"/item-list",component:h},{path:"/add-new-item",component:E},{path:"/update-item/:id",component:E}];var v=function(){return c.a.createElement(i.a,null,c.a.createElement(r,null),c.a.createElement(m.d,null,c.a.createElement(m.a,{exact:!0,from:"/",to:"item-list"}),b.map((function(e){return c.a.createElement(m.b,Object.assign({key:e.path,exact:!0},e))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[194,1,2]]]);
//# sourceMappingURL=main.04e8c0dd.chunk.js.map