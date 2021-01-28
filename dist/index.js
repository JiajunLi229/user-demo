"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = void 0;
const connection_1 = require("./repositories/connection");
let express = require("express");
let userRouter = require("./routers");
let app = express();
app.use(express.json());
exports.port = process.env.PORT || 3000;
app.use("/users", userRouter);
app.use(function (req, res) {
  res.status(404).send("Sorry can't find that!");
});
app.listen(exports.port, console.log(`baby I'm ready on port ${exports.port}`));
(async () => {
  await connection_1.connectDB();
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMERBQXNEO0FBRXRELElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUNoQyxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDckMsSUFBSSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNYLFFBQUEsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUM3QyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUU5QixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBUSxFQUFFLEdBQVE7SUFDbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtBQUNoRCxDQUFDLENBQUMsQ0FBQTtBQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLFlBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVoRSxDQUFDLEtBQUssSUFBSSxFQUFFO0lBQ1YsTUFBTSxzQkFBUyxFQUFFLENBQUM7QUFDcEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9
