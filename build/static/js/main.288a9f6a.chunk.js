(this["webpackJsonpphonebook-exercise"]=this["webpackJsonpphonebook-exercise"]||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(1),a=t(15),s=t.n(a),o=t(6),i=t(3),u=t(4),l=t.n(u),b="http://localhost:3001/api/persons",j=function(){return l.a.get(b).then((function(e){return e.data}))},d=function(e){return l.a.post(b,e).then((function(e){return e.data}))},h=function(e){return l.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},f=function(e,n){return l.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},m=function(e){var n=e.persons,t=e.setPersons;return Object(c.jsx)(c.Fragment,{children:n.map((function(e){return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{className:"fas fa-user"})," ",Object(c.jsx)("strong",{children:e.name})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{className:"fas fa-phone"})," ",e.number]})]})}),Object(c.jsx)("button",{className:" btn-delete",onClick:function(){return function(e){var c=e.id,r=e.name;window.confirm("Delete ".concat(r,"?"))&&h(c).then((function(e){t(n.filter((function(e){return e.id!==c})))}))}(e)},children:"delete"})]},e.id)}))})},O=function(e){var n=e.value,t=e.handle;return Object(c.jsx)("input",{type:"text",value:n,onChange:t,placeholder:"Search Contact"})},p=function(e){var n=e.submit,t=e.name,r=e.number,a=e.onNameChange,s=e.onNumberChange;return Object(c.jsxs)("div",{className:"formboard",children:[Object(c.jsx)("h2",{children:"Address Form"}),Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsx)("input",{type:"text",value:t,onChange:a,placeholder:"Name"}),Object(c.jsx)("input",{type:"number",value:r,onChange:s,placeholder:"Number"}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"add"})]})]})},x=function(e){var n=e.message,t=e.isError,r=void 0!==t&&t?"error":"success";return Object(c.jsx)("div",{className:r,children:n})},v=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],s=Object(r.useState)(""),u=Object(i.a)(s,2),l=u[0],b=u[1],h=Object(r.useState)(""),v=Object(i.a)(h,2),g=v[0],N=v[1],y=Object(r.useState)(""),C=Object(i.a)(y,2),k=C[0],S=C[1],w=Object(r.useState)(null),E=Object(i.a)(w,2),F=E[0],P=E[1],A=Object(r.useState)(null),D=Object(i.a)(A,2),I=D[0],J=D[1];Object(r.useEffect)((function(){j().then((function(e){a(e)}))}),[]);var B=k?t.filter((function(e){return-1!==e.name.search(k)})):t;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"navbar",children:Object(c.jsx)("h1",{children:"Phonebook"})}),Object(c.jsxs)("div",{className:"main",children:[I?Object(c.jsx)(x,{message:I,isError:!0}):null,F?Object(c.jsx)(x,{message:F}):null,Object(c.jsxs)("div",{className:"grid-2",children:[Object(c.jsx)(p,{submit:function(e){e.preventDefault();var n=t.filter((function(e){return e.name===l}));if(console.log(n),n.length){var c=n[0];if(window.confirm("".concat(l," already on phonebook, you want to change the number?"))){var r=c.id,s=(c.number,t.find((function(e){return e.id===r}))),i=Object(o.a)(Object(o.a)({},s),{},{number:g});f(r,i).then((function(e){a(t.map((function(n){return n.id!==r?n:e})))})).catch((function(e){a(t.filter((function(e){return e.id!==c.id}))),J("Information of ".concat(c.name,"  has already been removed from the server"))}))}}else{if(l.length)if(g.length){d({name:l,number:g}).then((function(e){a(t.concat(e)),P("Added ".concat(l))})).catch((function(e){J(e.response.data.error)}))}else alert("please input the number");else alert("please fill the empty name");setTimeout((function(){P(null),J(null)}),5e3),b(""),N("")}},name:l,number:g,onNameChange:function(e){b(e.target.value)},onNumberChange:function(e){N(e.target.value)}}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"\u200b"}),Object(c.jsx)(O,{value:k,handle:function(e){S(e.target.value)}}),Object(c.jsx)(m,{persons:B,setPersons:a})]})]})]})]})};t(38);s.a.render(Object(c.jsx)(v,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.288a9f6a.chunk.js.map