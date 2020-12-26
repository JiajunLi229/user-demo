let express = require('express')
let bookRouter = require('./routers')
let userRouter = require('./routers')
let app = express();

let port = 3000;
app.use('/book',bookRouter);

app.listen(port, console.log(`baby I'm ready on port ${port}`));