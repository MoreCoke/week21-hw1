(this.webpackJsonphw1=this.webpackJsonphw1||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(1),i=n.n(o),s=n(7),a=n.n(s),r=(n(14),n(15),n(4)),l=n(8),d=n(2);function u(t){var e=t.todo,n=t.onEditTodoClick,i=t.onDeleteTodoClick,s=t.onToggleDoneTodoClick,a=Object(o.useState)(e.todo),r=Object(d.a)(a,2),l=r[0],u=r[1];return Object(c.jsx)("li",{className:"list-group-item","data-id":e.id,children:Object(c.jsxs)("div",{className:"d-flex justify-content-between align-items-baseline",children:[Object(c.jsxs)("div",{className:"d-flex align-items-baseline",children:[Object(c.jsxs)("div",{onClick:function(){return s(e.id)},children:[Object(c.jsx)("input",{type:"checkbox",className:"mr-2 todo-mark",id:e.id,defaultChecked:e.isDone}),Object(c.jsx)("label",{className:e.isDone?"done":"",htmlFor:e.id,children:e.todo})]}),e.isEdit&&Object(c.jsx)("input",{type:"text",className:"ml-2 form-group",name:"edit",value:l,onChange:function(t){u(t.target.value)}})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"btn btn-warning mr-3",type:"button",onClick:function(){return n(e.id,l)},children:e.isEdit?"\u5b8c\u6210\u7de8\u8f2f":"\u7de8\u8f2f"}),Object(c.jsx)("button",{className:"btn btn-danger mr-3",type:"button",onClick:function(){return i(e.id)},children:"\u522a\u9664"})]})]})})}var b=function(){var t=Object(o.useState)([]),e=Object(d.a)(t,2),n=e[0],i=e[1],s=Object(o.useState)(""),a=Object(d.a)(s,2),b=a[0],j=a[1],f=Object(o.useState)("all"),m=Object(d.a)(f,2),O=m[0],h=m[1];Object(o.useEffect)((function(){console.log("todoList",n.map((function(t){return t.isDone})))}),[n]);var x=function(){if(b){var t={id:(new Date).getTime(),todo:b,isDone:!1,isEdit:!1};i((function(e){return[t].concat(Object(l.a)(e))})),j("")}},p=function(t,e){var c=n.map((function(n){return n.id===t?Object(r.a)(Object(r.a)({},n),{},{isEdit:!n.isEdit,todo:e}):n}));i(c)},v=function(t){var e=n.filter((function(e){return e.id!==t}));i(e)},g=function(t){var e=n.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{isDone:!e.isDone}):e}));i(e)},N=Object(o.useMemo)((function(){switch(O){case"all":return n;case"done":return n.filter((function(t){return t.isDone}));case"undone":return n.filter((function(t){return!t.isDone}));default:throw new Error("can't find todo filter type!")}}),[n,O]);return Object(c.jsxs)("div",{className:"TodoList container",children:[Object(c.jsx)("div",{className:"p-4 todo-add",children:Object(c.jsxs)("div",{className:"form-group row",children:[Object(c.jsx)("div",{className:"col-sm-10 d-flex align-items-center",children:Object(c.jsx)("input",{type:"text",className:"form-control",name:"add",onChange:function(t){j(t.target.value)},onKeyPress:function(t){"Enter"===t.key&&x()},value:b})}),Object(c.jsx)("div",{className:"col-sm-2 col-form-label",children:Object(c.jsx)("button",{className:"btn btn-primary",type:"button",onClick:x,children:"\u65b0\u589e"})})]})}),Object(c.jsxs)("div",{className:"d-flex justify-content-around mb-3 todo-btns",children:[Object(c.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(){return h("all")},children:"\u5168\u90e8\u4efb\u52d9"}),Object(c.jsx)("button",{className:"btn btn-success",type:"button",onClick:function(){return h("done")},children:"\u5df2\u5b8c\u6210"}),Object(c.jsx)("button",{className:"btn btn-info",type:"button",onClick:function(){return h("undone")},children:"\u672a\u5b8c\u6210"}),Object(c.jsx)("button",{className:"btn btn-danger",type:"button",onClick:function(){i([])},children:"\u522a\u9664\u5168\u90e8"})]}),Object(c.jsx)("ul",{className:"list-group list-group-flush todo-list",children:N.map((function(t){return Object(c.jsx)(u,{todo:t,onEditTodoClick:p,onDeleteTodoClick:v,onToggleDoneTodoClick:g},t.id)}))})]})};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8a13c75b.chunk.js.map