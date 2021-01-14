const mysql=require('mysql2')//llamo a mi conector de base datos mysql
const conexion=mysql.createConnection({
    host:'localhost',
    database:'star_wars_api',
    user:'root',
    password: '123456789',
});
conexion.connect(function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('db is connected');
    }
});
module.exports = conexion;
