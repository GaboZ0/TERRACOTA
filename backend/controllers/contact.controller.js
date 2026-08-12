function handleContact(req, res) {

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
        email.trim().toLowerCase();

    const cleanCompany =
        typeof company === "string"
            ? company.trim()
            : "";

    const cleanMessage =
        message.trim();


    /* =====================================================
       VALIDACIÓN NOMBRE
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
       VALIDACIÓN EMAIL
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
       VALIDACIÓN EMPRESA
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
       VALIDACIÓN MENSAJE
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
       PRUEBA TEMPORAL
    ===================================================== */

    console.log(
        "Nueva consulta de contacto:",
        {
            name: cleanName,
            email: cleanEmail,
            company: cleanCompany,
            message: cleanMessage,
        }
    );


    return res.status(200).json({
        success: true,
        message:
            "Consulta recibida correctamente.",
    });

}


/* =========================================================
   EXPORTACIÓN
========================================================= */

module.exports = handleContact;