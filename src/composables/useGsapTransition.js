// useGsapTransition.js
import gsap from 'gsap'

export function useFadeSlide(duration = 0.4) {
    const beforeEnter = (el) => {
        gsap.set(el, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
    }

    const enter = (el, done) => {
        gsap
            .timeline({ onComplete: done })
            .to(el, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
            .to(el, { scale: 1, duration: 0.25 })
    }

    const leave = (el, done) => {
        gsap
            .timeline({ onComplete: done })
            .to(el, { scale: 0.8, duration: 0.2 })
            .to(el, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
    }

    return { beforeEnter, enter, leave }
}
