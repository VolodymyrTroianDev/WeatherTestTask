import{_ as m,u as k,d as f,r as L,e as w,o as t,c as _,f as y,g as p,h as d,i as z,s as C,j as g,k as D}from"./index-f7498a51.js";const S={key:2,class:"localization__dropdown"},x={__name:"SelectLocalization",setup(B){const n=k(),{locale:c}=f(),r=D(),a=L({activeDropdown:!1}),s=o=>{if(C("language",o),c.value!==o){c.value=o,n.useLanguage=o;const e=r.resolve({params:{locale:o}});r.push(e)}},v=()=>{a.activeDropdown=!a.activeDropdown};return w(()=>{s(n.useLanguage)}),(o,e)=>{const i=g("ua-img"),l=g("uk-img");return t(),_("div",{class:"localization",onClick:e[2]||(e[2]=u=>v())},[y(n).useLanguage==="uk"?(t(),p(i,{key:0,class:"pointer"})):(t(),p(l,{key:1,class:"pointer"})),a.activeDropdown?(t(),_("div",S,[d(i,{class:"pointer",onClick:e[0]||(e[0]=u=>s("uk"))}),d(l,{class:"pointer",onClick:e[1]||(e[1]=u=>s("en"))})])):z("",!0)])}}},$=m(x,[["__scopeId","data-v-50d7cca7"]]);export{$ as default};