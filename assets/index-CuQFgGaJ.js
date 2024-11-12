(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function i(o){let r=0;const n=c=>{r=c,o.innerHTML=`count is ${r}`};o.addEventListener("click",()=>n(++r)),n(0)}const a="/assets/logo_alt-B6iUA9Wd.svg";function l(o){o.classList.add("py-2","bg-white","sticky-top","bg-opacity-80"),o.innerHTML=`
    <div class="max-w-4xl mx-auto flex flex-row justify-between items-center">
        <a class="max-w-20 block" href="/">
            <img src='${a}' alt="logo"/>
        </a>
        <div class="flex-row flex gap-10">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>

    </div>
`}document.querySelector("#app").innerHTML=`
    <nav id="navbar"></nav>
  <div class="max-w-3xl flex flex-col text-gray-200 items-center mx-auto">
    <h1>Hello World!</h1>
    <div class="w-fit border-gray-400 border rounded-lg px-4 py-2 my-2">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;i(document.querySelector("#counter"));l(document.querySelector("#navbar"));
