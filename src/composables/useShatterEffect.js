// useShatterEffect.js — GSAP-powered geometric shatter animation
import { gsap } from 'gsap';

export function useShatterEffect() {
    const COLS = 4;
    const ROWS = 4;

    /**
     * Shatter a DOM element into fragments that explode outward.
     * @param {HTMLElement} element - The element to shatter
     * @param {Function} onComplete - Callback when animation finishes
     */
    function shatter(element, onComplete) {
        if (!element) {
            onComplete?.();
            return;
        }

        const rect = element.getBoundingClientRect();
        const fragW = rect.width / COLS;
        const fragH = rect.height / ROWS;

        // Create fixed overlay container
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            inset: 0;
            z-index: 85;
            pointer-events: none;
            overflow: hidden;
        `;
        document.body.appendChild(overlay);

        const fragments = [];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const frag = document.createElement('div');
                const clipX1 = (c / COLS) * 100;
                const clipY1 = (r / ROWS) * 100;
                const clipX2 = ((c + 1) / COLS) * 100;
                const clipY2 = ((r + 1) / ROWS) * 100;

                // Small random polygon variations for organic feel
                const jitter = () => (Math.random() - 0.5) * 3;

                frag.style.cssText = `
                    position: fixed;
                    left: ${rect.left}px;
                    top: ${rect.top}px;
                    width: ${rect.width}px;
                    height: ${rect.height}px;
                    clip-path: polygon(
                        ${clipX1 + jitter()}% ${clipY1 + jitter()}%,
                        ${clipX2 + jitter()}% ${clipY1 + jitter()}%,
                        ${clipX2 + jitter()}% ${clipY2 + jitter()}%,
                        ${clipX1 + jitter()}% ${clipY2 + jitter()}%
                    );
                    background: var(--color-brand-y);
                    opacity: 0.85;
                    will-change: transform, opacity;
                `;

                // Try to capture the visual of the original element
                const computedBg = globalThis.getComputedStyle?.(element)?.backgroundColor;
                if (computedBg && computedBg !== 'rgba(0, 0, 0, 0)') {
                    frag.style.background = computedBg;
                }

                // Copy inner content as a snapshot via canvas if possible, 
                // otherwise use brand color gradient fragments
                const gradient = `linear-gradient(
                    ${135 + Math.random() * 90}deg,
                    var(--color-brand-y) 0%,
                    oklch(66.38% 0.1751 273.13 / 0.6) 50%,
                    var(--color-brand-x) 100%
                )`;
                frag.style.background = gradient;

                // Add a subtle border glow to each fragment
                frag.style.boxShadow = '0 0 8px -2px var(--color-brand-y)';

                overlay.appendChild(frag);
                fragments.push({ el: frag, r, c });
            }
        }

        // Hide the original element
        element.style.transition = 'none';
        element.style.opacity = '0';

        // Calculate explosion vectors from center
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // GSAP timeline for the explosion
        const tl = gsap.timeline({
            onComplete: () => {
                overlay.remove();
                // Restore original element opacity after a frame
                requestAnimationFrame(() => {
                    if (element) {
                        element.style.transition = '';
                        element.style.opacity = '';
                    }
                });
                onComplete?.();
            }
        });

        fragments.forEach(({ el: frag, r, c }, i) => {
            // Direction vector: from element center outward
            const fragCenterX = rect.left + (c + 0.5) * fragW;
            const fragCenterY = rect.top + (r + 0.5) * fragH;
            const dx = fragCenterX - centerX;
            const dy = fragCenterY - centerY;
            const len = Math.sqrt(dx * dx + dy * dy) || 1;
            const normX = dx / len;
            const normY = dy / len;

            // Distance scales with position from center + randomness
            const distance = 180 + Math.random() * 320;

            tl.to(frag, {
                x: normX * distance + (Math.random() - 0.5) * 80,
                y: normY * distance + (Math.random() - 0.5) * 80,
                rotation: (Math.random() - 0.5) * 400,
                scale: 0.1 + Math.random() * 0.3,
                opacity: 0,
                duration: 0.55,
                ease: 'power3.out',
            }, i * 0.018);
        });

        return tl;
    }

    /**
     * Reassemble: fragments fly inward and reform.
     * @param {HTMLElement} element - The element to reassemble
     * @param {Function} onComplete - Callback when done
     */
    function reassemble(element, onComplete) {
        if (!element) {
            onComplete?.();
            return;
        }

        const rect = element.getBoundingClientRect();
        const fragW = rect.width / COLS;
        const fragH = rect.height / ROWS;

        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            inset: 0;
            z-index: 85;
            pointer-events: none;
            overflow: hidden;
        `;
        document.body.appendChild(overlay);

        // Hide original first
        element.style.transition = 'none';
        element.style.opacity = '0';

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const fragments = [];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const frag = document.createElement('div');
                const clipX1 = (c / COLS) * 100;
                const clipY1 = (r / ROWS) * 100;
                const clipX2 = ((c + 1) / COLS) * 100;
                const clipY2 = ((r + 1) / ROWS) * 100;
                const jitter = () => (Math.random() - 0.5) * 3;

                const fragCenterX = rect.left + (c + 0.5) * fragW;
                const fragCenterY = rect.top + (r + 0.5) * fragH;
                const dx = fragCenterX - centerX;
                const dy = fragCenterY - centerY;
                const len = Math.sqrt(dx * dx + dy * dy) || 1;
                const normX = dx / len;
                const normY = dy / len;
                const distance = 180 + Math.random() * 320;

                frag.style.cssText = `
                    position: fixed;
                    left: ${rect.left}px;
                    top: ${rect.top}px;
                    width: ${rect.width}px;
                    height: ${rect.height}px;
                    clip-path: polygon(
                        ${clipX1 + jitter()}% ${clipY1 + jitter()}%,
                        ${clipX2 + jitter()}% ${clipY1 + jitter()}%,
                        ${clipX2 + jitter()}% ${clipY2 + jitter()}%,
                        ${clipX1 + jitter()}% ${clipY2 + jitter()}%
                    );
                    will-change: transform, opacity;
                    box-shadow: 0 0 8px -2px var(--color-brand-y);
                `;

                const gradient = `linear-gradient(
                    ${135 + Math.random() * 90}deg,
                    var(--color-brand-y) 0%,
                    oklch(66.38% 0.1751 273.13 / 0.6) 50%,
                    var(--color-brand-x) 100%
                )`;
                frag.style.background = gradient;

                // Start scattered
                gsap.set(frag, {
                    x: normX * distance + (Math.random() - 0.5) * 80,
                    y: normY * distance + (Math.random() - 0.5) * 80,
                    rotation: (Math.random() - 0.5) * 400,
                    scale: 0.1 + Math.random() * 0.3,
                    opacity: 0,
                });

                overlay.appendChild(frag);
                fragments.push(frag);
            }
        }

        const tl = gsap.timeline({
            onComplete: () => {
                overlay.remove();
                element.style.transition = '';
                element.style.opacity = '1';
                onComplete?.();
            }
        });

        fragments.forEach((frag, i) => {
            tl.to(frag, {
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1,
                opacity: 0.85,
                duration: 0.5,
                ease: 'power2.inOut',
            }, i * 0.018);
        });

        // Fade fragments out as the real element fades in
        tl.to(overlay, {
            opacity: 0,
            duration: 0.2,
            ease: 'power1.out',
        }, '-=0.15');

        return tl;
    }

    return { shatter, reassemble };
}
