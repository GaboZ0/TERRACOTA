import { useState } from "react";

import styles from "./Header.module.css";

import Button from "../Button";
import Container from "../Container";
import Logo from "../Logo";

import headerData from "./headerData";
import useScroll from "../../hooks/useScroll";

function Header() {

    const isScrolled = useScroll();

    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuToggle() {
        setMenuOpen((previous) => !previous);
    }

    function handleMenuClose() {
        setMenuOpen(false);
    }

    return (
        <header
            className={`${styles.header} ${
                isScrolled ? styles.scrolled : ""
            } ${menuOpen ? styles.menuOpen : ""}`}
        >

            <Container>

                <div className={styles.wrapper}>

                    <a
                        href="#inicio"
                        className={styles.logoLink}
                        onClick={handleMenuClose}
                    >
                        <Logo />
                    </a>

                    <nav className={styles.nav}>

                        <ul className={styles.menu}>

                            {headerData.menu.map((item) => (

                                <li key={item.id}>

                                    <a
                                        href={item.href}
                                        onClick={handleMenuClose}
                                    >
                                        {item.title}
                                    </a>

                                </li>

                            ))}

                        </ul>

                    </nav>

                    <div className={styles.actions}>

                        <Button>
                            Contáctanos
                        </Button>

                    </div>

                    <button
                        type="button"
                        className={styles.menuButton}
                        onClick={handleMenuToggle}
                        aria-label={
                            menuOpen
                                ? "Cerrar menú"
                                : "Abrir menú"
                        }
                        aria-expanded={menuOpen}
                    >

                        <span></span>
                        <span></span>
                        <span></span>

                    </button>

                </div>

                <div
                    className={`${styles.mobileMenu} ${
                        menuOpen
                            ? styles.mobileMenuOpen
                            : ""
                    }`}
                >

                    <nav>

                        <ul>

                            {headerData.menu.map((item) => (

                                <li key={item.id}>

                                    <a
                                        href={item.href}
                                        onClick={handleMenuClose}
                                    >
                                        {item.title}
                                    </a>

                                </li>

                            ))}

                        </ul>

                    </nav>

                    <div className={styles.mobileAction}>

                        <Button>
                            Contáctanos
                        </Button>

                    </div>

                </div>

            </Container>

        </header>
    );
}

export default Header;