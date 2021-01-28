"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const typeorm_1 = require("typeorm");
const connectDB = async () => {
  await typeorm_1.createConnection();
};
exports.connectDB = connectDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvY29ubmVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBMkM7QUFFcEMsTUFBTSxTQUFTLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDbEMsTUFBTSwwQkFBZ0IsRUFBRSxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUZXLFFBQUEsU0FBUyxhQUVwQiJ9
