import { useEffect, useRef, useState } from "react";

import styles from "./ScrollProgress.module.css";

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
    const [progress, setProgress] = useState(0);
    const [activeSection, setActiveSection] = useState("inicio");
    const [expanded, setExpanded] = useState(false);
    const [closing, setClosing] = useState(false);

    const previousSection = useRef("inicio");
    const expandTimeout = useRef(null);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY;
            const documentHeight =
                document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollableHeight = documentHeight - windowHeight;

            if (scrollableHeight <= 0) {
                setProgress(0);
                return;
            }

            const currentProgress =
                (scrollTop / scrollableHeight) * 100;

            setProgress(
                Math.min(100, Math.max(0, currentProgress))
            );
        }

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const sectionElements = sections
            .map((section) =>
                document.getElementById(section.id)
            )
            .filter(Boolean);

        if (!sectionElements.length) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio -
                            a.intersectionRatio
                    );

                if (!visibleEntries.length) {
                    return;
                }

                const currentId =
                    visibleEntries[0].target.id;

                if (currentId === previousSection.current) {
                    return;
                }

                previousSection.current = currentId;
                setActiveSection(currentId);

                setClosing(false);
                setExpanded(true);

                clearTimeout(expandTimeout.current);

                /*
                 * Primero ejecutamos la animación de cierre
                 * manteniendo el elemento montado y expandido.
                 */
                expandTimeout.current = setTimeout(() => {
                    setClosing(true);

                    expandTimeout.current = setTimeout(() => {
                        setExpanded(false);
                        setClosing(false);
                    }, 620);
                }, 1500);
            },
            {
                root: null,
                rootMargin: "-25% 0px -55% 0px",
                threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
            }
        );

        sectionElements.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
            clearTimeout(expandTimeout.current);
        };
    }, []);

    const activeLabel =
        sections.find(
            (section) => section.id === activeSection
        )?.label || "Inicio";

    return (
        <div className={styles.scrollProgress}>
            <div
                className={`${styles.indicator} ${
                    expanded ? styles.expanded : ""
                } ${closing ? styles.closing : ""}`}
                style={{
                    "--section-position": `${progress}%`,
                }}
            >
                <span className={styles.dot} />

                <span className={styles.sectionName}>
                    {activeLabel}
                </span>
            </div>
        </div>
    );
}

export default ScrollProgress;