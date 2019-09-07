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
        _this._isSwing = false;
        return _this;
    }
    PlayerController.prototype.onLoad = function () {
        if (this._touchSensor == null) {
            this._touchSensor = cc.find("Canvas/Main Camera/Touch Sensor").getComponent(TouchSensorController_1.default);
        }
        this._distanceJoint = this.node.getComponent(cc.DistanceJoint);
    };
    PlayerController.prototype.update = function (dt) {
        if (this._touchSensor.getIsTouching()) {
            this.onSwing(this._anchor);
            cc.log("SWING");
        }
        else {
            this.onRelease();
            cc.log("RELEASE");
        }
        cc.log(this.node.getComponent(cc.DistanceJoint));
    };
    PlayerController.prototype.lookAtObject = function (target) {
        var direction = target.position.addSelf(this.node.position.mulSelf(-1));
        var angle = Math.atan2(direction.x, direction.y) * 180 / Math.PI;
        this.node.rotation = angle;
    };
    PlayerController.prototype.onSwing = function (anchor) {
        this.lookAtObject(anchor);
        if (this._isSwing)
            return;
        this._isSwing = true;
        this._distanceJoint.enabled = true;
        this._distanceJoint.connectedBody = anchor.getComponent(cc.RigidBody);
        var currentPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
        var anchorPos = anchor.parent.convertToWorldSpaceAR(anchor.position);
        this._distanceJoint.distance = currentPos.addSelf(anchorPos.mulSelf(-1)).mag();
        this._distanceJoint.apply();
    };
    PlayerController.prototype.onRelease = function () {
        if (!this._isSwing)
            return;
        this._isSwing = false;
        this._distanceJoint.enabled = false;
        this._distanceJoint.connectedBody = null;
        this._distanceJoint.apply();
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