import { useEffect, useRef, useState } from "react";

import styles from "./ScrollProgress.module.css";


const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "nosotros", label: "Nosotros" },
    { id: "servicios", label: "Servicios" },
    { id: "stats", label: "Estadísticas" },
    { id: "proceso", label: "Proceso" },
    { id: "tecnologias", label: "Tecnologías" },
    { id: "programas", label: "programas" },
    { id: "cta", label: "Empecemos" },
    { id: "contacto", label: "Contacto" },
];


function ScrollProgress() {

    const [scrollPosition, setScrollPosition] =
        useState(0);

    const [activeSection, setActiveSection] =
        useState("inicio");

    const [expanded, setExpanded] =
        useState(false);

    const [closing, setClosing] =
        useState(false);


    const previousSection =
        useRef("inicio");

    const scrollFrame =
        useRef(null);

    const hideTimeout =
        useRef(null);


    /* =====================================================
       MOSTRAR / OCULTAR PÍLDORA
    ===================================================== */

    const showPill =
        () => {

            setClosing(false);

            setExpanded(true);


            clearTimeout(
                hideTimeout.current
            );


            hideTimeout.current =
                setTimeout(() => {

                    setClosing(true);


                    /*
                     * Esperamos a que termine
                     * la animación de cierre.
                     */
                    hideTimeout.current =
                        setTimeout(() => {

                            setExpanded(false);

                            setClosing(false);

                        }, 620);

                }, 900);

        };


    /* =====================================================
       POSICIÓN DEL INDICADOR
    ===================================================== */

    useEffect(() => {

        const updateScrollPosition = () => {

            if (
                scrollFrame.current !== null
            ) {
                return;
            }


            scrollFrame.current =
                window.requestAnimationFrame(() => {

                    const scrollTop =
                        window.scrollY;

                    const viewportHeight =
                        window.innerHeight;

                    const documentHeight =
                        document.documentElement
                            .scrollHeight;


                    const scrollableHeight =
                        documentHeight -
                        viewportHeight;


                    if (
                        scrollableHeight <= 0
                    ) {

                        setScrollPosition(
                            viewportHeight / 2
                        );


                        scrollFrame.current =
                            null;

                        return;

                    }


                    /*
                     * Progreso general de la página.
                     */
                    const progress =
                        Math.min(
                            1,
                            Math.max(
                                0,
                                scrollTop /
                                scrollableHeight
                            )
                        );


                    /*
                     * Altura aproximada del thumb
                     * nativo.
                     */
                    const thumbHeight =
                        Math.max(
                            20,
                            (
                                viewportHeight /
                                documentHeight
                            ) *
                            viewportHeight
                        );


                    /*
                     * Recorrido real del thumb.
                     */
                    const thumbTravel =
                        Math.max(
                            0,
                            viewportHeight -
                            thumbHeight
                        );


                    /*
                     * Centro del thumb.
                     */
                    const thumbCenter =
                        (
                            thumbHeight / 2
                        ) +
                        (
                            progress *
                            thumbTravel
                        );


                    setScrollPosition(
                        thumbCenter
                    );


                    scrollFrame.current =
                        null;

                });

        };


        /*
         * La posición se calcula al mover el scroll.
         */
        const handleScroll = () => {

            updateScrollPosition();

            showPill();

        };


        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true,
            }
        );


        window.addEventListener(
            "resize",
            updateScrollPosition
        );


        updateScrollPosition();


        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );


            window.removeEventListener(
                "resize",
                updateScrollPosition
            );


            clearTimeout(
                hideTimeout.current
            );


            if (
                scrollFrame.current !== null
            ) {

                window.cancelAnimationFrame(
                    scrollFrame.current
                );

            }

        };

    }, []);


    /* =====================================================
       DETECCIÓN DE SECCIONES
    ===================================================== */

    useEffect(() => {

        const sectionElements =
            sections
                .map(
                    (section) =>
                        document.getElementById(
                            section.id
                        )
                )
                .filter(Boolean);


        if (
            !sectionElements.length
        ) {

            return undefined;

        }


        /*
         * Detectamos la sección inicial.
         */
        const initialSection =
            sectionElements.find(
                (section) => {

                    const rect =
                        section.getBoundingClientRect();


                    return (
                        rect.top <=
                        window.innerHeight * .45
                        &&
                        rect.bottom >
                        window.innerHeight * .25
                    );

                }
            );


        if (
            initialSection
        ) {

            previousSection.current =
                initialSection.id;


            setActiveSection(
                initialSection.id
            );

        }


        const observer =
            new IntersectionObserver(
                (entries) => {

                    const visibleEntries =
                        entries
                            .filter(
                                (entry) =>
                                    entry.isIntersecting
                            )
                            .sort(
                                (a, b) =>
                                    b.intersectionRatio -
                                    a.intersectionRatio
                            );


                    if (
                        !visibleEntries.length
                    ) {

                        return;

                    }


                    const currentId =
                        visibleEntries[0]
                            .target
                            .id;


                    /*
                     * Si seguimos en la misma sección,
                     * no cambiamos nada.
                     */
                    if (
                        currentId ===
                        previousSection.current
                    ) {

                        return;

                    }


                    previousSection.current =
                        currentId;


                    setActiveSection(
                        currentId
                    );


                    /*
                     * Si cambiamos de sección,
                     * nos aseguramos de que la píldora
                     * siga visible mientras haya scroll.
                     */
                    showPill();

                },
                {
                    root: null,

                    rootMargin:
                        "-30% 0px -45% 0px",

                    threshold: [
                        0,
                        .15,
                        .3,
                        .5,
                        .75,
                        1,
                    ],
                }
            );


        sectionElements.forEach(
            (section) => {

                observer.observe(
                    section
                );

            }
        );


        return () => {

            observer.disconnect();

        };

    }, []);


    /* =====================================================
       LABEL ACTIVO
    ===================================================== */

    const activeLabel =
        sections.find(
            (section) =>
                section.id ===
                activeSection
        )?.label ||
        "Inicio";


    /* =====================================================
       RENDER
    ===================================================== */

    return (

        <div
            className={
                styles.scrollProgress
            }
        >

            <div
                className={`
                    ${styles.indicator}
                    ${expanded ? styles.expanded : ""}
                    ${closing ? styles.closing : ""}
                `}
                style={{
                    "--section-position":
                        `${scrollPosition}px`,
                }}
            >

                <span
                    className={
                        styles.dot
                    }
                />


                <span
                    className={
                        styles.sectionName
                    }
                >
                    {activeLabel}
                </span>

            </div>

        </div>

    );

}


export default ScrollProgress;