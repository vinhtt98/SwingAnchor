import TouchSensorController from "./TouchSensorController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {
    @property({
        visible:true,
        type:cc.Node
    })
    private _anchor:cc.Node = null;

    @property({
        visible:true,
        type:TouchSensorController
    })
    private _touchSensor:TouchSensorController = null;

    private _isHanging = false;

    onLoad(){
        if(this._touchSensor == null){
            this._touchSensor = cc.find("Canvas/Main Camera/Touch Sensor").getComponent(TouchSensorController);
        }
    }

    update(dt){
        if(this._touchSensor.getIsTouching()){
            this.lootAtObject(this._anchor);
            this.hangOnAnAnchor(this._anchor.getComponent(cc.RigidBody));
        }
        // cc.log(this.node.getComponent(cc.DistanceJoint).distance);
        cc.log(this._isHanging);
    }

    private lootAtObject(target){
        let direction = target.position.addSelf(this.node.position.mulSelf(-1));
        let angle = Math.atan2(direction.x, direction.y) * 180 / Math.PI; 
        this.node.rotation = angle;
    }

    private hangOnAnAnchor(anchor){
        if(this._isHanging)
            return;
        this._isHanging = true;
        let distanceJoint = this.node.getComponent(cc.DistanceJoint);
        distanceJoint.connectedBody = anchor;
        distanceJoint.distance = 300;
        distanceJoint.dampingRatio = 1;
    }
}
