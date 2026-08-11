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
        privacy: false,
    });

    const [errors, setErrors] = useState({});

    const [submitted, setSubmitted] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);


    function handleChange(event) {

        const {
            name,
            value,
            type,
            checked,
        } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));

        setErrors((previous) => ({
            ...previous,
            [name]: "",
        }));

        setSubmitted(false);
    }


    function validateForm() {

        const newErrors = {};


        if (!formData.name.trim()) {

            newErrors.name =
                "Por favor, ingresá tu nombre.";

        } else if (formData.name.trim().length < 2) {

            newErrors.name =
                "El nombre debe tener al menos 2 caracteres.";
        }


        if (!formData.email.trim()) {

            newErrors.email =
                "Por favor, ingresá tu email.";

        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                formData.email.trim()
            )
        ) {

            newErrors.email =
                "Ingresá un email válido.";
        }


        if (!formData.message.trim()) {

            newErrors.message =
                "Por favor, escribí tu mensaje.";

        } else if (formData.message.trim().length < 10) {

            newErrors.message =
                "El mensaje debe tener al menos 10 caracteres.";
        }


        if (!formData.privacy) {

            newErrors.privacy =
                "Necesitamos tu autorización para responder la consulta.";
        }


        return newErrors;
    }


    async function handleSubmit(event) {

        event.preventDefault();

        setSubmitted(false);

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {

            setErrors(validationErrors);

            return;
        }


        setErrors({});

        setIsSubmitting(true);


        /*
         * En este momento solamente simulamos el envío.
         *
         * En el siguiente paso conectaremos este formulario
         * con un servicio real de forma segura.
         */

        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });


        setIsSubmitting(false);

        setSubmitted(true);


        setFormData({
            name: "",
            email: "",
            company: "",
            message: "",
            privacy: false,
        });
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

                                    <span
                                        className={styles.detailIcon}
                                    >
                                        {detail.icon}
                                    </span>

                                    <div>

                                        <span
                                            className={styles.detailLabel}
                                        >
                                            {detail.label}
                                        </span>

                                        <span
                                            className={styles.detailValue}
                                        >
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
                        noValidate
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
                                    className={
                                        errors.name
                                            ? styles.inputError
                                            : ""
                                    }
                                    aria-invalid={
                                        Boolean(errors.name)
                                    }
                                    aria-describedby={
                                        errors.name
                                            ? "name-error"
                                            : undefined
                                    }
                                />

                                {errors.name && (
                                    <span
                                        id="name-error"
                                        className={styles.error}
                                    >
                                        {errors.name}
                                    </span>
                                )}

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
                                    className={
                                        errors.email
                                            ? styles.inputError
                                            : ""
                                    }
                                    aria-invalid={
                                        Boolean(errors.email)
                                    }
                                    aria-describedby={
                                        errors.email
                                            ? "email-error"
                                            : undefined
                                    }
                                />

                                {errors.email && (
                                    <span
                                        id="email-error"
                                        className={styles.error}
                                    >
                                        {errors.email}
                                    </span>
                                )}

                            </div>

                        </div>


                        <div className={styles.field}>

                            <label htmlFor="company">

                                Empresa

                                <span>
                                    Opcional
                                </span>

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
                                className={
                                    errors.message
                                        ? styles.inputError
                                        : ""
                                }
                                aria-invalid={
                                    Boolean(errors.message)
                                }
                                aria-describedby={
                                    errors.message
                                        ? "message-error"
                                        : undefined
                                }
                            />

                            {errors.message && (
                                <span
                                    id="message-error"
                                    className={styles.error}
                                >
                                    {errors.message}
                                </span>
                            )}

                        </div>


                        <label className={styles.checkbox}>

                            <input
                                type="checkbox"
                                name="privacy"
                                checked={formData.privacy}
                                onChange={handleChange}
                                aria-invalid={
                                    Boolean(errors.privacy)
                                }
                                aria-describedby={
                                    errors.privacy
                                        ? "privacy-error"
                                        : undefined
                                }
                            />

                            <span>
                                Acepto que Terracota Software
                                utilice estos datos para responder
                                mi consulta.
                            </span>

                        </label>

                        {errors.privacy && (
                            <span
                                id="privacy-error"
                                className={styles.error}
                            >
                                {errors.privacy}
                            </span>
                        )}


                        <button
                            type="submit"
                            className={styles.submit}
                            disabled={isSubmitting}
                        >

                            {isSubmitting
                                ? "Enviando..."
                                : "Enviar mensaje"
                            }

                        </button>


                        {submitted && (

                            <p className={styles.successMessage}>
                                ¡Gracias por tu consulta!
                                <br />
                                Recibimos correctamente tus datos.
                            </p>

                        )}

                    </form>

                </div>

            </Container>

        </section>
    );
}

export default Contact;