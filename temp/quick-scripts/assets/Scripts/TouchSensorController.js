(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/TouchSensorController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5995eWM+mdGgrYbwi4HCX/d', 'TouchSensorController', __filename);
// Scripts/TouchSensorController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchSensorController = /** @class */ (function (_super) {
    __extends(TouchSensorController, _super);
    function TouchSensorController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mainCanvas = null;
        _this._isTouching = false;
        _this._isForcedToReleased = false;
        return _this;
    }
    TouchSensorController.prototype.onLoad = function () {
        this.node.setContentSize(this._mainCanvas.designResolution.width, this._mainCanvas.designResolution.height);
        this.node.x = this.node.y = 0;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onRelease, this);
    };
    TouchSensorController.prototype.update = function (dt) {
        if (this._isForcedToReleased) {
            this._isTouching = false;
            return;
        }
    };
    TouchSensorController.prototype.onTouch = function () {
        this._isTouching = true;
    };
    TouchSensorController.prototype.onRelease = function () {
        if (this._isForcedToReleased)
            this._isForcedToReleased = false;
        this._isTouching = false;
    };
    TouchSensorController.prototype.getIsTouching = function () {
        return this._isTouching;
    };
    TouchSensorController.prototype.forceToRelease = function () {
        this._isForcedToReleased = true;
    };
    __decorate([
        property({
            type: cc.Canvas,
            visible: true
        })
    ], TouchSensorController.prototype, "_mainCanvas", void 0);
    __decorate([
        property
    ], TouchSensorController.prototype, "_isTouching", void 0);
    __decorate([
        property
    ], TouchSensorController.prototype, "_isForcedToReleased", void 0);
    TouchSensorController = __decorate([
        ccclass
    ], TouchSensorController);
    return TouchSensorController;
}(cc.Component));
exports.default = TouchSensorController;

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
        //# sourceMappingURL=TouchSensorController.js.map
        