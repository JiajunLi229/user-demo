const express = require('express');
const app = express();
app.param('id', function (req, res, next, id) {
    if(1337 === req.params.id){
        next();
    }
    else{
        res.sendStatus(404);
    }
});
app.get('/user/:id', function (req, res) {
   console.log(req.params);

});

app.listen(3000, function () {
    console.log('Ready');
});