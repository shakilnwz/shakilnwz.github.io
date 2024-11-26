import "./style.css";
import { setupCounter } from "./counter.js";
import navbar from "./navbar.js";
const main = document.querySelector("#app");
main.innerHTML = `
    <nav id="navbar"></nav>
  <div class="max-w-6xl h-[120vh] flex flex-col text-ctp-pink items-center mx-auto">
    <h1>Hello World!</h1>
    <div class="w-fit border-ctp-pink border rounded-lg px-4 py-2 my-2">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;
main.classList.add("bg-gradient-to-b", "from-ctp-base", "to-ctp-crust");
setupCounter(document.querySelector("#counter"));
navbar(document.querySelector("#navbar"));
