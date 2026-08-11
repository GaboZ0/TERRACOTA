import { useEffect, useRef, useState } from "react";

import styles from "./ScrollProgress.module.css";


/* =========================================================
   SECCIONES
========================================================= */

const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "nosotros", label: "Nosotros" },
    { id: "servicios", label: "Servicios" },
    { id: "stats", label: "Estadísticas" },
    { id: "proceso", label: "Proceso" },
    { id: "tecnologias", label: "Tecnologías" },
    { id: "proyectos", label: "Proyectos" },
    { id: "cta", label: "Empecemos" },
    { id: "contacto", label: "Contacto" },
];


function ScrollProgress() {

    const [scrollPosition, setScrollPosition] = useState(0);

    const [activeSection, setActiveSection] =
        useState("inicio");

    const [expanded, setExpanded] =
        useState(false);

    const [closing, setClosing] =
        useState(false);


    const previousSection =
        useRef("inicio");

    const expandTimeout =
        useRef(null);

    const scrollFrame =
        useRef(null);


    /* =====================================================
       POSICIÓN DEL SCROLLBAR NATIVO
    ===================================================== */

    useEffect(() => {

        const updateScrollPosition = () => {

            /*
             * Si ya existe un frame pendiente,
             * esperamos a que termine.
             */
            if (scrollFrame.current !== null) {
                return;
            }


            scrollFrame.current =
                window.requestAnimationFrame(() => {

                    const scrollTop =
                        window.scrollY;


                    const viewportHeight =
                        window.innerHeight;


                    const documentHeight =
                        document.documentElement.scrollHeight;


                    /*
                     * Altura real que puede recorrer
                     * la página.
                     */
                    const scrollableHeight =
                        documentHeight -
                        viewportHeight;


                    if (
                        scrollableHeight <= 0
                    ) {

                        setScrollPosition(0);

                        scrollFrame.current =
                            null;

                        return;
                    }


                    /*
                     * Progreso real de la página.
                     *
                     * 0 = arriba
                     * 1 = abajo
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
                     * -------------------------------------------------
                     * CALCULAMOS EL TAMAÑO DEL THUMB NATIVO
                     * -------------------------------------------------
                     *
                     * El thumb de la scrollbar representa la
                     * proporción de viewport respecto al documento.
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
                     * Distancia que realmente puede recorrer
                     * el thumb.
                     */
                    const thumbTravel =
                        Math.max(
                            0,
                            viewportHeight -
                            thumbHeight
                        );


                    /*
                     * Posición del CENTRO del thumb.
                     *
                     * Esto es lo importante:
                     *
                     * antes utilizábamos simplemente:
                     *
                     *     progress * 100%
                     *
                     * pero eso representa el desplazamiento
                     * de la página, no el centro del indicador.
                     *
                     * Ahora tenemos en cuenta la altura del thumb.
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


        window.addEventListener(
            "scroll",
            updateScrollPosition,
            {
                passive: true,
            }
        );


        window.addEventListener(
            "resize",
            updateScrollPosition
        );


        /*
         * Posición inicial.
         */
        updateScrollPosition();


        return () => {

            window.removeEventListener(
                "scroll",
                updateScrollPosition
            );


            window.removeEventListener(
                "resize",
                updateScrollPosition
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
       DETECCIÓN DE SECCIÓN
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
                     * Si seguimos dentro de la misma
                     * sección no hacemos nada.
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
                     * Abrimos inmediatamente
                     * la píldora.
                     */
                    setClosing(false);

                    setExpanded(true);


                    /*
                     * Limpiamos cualquier temporizador
                     * anterior.
                     */
                    clearTimeout(
                        expandTimeout.current
                    );


                    /*
                     * La mantenemos abierta durante
                     * un momento antes de comenzar
                     * el cierre.
                     */
                    expandTimeout.current =
                        setTimeout(() => {

                            setClosing(true);


                            expandTimeout.current =
                                setTimeout(() => {

                                    setExpanded(false);

                                    setClosing(false);

                                }, 620);

                        }, 1500);

                },
                {
                    root: null,

                    rootMargin:
                        "-25% 0px -55% 0px",

                    threshold: [
                        0,
                        0.15,
                        0.3,
                        0.5,
                        0.75,
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


            clearTimeout(
                expandTimeout.current
            );

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