const { getCar } = require ("./carService.ts");

const express = require('express')
const app = express()
const port = 8888;
//
// app.param('userId', function (req,res,next) {
//     if (req.params.carId) {
//         console.log("you find the secret!");
//     } else {
//         next();
//     }
// })

app.get('/car/', function (req, res) {
    console.log(getCar());
    res.send(getCar());
})

app.listen(port,function () {
    console.log('im fucking ready')
})