(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c="/assets/logo_alt-OevOrXEp.svg";function u(s){let r=0;const o=n=>{r=n,s.innerHTML=`count is ${r}`};s.addEventListener("click",()=>o(++r)),o(0)}document.querySelector("#app").innerHTML=`
  <div class="flex flex-col text-gray-200 items-center mx-auto">
    <img src="${c}" alt="snz logo" />
    <h1>Hello World!</h1>
    <div class="w-fit border-gray-400 border rounded-lg px-4 py-2 my-2">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;u(document.querySelector("#counter"));
