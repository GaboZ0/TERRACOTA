import { useEffect, useRef } from "react";

import styles from "./Hero.module.css";

import Container from "../../components/Container";
import Button from "../../components/Button";
import FeatureCard from "../../components/FeatureCard";

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
             * Seguimiento suavizado del scroll.
             *
             * El valor bajo evita que el fondo
             * se mueva de manera brusca.
             */

            currentScroll +=
                (targetScroll - currentScroll) * 0.045;


            /*
             * Oscurecimiento progresivo.
             *
             * Al comenzar el Hero está prácticamente
             * transparente.
             *
             * Al avanzar hacia abajo se transforma
             * progresivamente en negro.
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
             * Parallax extremadamente suave.
             *
             * El movimiento es pequeño para que la
             * imagen conserve una apariencia estática
             * y elegante.
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
            {
                passive: true,
            }
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


            {/* =================================================
                FONDO
            ================================================= */}

            <div
                className={styles.background}
                aria-hidden="true"
                style={{
                    backgroundImage:
                        `url(${heroImage})`,
                }}
            />


            {/* =================================================
                FILTRO MATE
            ================================================= */}

            <div
                className={styles.imageFilter}
                aria-hidden="true"
            />


            {/* =================================================
                OSCURECIMIENTO POR SCROLL
            ================================================= */}

            <div
                className={styles.scrollDarkness}
                aria-hidden="true"
            />


            {/* =================================================
                CONTENIDO PRINCIPAL
            ================================================= */}

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


            {/* =================================================
                CARACTERÍSTICAS DEL HERO
            ================================================= */}

            <div className={styles.heroFeatures}>


                <FeatureCard
                    variant="hero"
                    icon="development"
                    title="Desarrollo"
                    description="Soluciones de software a medida."
                />


                <FeatureCard
                    variant="hero"
                    icon="technology"
                    title="Tecnología"
                    description="Infraestructura moderna, segura y escalable."
                />


                <FeatureCard
                    variant="hero"
                    icon="innovation"
                    title="Innovación"
                    description="Transformamos ideas en herramientas poderosas."
                />


                <FeatureCard
                    variant="hero"
                    icon="support"
                    title="Soporte"
                    description="Acompañamiento real, siempre que lo necesitás."
                />


            </div>


        </section>

    );

}


export default Hero;