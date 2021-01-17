let express = require('express')
let userRouter = require('../routers')
let app = express();
app.use(express.json());
export const port = 3000;
// 起个环境变量：在build的时候传入
//dockercompose
app.use('/users', userRouter);

app.use(function (req, res,) {
  res.status(404).send("Sorry can't find that!")
})

app.listen(port, console.log(`baby I'm ready on port ${port}`));
