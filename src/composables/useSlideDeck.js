// useSlideDeck.js - Presentation Deck State & Navigation Controller
import { ref, computed } from 'vue';
import { useAnimeAudio } from './useAnimeAudio';

export const SLIDES = [
    {
        id: 'hero',
        num: '01',
        title: 'PILOT IDENT',
        codeTag: 'INIT.SYS',
        subtitle: 'System & Persona',
        badge: 'UNIT-01 // ACTIVE',
        path: '/'
    },
    {
        id: 'about',
        num: '02',
        title: 'CHARACTER LORE',
        codeTag: 'BIO.LORE',
        subtitle: 'Physics to Web Odyssey',
        badge: 'LORE // STATS',
        path: '/about'
    },
    {
        id: 'skills',
        num: '03',
        title: 'TECH ARSENAL',
        codeTag: 'TECH.TREE',
        subtitle: 'Ability Matrix & Journey',
        badge: 'STACK // TREE',
        path: '/skills'
    },
    {
        id: 'projects',
        num: '04',
        title: 'DEPLOYED MISSIONS',
        codeTag: 'OPS.PROJ',
        subtitle: 'Featured Works & Demos',
        badge: 'OPS // 8 MISSIONS',
        path: '/projects'
    },
    {
        id: 'articles',
        num: '05',
        title: 'INTEL ARCHIVE',
        codeTag: 'DOCS.ARCH',
        subtitle: 'Engineering Insights',
        badge: 'INTEL // DENO + VITE',
        path: '/articles'
    },
    {
        id: 'experience',
        num: '06',
        title: 'SERVICE LOG',
        codeTag: 'LOG.HIST',
        subtitle: 'Career Record & Education',
        badge: 'RECORD // 2017-PRES',
        path: '/experience'
    },
    {
        id: 'contact',
        num: '07',
        title: 'DISPATCH COMMS',
        codeTag: 'COMM.FREQ',
        subtitle: 'Transmission Frequencies',
        badge: 'COMMS // DIRECT LINK',
        path: '/contact'
    }
];

const currentSlideIndex = ref(0);

// Initialize slide from current URL
if (typeof globalThis.location !== 'undefined') {
    const path = globalThis.location.pathname;
    const matchIdx = SLIDES.findIndex(s => s.path === path || (path !== '/' && s.path !== '/' && path.startsWith(s.path)));
    if (matchIdx !== -1) {
        currentSlideIndex.value = matchIdx;
    }
}

const transitionDirection = ref('next');
const isSlashing = ref(false);
const viewMode = ref('slide'); // 'slide' | 'scroll'
const isOverviewOpen = ref(false);

export function useSlideDeck() {
    const audio = useAnimeAudio();

    const currentSlide = computed(() => SLIDES[currentSlideIndex.value] || SLIDES[0]);
    const totalSlides = SLIDES.length;
    const progressPercent = computed(() => Math.round(((currentSlideIndex.value + 1) / totalSlides) * 100));

    const triggerSlashEffect = () => {
        isSlashing.value = true;
        setTimeout(() => {
            isSlashing.value = false;
        }, 400);
    };

    const goToSlide = (index, playSfx = true) => {
        if (index < 0 || index >= totalSlides) return;
        if (index === currentSlideIndex.value) return;

        transitionDirection.value = index > currentSlideIndex.value ? 'next' : 'prev';
        currentSlideIndex.value = index;
        triggerSlashEffect();

        if (playSfx) {
            audio.playSlide(transitionDirection.value);
        }

        // Update URL hash or route if not on resume/bio
        if (typeof globalThis.location !== 'undefined') {
            const targetSlide = SLIDES[index];
            if (targetSlide && globalThis.location.pathname === '/' || SLIDES.some(s => s.path === globalThis.location.pathname)) {
                globalThis.history.replaceState(null, '', targetSlide.path === '/' ? '/' : targetSlide.path);
            }
        }
    };

    const nextSlide = () => {
        if (currentSlideIndex.value < totalSlides - 1) {
            goToSlide(currentSlideIndex.value + 1);
        } else {
            // Loop back to first slide or stay
            goToSlide(0);
        }
    };

    const prevSlide = () => {
        if (currentSlideIndex.value > 0) {
            goToSlide(currentSlideIndex.value - 1);
        } else {
            goToSlide(totalSlides - 1);
        }
    };

    const toggleViewMode = () => {
        viewMode.value = viewMode.value === 'slide' ? 'scroll' : 'slide';
        audio.playClick();
    };

    const toggleOverview = () => {
        isOverviewOpen.value = !isOverviewOpen.value;
        audio.playClick();
    };

    // Keyboard navigation
    let lastWheelTime = 0;
    const onKeyDown = (e) => {
        // Ignore if user is typing in form input/textarea
        const tag = e.target?.tagName?.toLowerCase();
        if (tag === 'input' || tag === 'textarea' || e.target?.isContentEditable) return;

        if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) {
            e.preventDefault();
            nextSlide();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) {
            e.preventDefault();
            prevSlide();
        } else if (e.key === 'Home') {
            e.preventDefault();
            goToSlide(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            goToSlide(totalSlides - 1);
        } else if (e.key === 'm' || e.key === 'M') {
            toggleOverview();
        } else if (e.key === 'v' || e.key === 'V') {
            toggleViewMode();
        } else if (e.key === 's' || e.key === 'S') {
            audio.toggleSound();
        } else if (e.key >= '1' && e.key <= '7') {
            const idx = parseInt(e.key, 10) - 1;
            goToSlide(idx);
        }
    };

    // Wheel navigation (debounced to avoid accidental skips)
    const onWheel = (e) => {
        if (viewMode.value !== 'slide') return;
        if (isOverviewOpen.value) return;

        // Check if inside a scrollable child container
        const isScrollable = (el) => {
            if (!el || el === document.body) return false;
            const style = globalThis.getComputedStyle?.(el) || el.style;
            const overflowY = style?.overflowY;
            if ((overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight) {
                // If scrolling down and not at bottom, or scrolling up and not at top
                if (e.deltaY > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 10) return true;
                if (e.deltaY < 0 && el.scrollTop > 10) return true;
            }
            return isScrollable(el.parentElement);
        };

        if (isScrollable(e.target)) return;

        const now = Date.now();
        if (now - lastWheelTime < 650) return;

        if (Math.abs(e.deltaY) > 30) {
            lastWheelTime = now;
            if (e.deltaY > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    };

    // Touch Swipe navigation
    let touchStartY = 0;
    let touchStartX = 0;
    const onTouchStart = (e) => {
        if (e.touches && e.touches.length === 1) {
            touchStartY = e.touches[0].clientY;
            touchStartX = e.touches[0].clientX;
        }
    };

    const onTouchEnd = (e) => {
        if (viewMode.value !== 'slide') return;
        if (isOverviewOpen.value) return;
        if (e.changedTouches && e.changedTouches.length === 1) {
            const diffY = touchStartY - e.changedTouches[0].clientY;
            const diffX = touchStartX - e.changedTouches[0].clientX;

            // Prioritize dominant axis
            if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 50) {
                if (diffY > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            } else if (Math.abs(diffX) > 60) {
                if (diffX > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        }
    };

    return {
        SLIDES,
        currentSlideIndex,
        currentSlide,
        totalSlides,
        progressPercent,
        transitionDirection,
        isSlashing,
        viewMode,
        isOverviewOpen,
        goToSlide,
        nextSlide,
        prevSlide,
        toggleViewMode,
        toggleOverview,
        onKeyDown,
        onWheel,
        onTouchStart,
        onTouchEnd
    };
}
