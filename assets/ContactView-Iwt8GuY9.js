import{e as v,n as m,c as x,w,d as b,o as c,a as t,b as s,u as a,h as o,f as y,k as u,q as g,v as p,g as k,s as L,i as _}from"./index-CZnks43M.js";const V={class:L({"sm:py-10 py-5 max-w-5xl space-y-2.5 sm:space-y-4":!0})},z={class:"space-y-2.5 sm:space-y-4"},H={class:"bg-brand-y hover:bg-surface text-surface hover:text-brand-y justify-center font-bold rounded-xl border-brand-y border-2 w-fit flex flex-row flex-wrap items-center gap-x-2 px-5 py-1 transition-all duration-300"},I={class:"fill-current h-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},M=["d"],T={__name:"ContactView",setup(B){const n=_("icons"),i=m(""),r=m(""),d=m(""),h=async()=>{const e="https://docs.google.com/forms/d/e/1FAIpQLSdOIQQL_gZwrQX9eIrKn22ynVThxyhxQU73g_aKYpd-gcZoPg/formResponse",l=new FormData;l.append("entry.252721265",i.value),l.append("entry.1305900489",r.value),l.append("entry.509312173",d.value);try{await fetch(e,{method:"POST",body:l,mode:"no-cors"}),alert("Message sent successfully!"),i.value="",r.value="",d.value=""}catch{alert("There was an error sending your message. Please try again.")}};return(f,e)=>(c(),x(b,{contained:""},{default:w(()=>[e[8]||(e[8]=t("h2",null,"Connect",-1)),t("div",V,[e[3]||(e[3]=t("p",null,"Let's get connected and plan on building your next dream WebSite.",-1)),t("ul",z,[t("li",null,[s(o,{text:"Email me at",textHighlight:"shakilnwz@gmail.com",href:"mailto:shakilnwz@gmail.com",svgd:a(n).email,ariaLebel:"Email me at shakilnwz@gmail.com"},null,8,["svgd"])]),t("li",null,[s(o,{text:"Let's connect on",textHighlight:"WhatsApp",href:"https://wa.me/8801791907711",svgd:a(n).whatsapp,ariaLebel:"Let's connect on whatsapp"},null,8,["svgd"])]),t("li",null,[s(o,{text:"Find me on",textHighlight:"Discord",href:"https://discord.com/channels/@me/shakilnwz",svgd:a(n).discord,ariaLebel:"find me on discord"},null,8,["svgd"])]),t("li",null,[s(o,{text:"Let's connect on",textHighlight:"LinkedIn",href:"https://www.linkedin.com/in/shakilnwz/",svgd:a(n).linkedin,ariaLebel:"connect on linkedin"},null,8,["svgd"])]),t("li",null,[s(o,{text:"View My Timeline on",textHighlight:"GitHub",href:"https://github.com/shakilnwz",svgd:a(n).github,ariaLebel:"view github"},null,8,["svgd"])]),t("li",null,[s(o,{text:"Find Me On",textHighlight:"X",href:"https://x.com/shakilnwz",svgd:a(n).twitter,ariaLebel:"find me on x"},null,8,["svgd"])])])]),t("div",null,[t("form",{onSubmit:y(h,["prevent"])},[t("label",null,[e[4]||(e[4]=u(" Your Name ")),g(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>i.value=l),name:"name"},null,512),[[p,i.value]])]),t("label",null,[e[5]||(e[5]=u(" Your Email ")),g(t("input",{type:"email","onUpdate:modelValue":e[1]||(e[1]=l=>r.value=l),name:"email"},null,512),[[p,r.value]])]),t("label",null,[e[6]||(e[6]=u(" Message ")),g(t("textarea",{type:"email","onUpdate:modelValue":e[2]||(e[2]=l=>d.value=l),name:"message"},null,512),[[p,d.value]])]),t("button",H,[(c(),k("svg",I,[t("path",{"fill-rule":"evenodd",d:a(n).email,"clip-rule":"evenodd"},null,8,M)])),e[7]||(e[7]=u(" Send Message "))])],32)])]),_:1}))}},Q=v(T,[["__scopeId","data-v-6c1f07fa"]]);export{Q as default};