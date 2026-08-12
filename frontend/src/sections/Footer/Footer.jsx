import styles from "./Footer.module.css";

import Container from "../../components/Container";
import Logo from "../../components/Logo";

import footerData from "./footerData";


function Footer() {

    const currentYear =
        new Date().getFullYear();


    return (

        <footer
            className={styles.footer}
            aria-labelledby="footer-title"
        >

            <h2
                id="footer-title"
                className={styles.visuallyHidden}
            >
                Pie de página de Terracota Software
            </h2>


            <Container>

                <div
                    className={styles.main}
                >

                    <div
                        className={styles.brand}
                    >

                        <a
                            href="#inicio"
                            className={
                                styles.logoLink
                            }
                            aria-label="Ir al inicio"
                        >
                            <Logo />
                        </a>


                        <p>
                            {
                                footerData.description
                            }
                        </p>


                        <span
                            className={
                                styles.location
                            }
                        >
                            {
                                footerData.location
                            }
                        </span>

                    </div>


                    <div
                        className={styles.column}
                    >

                        <h3>
                            Navegación
                        </h3>


                        <ul>

                            {
                                footerData.navigation.map(
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
                                            >
                                                {
                                                    item.title
                                                }
                                            </a>

                                        </li>

                                    )
                                )
                            }

                        </ul>

                    </div>


                    <div
                        className={styles.column}
                    >

                        <h3>
                            Servicios
                        </h3>


                        <ul>

                            {
                                footerData.services.map(
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
                                            >
                                                {
                                                    item.title
                                                }
                                            </a>

                                        </li>

                                    )
                                )
                            }

                        </ul>

                    </div>


                    <div
                        className={styles.column}
                    >

                        <h3>
                            Contacto
                        </h3>


                        <ul>

                            {
                                footerData.contact.map(
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
                                            >
                                                {
                                                    item.title
                                                }
                                            </a>

                                        </li>

                                    )
                                )
                            }

                        </ul>

                    </div>

                </div>


                <div
                    className={styles.bottom}
                >

                    <span>
                        © {currentYear}
                        {" "}
                        Terracota Software
                    </span>


                    <span>
                        Todos los derechos reservados.
                    </span>

                </div>

            </Container>

        </footer>
    );
}


export default Footer;