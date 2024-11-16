import logo from "./assets/logo_alt.svg";
export default function (element) {
  element.classList.add("relative");
  element.innerHTML = `
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
