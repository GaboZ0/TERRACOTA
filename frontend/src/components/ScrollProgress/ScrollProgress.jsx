import { useEffect, useRef, useState } from "react";

import styles from "./ScrollProgress.module.css";

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
        id: "proyectos",
        label: "Proyectos",
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

    const [progress, setProgress] = useState(0);

    const [activeSection, setActiveSection] =
        useState("inicio");

    const [expanded, setExpanded] =
        useState(false);

    const previousSection =
        useRef("inicio");

    const expandTimeout =
        useRef(null);


    /* ============================
       Progreso de toda la página
    ============================ */

    useEffect(() => {

        function handleScroll() {

            const scrollTop =
                window.scrollY;

            const documentHeight =
                document.documentElement.scrollHeight;

            const windowHeight =
                window.innerHeight;

            const scrollableHeight =
                documentHeight - windowHeight;


            if (scrollableHeight <= 0) {

                setProgress(0);

                return;
            }


            const currentProgress =
                (scrollTop / scrollableHeight) * 100;


            setProgress(
                Math.min(
                    100,
                    Math.max(
                        0,
                        currentProgress
                    )
                )
            );
        }


        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );


        handleScroll();


        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };

    }, []);


    /* ============================
       Detectar sección actual
    ============================ */

    useEffect(() => {

        const sectionElements =
            sections
                .map((section) =>
                    document.getElementById(
                        section.id
                    )
                )
                .filter(Boolean);


        if (!sectionElements.length) {
            return;
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
                        visibleEntries.length === 0
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


                    /* ============================
                       Expandir desde el punto actual
                    ============================ */

                    setExpanded(true);


                    clearTimeout(
                        expandTimeout.current
                    );


                    expandTimeout.current =
                        setTimeout(() => {

                            setExpanded(false);

                        }, 1600);

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

                observer.observe(section);

            }
        );


        return () => {

            observer.disconnect();

            clearTimeout(
                expandTimeout.current
            );
        };

    }, []);


    const activeLabel =
        sections.find(
            (section) =>
                section.id === activeSection
        )?.label || "Inicio";


    return (

        <div
            className={styles.scrollProgress}
        >

            {/* Línea completa */}

            <div
                className={styles.track}
            >

                <div
                    className={styles.progress}
                    style={{
                        height:
                            `${progress}%`,
                    }}
                />

            </div>


            {/* Punto de progreso */}

            <div
                className={`
                    ${styles.indicator}
                    ${
                        expanded
                            ? styles.expanded
                            : ""
                    }
                `}
                style={{
                    "--progress-position":
                        `${progress}%`,
                }}
            >

                <span
                    className={styles.dot}
                />

                <span
                    className={styles.sectionName}
                >
                    {activeLabel}
                </span>

            </div>

        </div>
    );
}

export default ScrollProgress;