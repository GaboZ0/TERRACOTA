import { useEffect, useRef } from "react";

import styles from "./Hero.module.css";

import Container from "../../components/Container";
import Button from "../../components/Button";

import heroData from "./heroData";
import heroImage from "../../assets/images/hero-background.webp";

function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const hero = heroRef.current;

        if (!hero) {
            return undefined;
        }

        let animationFrame = null;

        let currentScroll = window.scrollY;
        let targetScroll = window.scrollY;

        const updateTarget = () => {
            targetScroll = window.scrollY;
        };

        const animate = () => {
            /*
             * Seguimiento suave del scroll.
             *
             * Un valor más bajo produce una sensación
             * más lenta y fluida.
             */
            currentScroll +=
                (targetScroll - currentScroll) * 0.045;

            /*
             * Oscurecimiento progresivo.
             */
            const darkness = Math.min(
                Math.max(
                    targetScroll /
                    (window.innerHeight * 0.9),
                    0
                ),
                1
            );

            /*
             * Movimiento muy reducido del fondo.
             *
             * El objetivo no es crear un parallax evidente,
             * sino evitar que el fondo se sienta rígido.
             */
            const parallax = Math.min(
                currentScroll * 0.055,
                window.innerHeight * 0.055
            );

            hero.style.setProperty(
                "--hero-scroll-darkness",
                darkness.toFixed(3)
            );

            hero.style.setProperty(
                "--hero-parallax",
                `${parallax.toFixed(2)}px`
            );

            animationFrame =
                window.requestAnimationFrame(
                    animate
                );
        };

        window.addEventListener(
            "scroll",
            updateTarget,
            { passive: true }
        );

        animate();

        return () => {
            window.removeEventListener(
                "scroll",
                updateTarget
            );

            if (animationFrame !== null) {
                window.cancelAnimationFrame(
                    animationFrame
                );
            }
        };
    }, []);

    return (
        <section
            ref={heroRef}
            id="inicio"
            className={styles.hero}
        >
            <div
                className={styles.background}
                aria-hidden="true"
                style={{
                    backgroundImage:
                        `url(${heroImage})`,
                }}
            />

            <div
                className={styles.imageFilter}
                aria-hidden="true"
            />

            <div
                className={styles.scrollDarkness}
                aria-hidden="true"
            />

            <Container>
                <div className={styles.content}>
                    <div className={styles.left}>

                        <h1 className={styles.title}>
                            <span>
                                {heroData.titleTop}
                            </span>

                            <span
                                className={styles.accent}
                            >
                                {heroData.titleAccent}
                            </span>

                            <span
                                className={styles.accent}
                            >
                                {heroData.titleBottom}
                            </span>
                        </h1>

                        <p className={styles.description}>
                            {heroData.description}
                        </p>

                        <div className={styles.buttons}>
                            <Button href="#servicios">
                                {heroData.primaryButton}
                            </Button>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Hero;