import {
    useEffect,
    useRef,
    useState,
} from "react";

import styles from "./ScrollProgress.module.css";


/* =========================================================
   SECCIONES
========================================================= */

const sections = [
    {
        id: "inicio",
        label: "Inicio",
    },
    {
        id: "nosotros",
        label: "Nosotros",
    },
    {
        id: "servicios",
        label: "Servicios",
    },
    {
        id: "stats",
        label: "Estadísticas",
    },
    {
        id: "proceso",
        label: "Proceso",
    },
    {
        id: "tecnologias",
        label: "Tecnologías",
    },
    {
        id: "programas",
        label: "Programas",
    },
    {
        id: "cta",
        label: "Empecemos",
    },
    {
        id: "contacto",
        label: "Contacto",
    },
];


function ScrollProgress() {

    const [
        scrollPosition,
        setScrollPosition,
    ] = useState(0);


    const [
        activeSection,
        setActiveSection,
    ] = useState("inicio");


    const [
        isScrolling,
        setIsScrolling,
    ] = useState(false);


    const previousSection =
        useRef("inicio");


    const scrollFrame =
        useRef(null);


    const hideTimeout =
        useRef(null);


    /* =====================================================
       MOSTRAR PÍLDORA DURANTE EL SCROLL
    ===================================================== */

    const showDuringScroll = () => {

        /*
         * La mostramos.
         */
        setIsScrolling(true);


        /*
         * Cada movimiento reinicia
         * el temporizador.
         */
        clearTimeout(
            hideTimeout.current
        );


        hideTimeout.current =
            setTimeout(() => {

                /*
                 * El usuario dejó de desplazarse.
                 * Comienza el fade-out.
                 */
                setIsScrolling(false);

            }, 800);
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
                        document
                            .documentElement
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
                     * de la scrollbar nativa.
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
                     * Distancia real que recorre
                     * el thumb.
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


        /* =================================================
           SCROLL
        ================================================= */

        const handleScroll = () => {

            updateScrollPosition();

            showDuringScroll();

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


        /*
         * Posición inicial.
         */
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
                        window.innerHeight * 0.45
                        &&
                        rect.bottom >
                        window.innerHeight * 0.25
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

                },
                {
                    root:
                        null,

                    rootMargin:
                        "-30% 0px -45% 0px",

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
                    ${
                        isScrolling
                            ? styles.visible
                            : ""
                    }
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