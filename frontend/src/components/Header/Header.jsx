import {
    useEffect,
    useState,
} from "react";

import styles from "./Header.module.css";

import Container from "../Container";
import Logo from "../Logo";

import headerData from "./headerData";
import useScroll from "../../hooks/useScroll";


function Header() {

    const isScrolled =
        useScroll();

    const [menuOpen, setMenuOpen] =
        useState(false);


    function handleMenuToggle() {

        setMenuOpen(
            (previous) =>
                !previous
        );

    }


    function handleMenuClose() {

        setMenuOpen(false);

    }


    /*
     * Si volvemos a escritorio,
     * cerramos automáticamente el menú móvil.
     */
    useEffect(() => {

        function handleResize() {

            if (
                window.innerWidth > 768
            ) {

                setMenuOpen(false);

            }

        }


        window.addEventListener(
            "resize",
            handleResize
        );


        return () => {

            window.removeEventListener(
                "resize",
                handleResize
            );

        };

    }, []);


    /*
     * Escape cierra el menú móvil.
     */
    useEffect(() => {

        if (!menuOpen) {
            return undefined;
        }


        function handleKeyDown(event) {

            if (
                event.key === "Escape"
            ) {

                handleMenuClose();

            }

        }


        document.addEventListener(
            "keydown",
            handleKeyDown
        );


        return () => {

            document.removeEventListener(
                "keydown",
                handleKeyDown
            );

        };

    }, [menuOpen]);


    return (

        <header
            className={`
                ${styles.header}
                ${isScrolled ? styles.scrolled : ""}
                ${menuOpen ? styles.menuOpen : ""}
            `}
        >

            <Container>

                <div
                    className={
                        styles.wrapper
                    }
                >

                    {/* =================================================
                        LOGO
                    ================================================= */}

                    <a
                        href="#inicio"
                        className={
                            styles.logoLink
                        }
                        onClick={
                            handleMenuClose
                        }
                        aria-label="Ir al inicio"
                    >

                        <Logo />

                    </a>


                    {/* =================================================
                        NAVEGACIÓN DESKTOP
                    ================================================= */}

                    <nav
                        className={
                            styles.nav
                        }
                        aria-label="Navegación principal"
                    >

                        <ul
                            className={
                                styles.menu
                            }
                        >

                            {headerData.menu.map(
                                (item) => (

                                    <li
                                        key={
                                            item.id
                                        }
                                    >

                                        <a
                                            href={
                                                item.href
                                            }
                                            onClick={
                                                handleMenuClose
                                            }
                                        >
                                            {
                                                item.title
                                            }
                                        </a>

                                    </li>

                                )
                            )}

                        </ul>

                    </nav>


                    {/* =================================================
                        BOTÓN HAMBURGUESA
                    ================================================= */}

                    <button
                        type="button"
                        className={
                            styles.menuButton
                        }
                        onClick={
                            handleMenuToggle
                        }
                        aria-label={
                            menuOpen
                                ? "Cerrar menú"
                                : "Abrir menú"
                        }
                        aria-expanded={
                            menuOpen
                        }
                        aria-controls="mobile-navigation"
                    >

                        <span></span>
                        <span></span>
                        <span></span>

                    </button>

                </div>


                {/* =================================================
                    MENÚ MÓVIL
                ================================================= */}

                <div
                    id="mobile-navigation"
                    className={`
                        ${styles.mobileMenu}
                        ${
                            menuOpen
                                ? styles.mobileMenuOpen
                                : ""
                        }
                    `}
                    aria-hidden={
                        !menuOpen
                    }
                >

                    <nav
                        aria-label="Navegación móvil"
                    >

                        <ul>

                            {headerData.menu.map(
                                (item) => (

                                    <li
                                        key={
                                            item.id
                                        }
                                    >

                                        <a
                                            href={
                                                item.href
                                            }
                                            onClick={
                                                handleMenuClose
                                            }
                                            tabIndex={
                                                menuOpen
                                                    ? 0
                                                    : -1
                                            }
                                        >
                                            {
                                                item.title
                                            }
                                        </a>

                                    </li>

                                )
                            )}

                        </ul>

                    </nav>

                </div>

            </Container>

        </header>
    );
}


export default Header;