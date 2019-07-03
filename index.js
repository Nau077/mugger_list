const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// bodyParser используется в качестве middleWare
const app = express();

// метод позволяет конектиться к базе данных
mongoose.connect('mongodb://localhost/muggers-db', { useNewUrlParser: true });
// метод use позволяет вызывать промежуточные функции
// эти функции вызываются всякий раз, когда проходит
// запрос на сервер
app.use(bodyParser.json());
app.use('/api', require('./api'));


app.get('/api', (req, res) => {
    res.send({method: 'GET'})
});

app.listen(4000, () => {
    console.info("server is listening")
});

//  ./mongod.exe