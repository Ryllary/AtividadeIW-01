const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'cadastro_clientes'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL server.');
});

module.exports = connection;
