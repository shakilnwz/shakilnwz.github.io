(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function i(o){let r=0;const a=n=>{r=n,o.innerHTML=`count is ${r}`};o.addEventListener("click",()=>a(++r)),a(0)}const c="/assets/logo_alt-Ha-P5zya.svg";function l(o){o.classList.add("relative"),o.innerHTML=`
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
            <img src='${c}' alt="logo"/>
        </a>
        <div class="flex-row flex gap-10">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>

    </div>
`}document.querySelector("#app").innerHTML=`
    <nav id="navbar"></nav>
  <div class="max-w-6xl h-[120vh] flex flex-col text-gray-200 items-center mx-auto">
    <h1>Hello World!</h1>
    <div class="w-fit border-gray-400 border rounded-lg px-4 py-2 my-2">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;i(document.querySelector("#counter"));l(document.querySelector("#navbar"));
