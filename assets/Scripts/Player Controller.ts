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

    private _isSwing = false;
    private _distanceJoint:cc.DistanceJoint;

    onLoad(){
        if(this._touchSensor == null){
            this._touchSensor = cc.find("Canvas/Main Camera/Touch Sensor").getComponent(TouchSensorController);
        }
        this._distanceJoint = this.node.getComponent(cc.DistanceJoint);
    }

    update(dt){
        if(this._touchSensor.getIsTouching()){
            this.onSwing(this._anchor);
            cc.log("SWING");
        }
        else{
            this.onRelease();
            cc.log("RELEASE");
        }
        cc.log(this.node.getComponent(cc.DistanceJoint));
    }

    private lookAtObject(target){
        let direction = target.position.addSelf(this.node.position.mulSelf(-1));
        let angle = Math.atan2(direction.x, direction.y) * 180 / Math.PI; 
        this.node.rotation = angle;
    }

    private onSwing(anchor:cc.Node){
        this.lookAtObject(anchor);
        if(this._isSwing)
            return;
        this._isSwing = true;
        this._distanceJoint.enabled = true;
        this._distanceJoint.connectedBody = anchor.getComponent(cc.RigidBody);

        let currentPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
        let anchorPos = anchor.parent.convertToWorldSpaceAR(anchor.position);

        this._distanceJoint.distance = currentPos.addSelf(anchorPos.mulSelf(-1)).mag();
        this._distanceJoint.apply();
    }

    private onRelease(){
        if(!this._isSwing)
            return;
        this._isSwing = false;

        this._distanceJoint.enabled = false;
        
        this._distanceJoint.connectedBody = null;
        this._distanceJoint.apply();
    }
}
