const {
    pool,
} = require("../database/connection");


/* =========================================================
   CONTROLADOR DE CONTACTO
========================================================= */

async function handleContact(
    req,
    res
) {

    const {
        name,
        email,
        company,
        message,
        privacy,
    } = req.body;


    /* =====================================================
       VALIDACIÓN DE TIPOS
    ===================================================== */

    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof message !== "string"
    ) {

        return res.status(400).json({
            success: false,
            message:
                "Los datos enviados no son válidos.",
        });

    }


    /* =====================================================
       LIMPIEZA
    ===================================================== */

    const cleanName =
        name.trim();

    const cleanEmail =
        email
            .trim()
            .toLowerCase();

    const cleanCompany =
        typeof company === "string"
            ? company.trim()
            : "";

    const cleanMessage =
        message.trim();


    /* =====================================================
       VALIDACIÓN DEL NOMBRE
    ===================================================== */

    if (
        cleanName.length < 2 ||
        cleanName.length > 100
    ) {

        return res.status(400).json({
            success: false,
            message:
                "El nombre debe tener entre 2 y 100 caracteres.",
        });

    }


    /* =====================================================
       VALIDACIÓN DEL EMAIL
    ===================================================== */

    if (
        cleanEmail.length > 254 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            cleanEmail
        )
    ) {

        return res.status(400).json({
            success: false,
            message:
                "El email no es válido.",
        });

    }


    /* =====================================================
       VALIDACIÓN DE EMPRESA
    ===================================================== */

    if (
        cleanCompany.length > 150
    ) {

        return res.status(400).json({
            success: false,
            message:
                "El nombre de la empresa es demasiado largo.",
        });

    }


    /* =====================================================
       VALIDACIÓN DEL MENSAJE
    ===================================================== */

    if (
        cleanMessage.length < 10 ||
        cleanMessage.length > 5000
    ) {

        return res.status(400).json({
            success: false,
            message:
                "El mensaje debe tener entre 10 y 5000 caracteres.",
        });

    }


    /* =====================================================
       PRIVACIDAD
    ===================================================== */

    if (
        privacy !== true
    ) {

        return res.status(400).json({
            success: false,
            message:
                "Es necesario aceptar la política de privacidad.",
        });

    }


    /* =====================================================
       GUARDAR EN POSTGRESQL
    ===================================================== */

    try {

        const result =
            await pool.query(
                `
                INSERT INTO contact_messages (
                    name,
                    email,
                    company,
                    message
                )
                VALUES (
                    $1,
                    $2,
                    $3,
                    $4
                )
                RETURNING
                    id,
                    created_at
                `,
                [
                    cleanName,
                    cleanEmail,
                    cleanCompany || null,
                    cleanMessage,
                ]
            );


        /* =================================================
           RESPUESTA
        ================================================= */

        return res.status(200).json({
            success: true,

            message:
                "Consulta recibida correctamente.",

            id:
                result.rows[0].id,
        });

    } catch (error) {

        console.error(
            "Error guardando la consulta de contacto:",
            error
        );


        return res.status(500).json({
            success: false,
            message:
                "No pudimos guardar tu consulta. Intentá nuevamente.",
        });

    }

}


module.exports = handleContact;