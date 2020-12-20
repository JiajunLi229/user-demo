const express = require('express')
const app = express()
const port = 8889;

app.param('user', function (req,res,next) {
    if (req.params.user === "dick") {
        console.log("you find the secret!");
    } else {
        next();
    }

})

app.get("/book/:user", function (req,res){
    console.log(req.params.user);
    res.send("fuck");
})

// app.get('/books/:id', ((req, res) => {
//     console.log("fuck"+req.params.id);
//     res.send("fuck");
// }))

app.listen(port,function () {
    console.log('im fucking ready')
})