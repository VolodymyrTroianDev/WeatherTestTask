import{u as r,o as i,c as m,b as o,t as s,h as u,ah as p,f,aR as v,j as b,q as h}from"./index-f7498a51.js";const k={class:"modal"},M={class:"modal__title"},$={class:"header-text-style modal__title__text"},C={class:"modal__content"},g={class:"modal__content__text"},B={__name:"ConfirmedMenu",props:["closeModal"],setup(n){const l=n;h();const c=r(),a=e=>{l.closeModal(e)};return(e,t)=>{const d=b("close-btn");return i(),m("div",k,[o("div",M,[o("div",$,s(e.$t("main.confirmed")),1),u(d,{class:"close-btn",onClick:t[0]||(t[0]=_=>a(!1))})]),o("div",C,[o("div",g,[p(s(f(c).modal.modalMessage)+" ",1),v(e.$slots,"default")]),o("button",{class:"modal__content__btn",onClick:t[1]||(t[1]=_=>a(!0))},s(e.$t("main.ok")),1)])])}}};export{B as default};
