import "./style.css";
import logo from "./assets/logo.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div class="flex flex-col items-center max-w-2xl mx-auto bg-gray-50">
    <img src="${logo}" alt="snz logo" />
    <h1>Hello World!</h1>
    <div class="w-fit border-gray-400 border rounded-lg px-4 py-2 my-2">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
