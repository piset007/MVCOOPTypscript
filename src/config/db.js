
import mysql2 from 'mysql2/promise';

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project_test_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export { pool as db };