(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function c(o){let r=0;const a=s=>{r=s,o.innerHTML=`count is ${r}`};o.addEventListener("click",()=>a(++r)),a(0)}const l="/assets/logo_alt-Ha-P5zya.svg";function f(o){o.classList.add("relative"),o.innerHTML=`
    <div 
        class="
            relative
            after:w-8
            after:-right-8
            after:rounded-tl-2xl
            after:h-8
            after:absolute
            after:top-0
            after:-z-10
            after:shadow-[-16px_0px_0px_0px_white]
            before:w-8
            before:-left-8
            before:rounded-tr-2xl
            before:h-8
            before:absolute
            before:top-0
            before:-z-10
            before:shadow-[16px_0px_0px_0px_white]
            p-2 bg-white max-w-6xl mx-auto flex flex-row justify-between items-center rounded-b-xl z-20
        ">
        <a class="max-w-20 block self-start" href="/">
            <img src='${l}' alt="logo"/>
        </a>
        <div class="flex-row flex gap-10 text-pink">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>

    </div>
`}const i=document.querySelector("#app");i.innerHTML=`
    <nav id="navbar"></nav>
  <div class="max-w-6xl h-[120vh] flex flex-col text-gray-200 items-center mx-auto">
    <h1>Hello World!</h1>
    <div class="w-fit border-gray-400 border rounded-lg px-4 py-2 my-2">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;i.classList.add("bg-ctp-base");c(document.querySelector("#counter"));f(document.querySelector("#navbar"));
