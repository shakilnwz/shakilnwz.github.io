import "./style.css";
import logo from "./assets/logo_alt.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div class="flex flex-col text-gray-200 items-center mx-auto">
    <img src="${logo}" alt="snz logo" />
    <h1>Hello World!</h1>
    <div class="w-fit border-gray-400 border rounded-lg px-4 py-2 my-2">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
