const mysql = require('mysql2/promise');

/*const dbConfig = {
    host: 'localhost',
    user: 'root',        
    password: '001001', 
    database: 'pedbox_temas',   
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};*/

const dbConfig = {
  host: process.env.MYSQLHOST || 'localhost',
  user: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || '',
  database: process.env.MYSQLDATABASE || 'pedbox_temas',
  port: process.env.MYSQLPORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const createConnection = async () => {
    
    const database = mysql.createPool(dbConfig);
    return database.getConnection(); 
};

module.exports = { createConnection };
