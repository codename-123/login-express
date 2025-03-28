// 모듈
const express = require('express');
const app = express();
const bodyParser = require("body-parser")

// 라우팅
const home = require('./src/routes/home')

app.set("views", "./src/views")
app.set("view engine", "ejs")
app.use(express.static(__dirname+'/src/public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', home)

app.listen(3000, () => {
    console.log('서버 가능');
})