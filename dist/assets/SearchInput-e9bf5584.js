import{_ as v,r as f,o,c as u,w as r,v as C,b as n,l as V,F as g,m as y,n as k,p as x,t as i,f as p,q as I}from"./index-f7498a51.js";const w=(s,a)=>{if(s)return s[a]};const S={class:"main-container__input"},B=["placeholder"],D={class:"main-container__input__dropdown-menu"},F=["onClick"],b={__name:"SearchInput",props:["placeholder","selectCity"],setup(s){const a=s,_=I(),e=f({inputValue:"",listCity:{}}),d=()=>{e.inputValue.length>0&&k(e.inputValue,5).then(l=>{e.listCity=l.data})},h=l=>{a.selectCity(l),e.inputValue=""};return(l,c)=>{const m=x("focus");return o(),u("div",S,[r(n("input",{type:"text",placeholder:a.placeholder,class:"search-input","onUpdate:modelValue":c[0]||(c[0]=t=>e.inputValue=t),onInput:d},null,40,B),[[m],[C,e.inputValue]]),r(n("div",D,[(o(!0),u(g,null,y(e.listCity,t=>(o(),u("ul",{class:"dropdown-menu__input__list",key:t,onClick:q=>h(t)},[n("li",null,i(t.country),1),n("li",null,i(p(w)(t.local_names,p(_).params.locale)),1),n("li",null,i(t.state),1)],8,F))),128))],512),[[V,e.inputValue.length>0]])])}}},L=v(b,[["__scopeId","data-v-e895382f"]]);export{L as default};