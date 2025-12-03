// Read database configuration from environment variables.
// Common env names: DB_HOST, DB_USER, DB_PW (or DB_PASS), DB_NAME, DB_PORT
const db_host = process.env.DB_HOST || 'localhost';
const db_pw = process.env.DB_PW || process.env.DB_PASS || '';
const db_user = process.env.DB_USER || '';
const db_name = process.env.DB_NAME || '';
const db_port = process.env.DB_PORT || 3306;

// If user is missing, throw a clear error early so it's obvious to the developer.
if (!db_user) {
    const hint = `Please set DB_USER environment variable. Example: DB_USER=root`;
    // Log detailed info for local debugging then throw to fail fast.
    console.error('Database user is not set:', {
        DB_HOST: db_host,
        DB_USER: db_user ? '***' : ''
    });
    throw new Error(`Missing database user. ${hint}`);
}

const exports = {
    HOST: db_host,
    USER: db_user,
    PASSWORD: db_pw,
    DB: db_name,
    PORT: db_port,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

export default exports;
