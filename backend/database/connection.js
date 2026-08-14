const { Pool } = require("pg");


const pool = new Pool({
    host:
        process.env.DB_HOST,

    port:
        Number(process.env.DB_PORT) || 5432,

    database:
        process.env.DB_NAME,

    user:
        process.env.DB_USER,

    password:
        process.env.DB_PASSWORD,

    max:
        10,

    idleTimeoutMillis:
        30000,

    connectionTimeoutMillis:
        5000,
});


async function testDatabaseConnection() {

    const client =
        await pool.connect();

    try {

        const result =
            await client.query(
                "SELECT NOW() AS current_time"
            );


        return result.rows[0];

    } finally {

        client.release();

    }

}


module.exports = {
    pool,
    testDatabaseConnection,
};