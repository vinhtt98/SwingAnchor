(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/PhysicController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c2423E5XipNaohocSEjYFtm', 'PhysicController', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=PhysicController.js.map
        