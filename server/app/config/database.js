module.exports = (mongoose) => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};


// const mysql = require('mysql2')
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE_NAME
// })

// const connected = connection.connect()

// if (!connected){
//   console.log("Error connecting to database")
// } else {
//   console.log("Database connected successfully")
// }

// connection.end()
