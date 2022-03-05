var y=Object.defineProperty,b=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(l,s,a)=>s in l?y(l,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[s]=a,N=(l,s)=>{for(var a in s||(s={}))S.call(s,a)&&f(l,a,s[a]);if(h)for(var a of h(s))k.call(s,a)&&f(l,a,s[a]);return l},g=(l,s)=>b(l,x(s));import{j as v,r as u,v as C,R as I,a as O}from"./vendor.cfb01b41.js";const P=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}};P();const M=["Mercearia","Talho","Padaria","Frutas","Charcutaria","Congelados","Leites","Lacteos","Ovos","Queijos","Bebidas","Pessoais"],e=v.exports.jsx,o=v.exports.jsxs,j=({onSubmit:l})=>{const[s,a]=u.exports.useState(""),[c,r]=u.exports.useState(""),[t,i]=u.exports.useState(""),d=()=>{a(""),r(""),i("")},p=()=>{l({title:s,price:c,category:t,quantity:1}),d()};return o("div",{className:"box",children:[o("div",{className:"field",children:[e("label",{className:"label is-small",children:"Produto"}),e("div",{className:"control",children:e("input",{className:"input",type:"text",value:s,onChange:n=>a(n.target.value)})})]}),o("div",{className:"is-flex",children:[o("div",{className:"field pr-3",children:[e("label",{className:"label is-small",children:"Pre\xE7o ex:(12.34)"}),e("div",{className:"control",children:e("input",{className:"input",type:"text",pattern:"^(\\d+(\\.\\d{0,2})?|\\.?\\d{1,2})$",value:c,onChange:n=>{n.target.validity.valid&&r(n.target.value)}})})]}),o("div",{className:"field",children:[e("label",{className:"label is-small",children:"Categorias"}),e("div",{className:"control",children:e("div",{className:"select",children:o("select",{value:t,onChange:n=>i(n.target.value),children:[e("option",{children:"Selecione"}),M.map(n=>e("option",{children:n},n))]})})})]})]}),e("div",{className:"field",children:e("div",{className:"control",children:e("button",{className:"button is-primary",disabled:!s||!c||!t,onClick:p,children:"Adicionar"})})})]})},L=({item:l,itemCallback:s,removeItem:a})=>{const[c,r]=u.exports.useState(l.quantity||1),[t,i]=u.exports.useState(!1),d=()=>r(m=>m-1),p=()=>r(m=>m+1),n=()=>i(m=>!m);return u.exports.useEffect(()=>{s({count:c,isChecked:t})},[c]),o("div",{className:"box mb-2 is-flex is-align-items-center is-justify-content-space-between",children:[o("label",{className:"checkbox is-flex is-align-items-center",children:[e("input",{type:"checkbox",checked:t,onChange:n}),o("div",{children:[e("span",{className:"pl-2",children:l.title}),e("span",{className:"is-block pl-2 is-size-7 has-text-danger",children:l.price}),e("span",{className:"tag is-link is-light is-rounded",children:l.category})]})]}),o("div",{children:[e("div",{className:"is-flex is-align-items-center",children:o("div",{className:"field has-addons",children:[e("div",{className:"control",children:e("button",{onClick:d,className:"button is-primary is-small",children:"-"})}),e("p",{className:"control",children:e("input",{value:c,readOnly:!0,className:"input is-small has-text-centered",type:"text",style:{width:36}})}),e("p",{className:"control",children:e("button",{onClick:p,className:"button is-primary is-small",children:"+"})})]})}),e("button",{onClick:()=>a(l.id),className:"button is-danger is-small mt-3",children:"Remover"})]})]})},R=()=>{const[l,s]=u.exports.useState([]),a=localStorage.getItem("@Market/products"),c=t=>{const i=l.filter(d=>d.id!==t);s(i),localStorage.setItem("@Market/products",JSON.stringify(i))},r=t=>{const i=[g(N({},t),{id:C(),title:t.title,category:t.category,price:new Intl.NumberFormat("pt",{style:"currency",currency:"EUR"}).format(Number(t.price))})];if(!a){s(i),localStorage.setItem("@Market/products",JSON.stringify(i));return}const d=[...JSON.parse(a),...i];return s(d),localStorage.setItem("@Market/products",JSON.stringify(d))};return u.exports.useEffect(()=>{a&&s(JSON.parse(a||"[]"))},[a]),o("div",{className:"container is-max-desktop p-5",children:[e("h1",{className:"title is-3",children:"Market"}),e(j,{onSubmit:r}),l.map(t=>e(L,{item:t,itemCallback:()=>{},removeItem:c},t.id))]})};I.render(e(O.StrictMode,{children:e(R,{})}),document.getElementById("root"));
