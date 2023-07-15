/**
 * roots - Your webapp
 * © 2023 Brian Gormanly
 *
 */

const { Pool, Client } = require( 'pg' );

const pool = new Pool( { 
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ssl: process.env.PG_SSL === "true" ? true : false
} );


module.exports = {
    pool: () => pool,
    query: ( text, params ) => pool.query( text, params ),
};

