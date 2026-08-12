require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const contactRoutes =
    require("./routes/contact.routes");


const app = express();


const PORT =
    Number(process.env.PORT) || 5000;


const FRONTEND_URL =
    process.env.FRONTEND_URL ||
    "http://localhost:5173";


/* =========================================================
   SEGURIDAD BÁSICA
========================================================= */

app.disable(
    "x-powered-by"
);


app.use(
    helmet()
);


/* =========================================================
   CORS
========================================================= */

app.use(
    cors({
        origin:
            FRONTEND_URL,

        methods: [
            "GET",
            "POST",
            "OPTIONS",
        ],

        allowedHeaders: [
            "Content-Type",
        ],
    })
);


/* =========================================================
   BODY PARSER
========================================================= */

app.use(
    express.json({
        limit: "10kb",
    })
);


/* =========================================================
   RUTAS
========================================================= */

app.use(
    "/api",
    contactRoutes
);


/* =========================================================
   HEALTH CHECK
========================================================= */

app.get(
    "/api/health",
    (req, res) => {

        res.status(200).json({
            success: true,

            message:
                "Backend TERRACOTA funcionando correctamente.",
        });

    }
);


/* =========================================================
   RUTA NO ENCONTRADA
========================================================= */

app.use(
    (req, res) => {

        res.status(404).json({
            success: false,

            message:
                "Ruta no encontrada.",
        });

    }
);


/* =========================================================
   MANEJO DE ERRORES
========================================================= */

app.use(
    (
        error,
        req,
        res,
        next
    ) => {

        console.error(
            "Error interno:",
            error
        );


        if (
            res.headersSent
        ) {

            return next(error);

        }


        return res.status(500).json({
            success: false,

            message:
                "Ocurrió un error interno en el servidor.",
        });

    }
);


/* =========================================================
   INICIO DEL SERVIDOR
========================================================= */

app.listen(
    PORT,
    () => {

        console.log(
            `TERRACOTA backend ejecutándose en http://localhost:${PORT}`
        );

    }
);