"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const typeorm_1 = require("typeorm");
let Users = class Users {};
__decorate(
  [typeorm_1.PrimaryColumn(), __metadata("design:type", String)],
  Users.prototype,
  "id",
  void 0
);
__decorate(
  [typeorm_1.Column(), __metadata("design:type", String)],
  Users.prototype,
  "name",
  void 0
);
__decorate(
  [typeorm_1.Column(), __metadata("design:type", Number)],
  Users.prototype,
  "age",
  void 0
);
Users = __decorate([typeorm_1.Entity()], Users);
exports.Users = Users;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW50aXR5L1VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUF3RDtBQUd4RCxJQUFhLEtBQUssR0FBbEIsTUFBYSxLQUFLO0NBY2pCLENBQUE7QUFWRztJQUZDLHVCQUFhLEVBQUU7O2lDQUVMO0FBSVg7SUFGQyxnQkFBTSxFQUFFOzttQ0FFSztBQUlkO0lBRkMsZ0JBQU0sRUFBRTs7a0NBRUk7QUFaSixLQUFLO0lBRGpCLGdCQUFNLEVBQUU7R0FDSSxLQUFLLENBY2pCO0FBZFksc0JBQUsifQ==
