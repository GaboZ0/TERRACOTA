import { useState } from "react";

import styles from "./Contact.module.css";

import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

import contactData from "./contactData";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
        privacy: false
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {

        const { name, value, type, checked } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: type === "checkbox" ? checked : value
        }));

        setSubmitted(false);
    }

    function handleSubmit(event) {

        event.preventDefault();

        setSubmitted(true);

    }

    return (
        <section
            id="contacto"
            className={styles.contact}
        >
            <Container>

                <SectionTitle
                    eyebrow={contactData.eyebrow}
                    title={contactData.title}
                    description={contactData.description}
                />

                <div className={styles.layout}>

                    <div className={styles.info}>

                        <div className={styles.infoIntro}>

                            <span className={styles.label}>
                                HABLEMOS
                            </span>

                            <h3>
                                Estamos listos para
                                <br />
                                escuchar tu idea.
                            </h3>

                            <p>
                                Contanos qué necesitás y
                                encontremos juntos la mejor
                                solución tecnológica para tu
                                proyecto.
                            </p>

                        </div>

                        <div className={styles.details}>

                            {contactData.details.map((detail) => (

                                <div
                                    key={detail.id}
                                    className={styles.detail}
                                >

                                    <span className={styles.detailIcon}>
                                        {detail.icon}
                                    </span>

                                    <div>

                                        <span className={styles.detailLabel}>
                                            {detail.label}
                                        </span>

                                        <span className={styles.detailValue}>
                                            {detail.value}
                                        </span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >

                        <div className={styles.fieldGrid}>

                            <div className={styles.field}>

                                <label htmlFor="name">
                                    Nombre
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Tu nombre"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className={styles.field}>

                                <label htmlFor="email">
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="tu@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>

                        <div className={styles.field}>

                            <label htmlFor="company">
                                Empresa
                                <span>Opcional</span>
                            </label>

                            <input
                                id="company"
                                name="company"
                                type="text"
                                placeholder="Nombre de tu empresa"
                                value={formData.company}
                                onChange={handleChange}
                            />

                        </div>

                        <div className={styles.field}>

                            <label htmlFor="message">
                                Mensaje
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Contanos brevemente sobre tu proyecto..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <label className={styles.checkbox}>

                            <input
                                type="checkbox"
                                name="privacy"
                                checked={formData.privacy}
                                onChange={handleChange}
                                required
                            />

                            <span>
                                Acepto que Terracota Software
                                utilice estos datos para responder
                                mi consulta.
                            </span>

                        </label>

                        <button
                            type="submit"
                            className={styles.submit}
                        >
                            Enviar mensaje
                        </button>

                        {submitted && (

                            <p className={styles.demoMessage}>
                                El formulario funciona correctamente.
                                El envío real se configurará en el
                                siguiente paso.
                            </p>

                        )}

                    </form>

                </div>

            </Container>
        </section>
    );
}

export default Contact;