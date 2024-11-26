import logo from "./assets/logo_alt.svg";
export default function (element) {
  const outerRoundNav = `
            relative
            after:w-8
            after:-right-8
            after:rounded-tl-2xl
            after:h-8
            after:absolute
            after:top-0
            after:-z-10
            after:shadow-[-16px_0px_0px_0px_ctp-flamingo]
            before:w-8
            before:-left-8
            before:rounded-tr-2xl
            before:h-8
            before:absolute
            before:top-0
            before:-z-10
            before:shadow-[16px_0px_0px_0px_ctp-flamingo]
            p-2 bg-ctp-flamingo max-w-6xl mx-auto flex flex-row justify-between items-center rounded-b-xl z-20
        `;
  element.classList.add("relative");
  element.innerHTML = `
    <div 
        class="${outerRoundNav}">
        <a class="max-w-20 block self-start" href="/">
            <img src='${logo}' alt="logo"/>
        </a>
        <div class="flex-row flex gap-10 text-ctp-pink">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>

    </div>
`;
}
