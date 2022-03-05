var y=Object.defineProperty,v=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var p=(l,t,a)=>t in l?y(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a,f=(l,t)=>{for(var a in t||(t={}))S.call(t,a)&&p(l,a,t[a]);if(h)for(var a of h(t))k.call(t,a)&&p(l,a,t[a]);return l},N=(l,t)=>v(l,x(t));import{j as g,r as u,v as C,R as I,a as O}from"./vendor.cfb01b41.js";const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}};P();const M=["Mercearia","Talho","Padaria","Frutas","Charcutaria","Congelados","Leites","Lacteos","Ovos","Queijos","Bebidas","Pessoais"],e=g.exports.jsx,i=g.exports.jsxs,j=({onSubmit:l})=>{const[t,a]=u.exports.useState(""),[n,r]=u.exports.useState(""),[s,c]=u.exports.useState(""),d=()=>{l({title:t,price:n,category:s,quantity:1})};return i("div",{className:"box",children:[i("div",{className:"field",children:[e("label",{className:"label is-small",children:"Produto"}),e("div",{className:"control",children:e("input",{className:"input",type:"text",value:t,onChange:o=>a(o.target.value)})})]}),i("div",{className:"is-flex",children:[i("div",{className:"field pr-3",children:[e("label",{className:"label is-small",children:"Pre\xE7o ex:(12.34)"}),e("div",{className:"control",children:e("input",{className:"input",type:"text",value:n,onChange:o=>r(o.target.value)})})]}),i("div",{className:"field",children:[e("label",{className:"label is-small",children:"Categorias"}),e("div",{className:"control",children:e("div",{className:"select",children:i("select",{onChange:o=>c(o.target.value),children:[e("option",{children:"Selecione"}),M.map(o=>e("option",{children:o},o))]})})})]})]}),e("div",{className:"field",children:e("div",{className:"control",children:e("button",{className:"button is-primary",disabled:!t||!n||!s,onClick:d,children:"Adicionar"})})})]})},L=({item:l,itemCallback:t,removeItem:a})=>{const[n,r]=u.exports.useState(l.quantity||1),[s,c]=u.exports.useState(!1),d=()=>r(m=>m-1),o=()=>r(m=>m+1),b=()=>c(m=>!m);return u.exports.useEffect(()=>{t({count:n,isChecked:s})},[n]),i("div",{className:"box mb-2 is-flex is-align-items-center is-justify-content-space-between",children:[i("label",{className:"checkbox is-flex is-align-items-center",children:[e("input",{type:"checkbox",checked:s,onChange:b}),i("div",{children:[e("span",{className:"pl-2",children:l.title}),e("span",{className:"is-block pl-2 is-size-7 has-text-danger",children:l.price}),e("span",{className:"tag is-link is-light is-rounded",children:l.category})]})]}),i("div",{children:[e("div",{className:"is-flex is-align-items-center",children:i("div",{className:"field has-addons",children:[e("div",{className:"control",children:e("button",{onClick:d,className:"button is-primary is-small",children:"-"})}),e("p",{className:"control",children:e("input",{value:n,readOnly:!0,className:"input is-small has-text-centered",type:"text",style:{width:36}})}),e("p",{className:"control",children:e("button",{onClick:o,className:"button is-primary is-small",children:"+"})})]})}),e("button",{onClick:()=>a(l.id),className:"button is-danger is-small mt-3",children:"Remover"})]})]})},R=()=>{const[l,t]=u.exports.useState([]),a=localStorage.getItem("@Market/products"),n=s=>{const c=l.filter(d=>d.id!==s);t(c),localStorage.setItem("@Market/products",JSON.stringify(c))},r=s=>{const c=[N(f({},s),{id:C(),title:s.title,category:s.category,price:new Intl.NumberFormat("pt",{style:"currency",currency:"EUR"}).format(Number(s.price))})];if(!a){t(c),localStorage.setItem("@Market/products",JSON.stringify(c));return}const d=[...JSON.parse(a),...c];return t(d),localStorage.setItem("@Market/products",JSON.stringify(d))};return u.exports.useEffect(()=>{a&&t(JSON.parse(a||"[]"))},[a]),i("div",{className:"container is-max-desktop p-5",children:[e("h1",{className:"title is-3",children:"Market"}),e(j,{onSubmit:r}),l.map(s=>e(L,{item:s,itemCallback:()=>{},removeItem:n},s.id))]})};I.render(e(O.StrictMode,{children:e(R,{})}),document.getElementById("root"));