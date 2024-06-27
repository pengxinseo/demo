import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: '121.40.216.79',
    user: 'iuu',
    password: 'iuu',
    database: 'iuu',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;