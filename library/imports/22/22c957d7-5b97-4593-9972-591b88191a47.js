"use strict";
cc._RF.push(module, '22c95fXW5dFk5lyWRuIGRpH', 'Player Controller');
// Scripts/Player Controller.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TouchSensorController_1 = require("./TouchSensorController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._anchor = null;
        _this._touchSensor = null;
        _this._isHanging = false;
        return _this;
    }
    PlayerController.prototype.onLoad = function () {
        if (this._touchSensor == null) {
            this._touchSensor = cc.find("Canvas/Main Camera/Touch Sensor").getComponent(TouchSensorController_1.default);
        }
    };
    PlayerController.prototype.update = function (dt) {
        if (this._touchSensor.getIsTouching()) {
            this.lootAtObject(this._anchor);
            this.hangOnAnAnchor(this._anchor.getComponent(cc.RigidBody));
        }
        // cc.log(this.node.getComponent(cc.DistanceJoint).distance);
        cc.log(this._isHanging);
    };
    PlayerController.prototype.lootAtObject = function (target) {
        var direction = target.position.addSelf(this.node.position.mulSelf(-1));
        var angle = Math.atan2(direction.x, direction.y) * 180 / Math.PI;
        this.node.rotation = angle;
    };
    PlayerController.prototype.hangOnAnAnchor = function (anchor) {
        if (this._isHanging)
            return;
        this._isHanging = true;
        var distanceJoint = this.node.getComponent(cc.DistanceJoint);
        distanceJoint.connectedBody = anchor;
        distanceJoint.distance = 300;
        distanceJoint.dampingRatio = 1;
    };
    __decorate([
        property({
            visible: true,
            type: cc.Node
        })
    ], PlayerController.prototype, "_anchor", void 0);
    __decorate([
        property({
            visible: true,
            type: TouchSensorController_1.default
        })
    ], PlayerController.prototype, "_touchSensor", void 0);
    PlayerController = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

cc._RF.pop();