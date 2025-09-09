const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'root',        
    password: '001001', 
    database: 'pedbox_temas',   
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};


const createConnection = async () => {
    
    const database = mysql.createPool(dbConfig);
    return database.getConnection(); 
};

module.exports = { createConnection };
