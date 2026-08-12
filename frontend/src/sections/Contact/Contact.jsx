import {
    useEffect,
    useRef,
    useState,
} from "react";

import styles from "./Contact.module.css";

import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

import contactData from "./contactData";


function Contact() {

    const API_URL =
        import.meta.env.VITE_API_URL ||
        "http://localhost:5000";


    const [formData, setFormData] =
        useState({
            name: "",
            email: "",
            company: "",
            message: "",
            privacy: false,
        });


    const [errors, setErrors] =
        useState({});


    const [submitted, setSubmitted] =
        useState(false);


    const [isSubmitting, setIsSubmitting] =
        useState(false);


    const [serverError, setServerError] =
        useState("");


    const firstErrorRef =
        useRef(null);


    /* =====================================================
       MANTENER EL FOCO EN EL PRIMER ERROR
    ===================================================== */

    useEffect(() => {

        if (
            firstErrorRef.current &&
            Object.keys(errors).length > 0
        ) {

            firstErrorRef.current.focus();

        }

    }, [errors]);


    /* =====================================================
       CAMBIOS EN LOS CAMPOS
    ===================================================== */

    function handleChange(event) {

        const {
            name,
            value,
            type,
            checked,
        } = event.target;


        setFormData(
            (previous) => ({
                ...previous,

                [name]:
                    type === "checkbox"
                        ? checked
                        : value,
            })
        );


        setErrors(
            (previous) => ({
                ...previous,
                [name]: "",
            })
        );


        setServerError("");
        setSubmitted(false);

    }


    /* =====================================================
       VALIDACIÓN CLIENTE
    ===================================================== */

    function validateForm() {

        const newErrors = {};


        /* Nombre */

        if (
            !formData.name.trim()
        ) {

            newErrors.name =
                "Por favor, ingresá tu nombre.";

        } else if (
            formData.name
                .trim()
                .length < 2
        ) {

            newErrors.name =
                "El nombre debe tener al menos 2 caracteres.";

        }


        /* Email */

        if (
            !formData.email.trim()
        ) {

            newErrors.email =
                "Por favor, ingresá tu email.";

        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(
                    formData.email.trim()
                )
        ) {

            newErrors.email =
                "Ingresá un email válido.";

        }


        /* Mensaje */

        if (
            !formData.message.trim()
        ) {

            newErrors.message =
                "Por favor, escribí tu mensaje.";

        } else if (
            formData.message
                .trim()
                .length < 10
        ) {

            newErrors.message =
                "El mensaje debe tener al menos 10 caracteres.";

        }


        /* Privacidad */

        if (
            !formData.privacy
        ) {

            newErrors.privacy =
                "Necesitamos tu autorización para responder la consulta.";

        }


        return newErrors;

    }


    /* =====================================================
       ENVÍO AL BACKEND
    ===================================================== */

    async function handleSubmit(event) {

        event.preventDefault();


        setSubmitted(false);
        setServerError("");


        const validationErrors =
            validateForm();


        if (
            Object.keys(
                validationErrors
            ).length > 0
        ) {

            setErrors(
                validationErrors
            );

            return;

        }


        setErrors({});
        setIsSubmitting(true);


        try {

            const response =
                await fetch(
                    `${API_URL}/api/contact`,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json",
                        },

                        body: JSON.stringify({
                            name:
                                formData.name.trim(),

                            email:
                                formData.email.trim(),

                            company:
                                formData.company.trim(),

                            message:
                                formData.message.trim(),

                            privacy:
                                formData.privacy,
                        }),
                    }
                );


            let data = null;


            try {

                data =
                    await response.json();

            } catch {

                data = null;

            }


            if (
                !response.ok
            ) {

                throw new Error(
                    data?.message ||
                    "No pudimos enviar tu consulta."
                );

            }


            setSubmitted(true);


            setFormData({
                name: "",
                email: "",
                company: "",
                message: "",
                privacy: false,
            });

        } catch (error) {

            console.error(
                "Error al enviar el formulario:",
                error
            );


            setServerError(
                error instanceof Error
                    ? error.message
                    : "No pudimos enviar tu consulta. Intentá nuevamente."
            );

        } finally {

            setIsSubmitting(false);

        }

    }


    return (

        <section
            id="contacto"
            className={
                styles.contact
            }
            aria-labelledby="contact-form-title"
        >

            <Container>

                <SectionTitle
                    eyebrow={
                        contactData.eyebrow
                    }
                    title={
                        contactData.title
                    }
                    description={
                        contactData.description
                    }
                />


                <div
                    className={
                        styles.layout
                    }
                >

                    {/* =================================================
                        INFORMACIÓN
                    ================================================= */}

                    <div
                        className={
                            styles.info
                        }
                    >

                        <div
                            className={
                                styles.infoIntro
                            }
                        >

                            <span
                                className={
                                    styles.label
                                }
                            >
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


                        <div
                            className={
                                styles.details
                            }
                        >

                            {
                                contactData.details.map(
                                    (detail) => (

                                        <div
                                            key={
                                                detail.id
                                            }
                                            className={
                                                styles.detail
                                            }
                                        >

                                            <span
                                                className={
                                                    styles.detailIcon
                                                }
                                                aria-hidden="true"
                                            >
                                                {
                                                    detail.icon
                                                }
                                            </span>


                                            <div>

                                                <span
                                                    className={
                                                        styles.detailLabel
                                                    }
                                                >
                                                    {
                                                        detail.label
                                                    }
                                                </span>


                                                <span
                                                    className={
                                                        styles.detailValue
                                                    }
                                                >
                                                    {
                                                        detail.value
                                                    }
                                                </span>

                                            </div>

                                        </div>

                                    )
                                )
                            }

                        </div>

                    </div>


                    {/* =================================================
                        FORMULARIO
                    ================================================= */}

                    <form
                        className={
                            styles.form
                        }
                        onSubmit={
                            handleSubmit
                        }
                        noValidate
                        aria-labelledby="contact-form-title"
                        aria-busy={
                            isSubmitting
                        }
                    >

                        <h2
                            id="contact-form-title"
                            className={
                                styles.visuallyHidden
                            }
                        >
                            Formulario de contacto
                        </h2>


                        <div
                            className={
                                styles.fieldGrid
                            }
                        >

                            {/* =========================================
                                NOMBRE
                            ========================================= */}

                            <div
                                className={
                                    styles.field
                                }
                            >

                                <label
                                    htmlFor="name"
                                >
                                    Nombre
                                </label>


                                <input
                                    ref={
                                        errors.name
                                            ? firstErrorRef
                                            : null
                                    }
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    autoCapitalize="words"
                                    inputMode="text"
                                    placeholder="Tu nombre"
                                    value={
                                        formData.name
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className={
                                        errors.name
                                            ? styles.inputError
                                            : ""
                                    }
                                    aria-invalid={
                                        Boolean(
                                            errors.name
                                        )
                                    }
                                    aria-describedby={
                                        errors.name
                                            ? "name-error"
                                            : undefined
                                    }
                                    required
                                />


                                {
                                    errors.name && (
                                        <span
                                            id="name-error"
                                            className={
                                                styles.error
                                            }
                                            role="alert"
                                        >
                                            {
                                                errors.name
                                            }
                                        </span>
                                    )
                                }

                            </div>


                            {/* =========================================
                                EMAIL
                            ========================================= */}

                            <div
                                className={
                                    styles.field
                                }
                            >

                                <label
                                    htmlFor="email"
                                >
                                    Email
                                </label>


                                <input
                                    ref={
                                        errors.email &&
                                        !errors.name
                                            ? firstErrorRef
                                            : null
                                    }
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    inputMode="email"
                                    spellCheck="false"
                                    placeholder="tu@email.com"
                                    value={
                                        formData.email
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className={
                                        errors.email
                                            ? styles.inputError
                                            : ""
                                    }
                                    aria-invalid={
                                        Boolean(
                                            errors.email
                                        )
                                    }
                                    aria-describedby={
                                        errors.email
                                            ? "email-error"
                                            : undefined
                                    }
                                    required
                                />


                                {
                                    errors.email && (
                                        <span
                                            id="email-error"
                                            className={
                                                styles.error
                                            }
                                            role="alert"
                                        >
                                            {
                                                errors.email
                                            }
                                        </span>
                                    )
                                }

                            </div>

                        </div>


                        {/* =================================================
                            EMPRESA
                        ================================================= */}

                        <div
                            className={
                                styles.field
                            }
                        >

                            <label
                                htmlFor="company"
                            >

                                Empresa

                                <span>
                                    Opcional
                                </span>

                            </label>


                            <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="organization"
                                autoCapitalize="words"
                                inputMode="text"
                                placeholder="Nombre de tu empresa"
                                value={
                                    formData.company
                                }
                                onChange={
                                    handleChange
                                }
                            />

                        </div>


                        {/* =================================================
                            MENSAJE
                        ================================================= */}

                        <div
                            className={
                                styles.field
                            }
                        >

                            <label
                                htmlFor="message"
                            >
                                Mensaje
                            </label>


                            <textarea
                                ref={
                                    errors.message &&
                                    !errors.name &&
                                    !errors.email
                                        ? firstErrorRef
                                        : null
                                }
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Contanos brevemente sobre tu proyecto..."
                                value={
                                    formData.message
                                }
                                onChange={
                                    handleChange
                                }
                                className={
                                    errors.message
                                        ? styles.inputError
                                        : ""
                                }
                                aria-invalid={
                                    Boolean(
                                        errors.message
                                    )
                                }
                                aria-describedby={
                                    errors.message
                                        ? "message-error"
                                        : undefined
                                }
                                required
                            />


                            {
                                errors.message && (
                                    <span
                                        id="message-error"
                                        className={
                                            styles.error
                                        }
                                        role="alert"
                                    >
                                        {
                                            errors.message
                                        }
                                    </span>
                                )
                            }

                        </div>


                        {/* =================================================
                            PRIVACIDAD
                        ================================================= */}

                        <div
                            className={
                                styles.checkboxGroup
                            }
                        >

                            <label
                                className={
                                    styles.checkbox
                                }
                            >

                                <input
                                    type="checkbox"
                                    name="privacy"
                                    checked={
                                        formData.privacy
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    aria-invalid={
                                        Boolean(
                                            errors.privacy
                                        )
                                    }
                                    aria-describedby={
                                        errors.privacy
                                            ? "privacy-error"
                                            : undefined
                                    }
                                    required
                                />


                                <span>
                                    Acepto que Terracota Software
                                    utilice estos datos para responder
                                    mi consulta.
                                </span>

                            </label>


                            {
                                errors.privacy && (
                                    <span
                                        id="privacy-error"
                                        className={
                                            styles.error
                                        }
                                        role="alert"
                                    >
                                        {
                                            errors.privacy
                                        }
                                    </span>
                                )
                            }

                        </div>


                        {/* =================================================
                            ERROR DEL SERVIDOR
                        ================================================= */}

                        {
                            serverError && (

                                <p
                                    className={
                                        styles.error
                                    }
                                    role="alert"
                                    aria-live="assertive"
                                >
                                    {
                                        serverError
                                    }
                                </p>

                            )
                        }


                        {/* =================================================
                            BOTÓN
                        ================================================= */}

                        <button
                            type="submit"
                            className={
                                styles.submit
                            }
                            disabled={
                                isSubmitting
                            }
                            aria-disabled={
                                isSubmitting
                            }
                        >

                            {
                                isSubmitting
                                    ? "Enviando..."
                                    : "Enviar mensaje"
                            }

                        </button>


                        {/* =================================================
                            ÉXITO
                        ================================================= */}

                        {
                            submitted && (

                                <p
                                    className={
                                        styles.successMessage
                                    }
                                    role="status"
                                    aria-live="polite"
                                >
                                    ¡Gracias por tu consulta!
                                    <br />
                                    Recibimos correctamente tus datos.
                                </p>

                            )
                        }

                    </form>

                </div>

            </Container>

        </section>
    );
}


export default Contact;