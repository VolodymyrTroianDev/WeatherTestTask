import{d as m,o as d,c as h,h as u,j as x}from"./index-f7498a51.js";const C={id:"chart"},y={__name:"Chart",props:["list"],setup(i){const c=i,{t:s}=m(),a=[],n=[],r=[...c.list];for(let t=0;t<r.length;t++){const e=r[t];a.push(e.dt_txt),n.push(e.main.temp)}const l={chart:{height:450,type:"line"},stroke:{width:5,curve:"smooth"},xaxis:{type:"datetime",categories:a,tickAmount:5,labels:{formatter:function(t,e,o){return o.dateFormatter(new Date(e),"dd/MM/yy HH:mm")},style:{colors:"#C8C8C8",fontSize:"11px"}}},yaxis:{labels:{formatter:function(t,e){return t.toFixed(0)},style:{colors:"#C8C8C8"}},axisBorder:{show:!0,color:"#C8C8C8"}},title:{text:s("main.temp"),align:"left",style:{fontSize:"13px",color:"#C8C8C8"}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#FDD835"],type:"vertical",stops:[0,100,100,100]}}},p=[{name:s("main.temp"),data:n}];return(t,e)=>{const o=x("apexchart");return d(),h("div",C,[u(o,{type:"line",height:"350",options:l,series:p})])}}};export{y as default};
