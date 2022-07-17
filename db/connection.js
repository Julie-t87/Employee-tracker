const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Petersen@6287',
        database: 'employee_tracker'
    },
    console.log('Connected to the database.')
);
db.connect(err =>{
    if(err)throw err;
})
module.exports=db;