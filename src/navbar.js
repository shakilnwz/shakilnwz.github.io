import logo from "./assets/logo_alt.svg";
export default function (element) {
  element.classList.add("py-2", "bg-white", "sticky-top", "bg-opacity-80");
  element.innerHTML = `
    <div class="max-w-4xl mx-auto flex flex-row justify-between items-center">
        <a class="max-w-20 block" href="/">
            <img src='${logo}' alt="logo"/>
        </a>
        <div class="flex-row flex gap-10">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>

    </div>
`;
}
