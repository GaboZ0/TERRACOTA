import styles from "./Header.module.css";

import Button from "../Button";
import Container from "../Container";
import Logo from "../Logo";

import headerData from "./headerData";
import useScroll from "../../hooks/useScroll";

function Header() {

    const isScrolled = useScroll();

    return (

        <header
            className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
        >

            <Container>

                <div className={styles.wrapper}>

                    <a
                        href="#inicio"
                        className={styles.logoLink}
                    >
                        <Logo />
                    </a>

                    <nav className={styles.nav}>

                        <ul className={styles.menu}>

                            {headerData.menu.map((item) => (

                                <li key={item.id}>

                                    <a href={item.href}>

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

                </div>

            </Container>

        </header>

    );

}

export default Header;