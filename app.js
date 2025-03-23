// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require('./routes/home')

app.set("views", "./views")
app.set("view engine", "ejs")

app.use('/', home)

app.listen(3000, () => {
    console.log('서버 가능');
})