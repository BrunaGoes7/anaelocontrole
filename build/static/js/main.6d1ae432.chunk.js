(this["webpackJsonpcontrole-estoque"]=this["webpackJsonpcontrole-estoque"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(0),j=c.n(s),d=c(7),n=c.n(d),r=(c(15),c(4)),l=c(3),o=c(2);var a=()=>{const[e,t]=Object(s.useState)(""),[c,j]=Object(s.useState)(""),[d,n]=Object(s.useState)(""),[r,l]=Object(s.useState)(""),[a,i]=Object(s.useState)([]),[b,h]=Object(s.useState)([]),[O,x]=Object(s.useState)(0),[u,p]=Object(s.useState)(0),v=Object(s.useCallback)((()=>{const e=a.reduce(((e,t)=>e+parseFloat(t.valorVenda)),0);x(e)}),[a]),g=Object(s.useCallback)((()=>{const e=b.reduce(((e,t)=>e+parseFloat(t.valorVenda)),0);p(e)}),[b]);Object(s.useEffect)((()=>{v()}),[a,v]),Object(s.useEffect)((()=>{g()}),[b,g]);const m=(e,t)=>{if("estoque"===t){const t=a.filter(((t,c)=>c!==e));i(t)}else if("vendidos"===t){const t=b.filter(((t,c)=>c!==e));h(t)}};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Estoque"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"text",placeholder:"C\xf3digo",value:e,onChange:e=>t(e.target.value)}),Object(o.jsx)("input",{type:"text",placeholder:"Produto",value:c,onChange:e=>j(e.target.value)}),Object(o.jsx)("input",{type:"text",placeholder:"Valor da Venda",value:d,onChange:e=>n(e.target.value)}),Object(o.jsx)("input",{type:"date",placeholder:"Data",value:r,onChange:e=>l(e.target.value)}),Object(o.jsx)("button",{onClick:()=>{i([...a,{codigo:e,produto:c,valorVenda:d,data:r}]),t(""),j(""),n(""),l("")},children:"Adicionar produto"})]}),Object(o.jsx)("h3",{children:"Estoque"}),Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"C\xf3digo"}),Object(o.jsx)("th",{children:"Produto"}),Object(o.jsx)("th",{children:"Valor da Venda"}),Object(o.jsx)("th",{children:"Data"}),Object(o.jsx)("th",{children:"A\xe7\xe3o"})]})}),Object(o.jsx)("tbody",{children:a.map(((e,t)=>Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.codigo}),Object(o.jsx)("td",{children:e.produto}),Object(o.jsx)("td",{children:e.valorVenda}),Object(o.jsx)("td",{children:e.data}),Object(o.jsxs)("td",{children:[Object(o.jsx)("button",{onClick:()=>(e=>{const t=a[e];h([...b,t]);const c=a.filter(((t,c)=>c!==e));i(c)})(t),children:"Vender"}),Object(o.jsx)("button",{onClick:()=>m(t,"estoque"),children:"Excluir"})]})]},t)))})]}),Object(o.jsx)("h3",{children:"Produtos Vendidos"}),Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"C\xf3digo"}),Object(o.jsx)("th",{children:"Produto"}),Object(o.jsx)("th",{children:"Valor da Venda"}),Object(o.jsx)("th",{children:"Data"}),Object(o.jsx)("th",{children:"A\xe7\xe3o"})]})}),Object(o.jsx)("tbody",{children:b.map(((e,t)=>Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.codigo}),Object(o.jsx)("td",{children:e.produto}),Object(o.jsx)("td",{children:e.valorVenda}),Object(o.jsx)("td",{children:e.data}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{onClick:()=>m(t,"vendidos"),children:"Excluir"})})]},t)))})]}),Object(o.jsxs)("h3",{children:["Total em Estoque: R$ ",O.toFixed(2)]}),Object(o.jsxs)("h3",{children:["Total Vendido: R$ ",u.toFixed(2)]})]})};var i=()=>{const[e,t]=Object(s.useState)([]),[c,j]=Object(s.useState)(""),[d,n]=Object(s.useState)(0),[r,l]=Object(s.useState)(0),[a,i]=Object(s.useState)([]);Object(s.useEffect)((()=>{const e=[...JSON.parse(localStorage.getItem("estoque"))||[],...JSON.parse(localStorage.getItem("vendidos"))||[]];t(e);const c=[...new Set(e.map((e=>{const[t,c]=e.data.split("-");return`${t}-${c}`})))];i(c)}),[]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Resumo Mensal"}),Object(o.jsx)("div",{children:a.map(((t,c)=>Object(o.jsx)("button",{onClick:()=>(t=>{j(t);const c=e.filter((e=>{const[c,s]=e.data.split("-");return`${c}-${s}`===t})),s=c.filter((e=>e.vendido)),d=c.filter((e=>!e.vendido)).reduce(((e,t)=>e+t.valorVenda),0),r=s.reduce(((e,t)=>e+t.valorVenda),0);n(d),l(r)})(t),children:t},c)))}),c&&Object(o.jsxs)("div",{children:[Object(o.jsxs)("h3",{children:["Resumo de ",c]}),Object(o.jsxs)("p",{children:["Total em Estoque: R$ ",d.toFixed(2)]}),Object(o.jsxs)("p",{children:["Total Vendido: R$ ",r.toFixed(2)]})]})]})},b=(c(17),c.p+"static/media/logo.cc8a8894.png");var h=function(){return Object(o.jsx)(r.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("img",{src:b,className:"App-logo",alt:"logo"}),Object(o.jsxs)("div",{style:{textAlign:"center",flexGrow:1},children:[Object(o.jsx)("h1",{children:"Ana Elo"}),Object(o.jsx)("h2",{children:"Controle de Estoque"})]}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/",children:"Estoque"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/resumo",children:"Resumo Mensal"})})]})})]}),Object(o.jsx)("main",{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/",element:Object(o.jsx)(a,{})}),Object(o.jsx)(l.a,{path:"/resumo",element:Object(o.jsx)(i,{})})]})})]})})};n.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(j.a.StrictMode,{children:Object(o.jsx)(h,{})}))}},[[18,1,2]]]);
//# sourceMappingURL=main.6d1ae432.chunk.js.map