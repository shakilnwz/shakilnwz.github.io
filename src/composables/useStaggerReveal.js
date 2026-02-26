// useStaggerReveal.js
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


export function useStaggerReveal(containerRef, options = {}) {
    const {
        stagger = 0.1,
        start = "top 80%",
        once = false
    } = options

    const triggers = []

    const animate = (elements) => {
        elements.forEach((el, index) => {
            // Set initial state
            const parts = {
                circle: el.querySelector('.icon-circle'),
                img: el.querySelector('.icon-img'),
                detail: el.querySelector('.detail-container'),
                date: el.querySelector('.date-text'),
                title: el.querySelector('.title-text'),
                divider: el.querySelector('.divider'),
                summary: el.querySelector('.summary-text')
            }

            // Initial states
            gsap.set(parts.circle, { scale: 0, transformOrigin: "center" })
            gsap.set([parts.img, parts.detail, parts.date, parts.title, parts.divider, parts.summary], { 
                opacity: 0, 
                x: -20 
            })

            // Animation timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start,
                    toggleActions: once ? "play none none none" : "play none none reverse",
                    once
                }
            })

            tl.to(parts.circle, {
                scale: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
                delay: index * stagger
            })
                .to([parts.img, parts.detail], {
                    opacity: 1,
                    x: 0,
                    duration: 0.4,
                    stagger: 0.05,
                    ease: "power2.out"
                }, "-=0.3")
                .to([parts.date, parts.title, parts.divider, parts.summary], {
                    opacity: 1,
                    x: 0,
                    duration: 0.3,
                    stagger: 0.08,
                    ease: "power2.out"
                }, "-=0.2")

            triggers.push(tl.scrollTrigger)
        })
    }

    onUnmounted(() => {
        triggers.forEach(t => t.kill())
    })

    return { animate }
}
