"use strict";
cc._RF.push(module, 'c2423E5XipNaohocSEjYFtm', 'PhysicController');
// Scripts/PhysicController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PhysicController = /** @class */ (function (_super) {
    __extends(PhysicController, _super);
    function PhysicController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhysicController.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
    };
    PhysicController = __decorate([
        ccclass
    ], PhysicController);
    return PhysicController;
}(cc.Component));
exports.default = PhysicController;

cc._RF.pop();