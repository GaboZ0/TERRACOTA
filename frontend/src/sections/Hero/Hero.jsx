import {
    useEffect,
    useRef,
} from "react";

import styles from "./Hero.module.css";

import Container from "../../components/Container";
import Button from "../../components/Button";

import heroData from "./heroData";

import heroBackground
    from "../../assets/images/hero-background.webp";


function Hero() {

    const heroRef =
        useRef(null);


    useEffect(() => {

        const hero =
            heroRef.current;


        if (!hero) {

            return undefined;

        }


        let animationFrame =
            null;

        let currentScroll =
            window.scrollY;

        let targetScroll =
            window.scrollY;


        const updateTarget = () => {

            targetScroll =
                window.scrollY;

        };


        const animate = () => {

            /*
             * Movimiento suavizado del scroll.
             */

            currentScroll +=
                (
                    targetScroll -
                    currentScroll
                ) * 0.075;


            /*
             * Oscurecimiento progresivo.
             */

            const darkness =
                Math.min(
                    Math.max(
                        targetScroll /
                        (
                            window.innerHeight *
                            0.9
                        ),
                        0
                    ),
                    1
                );


            /*
             * Parallax muy sutil.
             */

            const parallax =
                Math.min(
                    currentScroll * 0.10,
                    window.innerHeight * 0.10
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


            if (
                animationFrame !== null
            ) {

                window.cancelAnimationFrame(
                    animationFrame
                );

            }

        };

    }, []);


    /*
     * ERM FLEX apunta a su propia web.
     *
     * Mientras no tengamos la URL definitiva,
     * usamos temporalmente #productos.
     */

    const productUrl =
        heroData.productButtonUrl ||
        "#productos";


    const isExternalProduct =
        Boolean(
            heroData.productButtonUrl
        );


    return (

        <section
            ref={heroRef}
            id="inicio"
            className={
                styles.hero
            }
        >

            {/* =================================================
                FONDO PRINCIPAL
            ================================================= */}

            <div
                className={
                    styles.background
                }
                aria-hidden="true"
                style={{
                    backgroundImage:
                        `url(${heroBackground})`,
                }}
            />


            {/* =================================================
                FILTRO
            ================================================= */}

            <div
                className={
                    styles.imageFilter
                }
                aria-hidden="true"
            />


            {/* =================================================
                OSCURECIMIENTO DURANTE SCROLL
            ================================================= */}

            <div
                className={
                    styles.scrollDarkness
                }
                aria-hidden="true"
            />


            {/* =================================================
                CONTENIDO
            ================================================= */}

            <Container>

                <div
                    className={
                        styles.content
                    }
                >

                    <div
                        className={
                            styles.left
                        }
                    >

                        <h1
                            className={
                                styles.title
                            }
                        >

                            <span>
                                {
                                    heroData.titleTop
                                }
                            </span>


                            <span
                                className={
                                    styles.accent
                                }
                            >
                                {
                                    heroData.titleAccent
                                }
                            </span>


                            <span
                                className={
                                    styles.accent
                                }
                            >
                                {
                                    heroData.titleBottom
                                }
                            </span>

                        </h1>


                        <p
                            className={
                                styles.description
                            }
                        >
                            {
                                heroData.description
                            }
                        </p>


                        {/* =================================================
                            BOTONES
                        ================================================= */}

                        <div
                            className={
                                styles.buttons
                            }
                        >

                            {/* =============================================
                                CONOCÉ MÁS
                            ============================================= */}

                            <Button
                                href="#servicios"
                            >
                                {
                                    heroData.primaryButton
                                }
                            </Button>


                            {/* =============================================
                                ERM FLEX
                            ============================================= */}

                            <a
                                href={
                                    productUrl
                                }
                                className={
                                    styles.programButton
                                }
                                target={
                                    isExternalProduct
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    isExternalProduct
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                aria-label={
                                    isExternalProduct
                                        ? "Abrir ERM FLEX en un sitio externo"
                                        : "Ver productos"
                                }
                            >
                                ERM FLEX
                            </a>

                        </div>

                    </div>

                </div>

            </Container>

        </section>

    );

}


export default Hero;