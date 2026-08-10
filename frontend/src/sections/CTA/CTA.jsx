import styles from "./CTA.module.css";

import Container from "../../components/Container";
import Button from "../../components/Button";

function CTA() {
    return (
        <section
            id="contacto-cta"
            className={styles.cta}
        >
            <Container>

                <div className={styles.content}>

                    <span className={styles.eyebrow}>
                        ¿TENÉS UN PROYECTO EN MENTE?
                    </span>

                    <h2>
                        Transformemos tu idea
                        <br />
                        en una solución real.
                    </h2>

                    <p>
                        Hablemos sobre tu desafío y encontremos
                        juntos una solución tecnológica que genere
                        valor para tu negocio.
                    </p>

                    <Button href="#contacto">
                        Hablemos
                    </Button>

                </div>

            </Container>
        </section>
    );
}

export default CTA;