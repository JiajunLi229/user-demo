let express = require('express')
let userRouter = require('./routers')
let app = express();
app.use(express.json());
export const port = 3000;

app.use('/user', userRouter);
app.listen(port, console.log(`baby I'm ready on port ${port}`));
