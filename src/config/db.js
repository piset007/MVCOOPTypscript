
import mysql2 from 'mysql2/promise';

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project_test_db',
});

export { pool as db };