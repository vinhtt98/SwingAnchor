const {ccclass, property} = cc._decorator;

@ccclass
export default class TouchSensorController extends cc.Component {
    @property({
        type: cc.Canvas,
        visible: true
    })
    private _mainCanvas:cc.Canvas = null;

    @property
    private _isTouching = false;

    @property
    private _isForcedToReleased = false;

    onLoad () {
        this.node.setContentSize(this._mainCanvas.designResolution.width,
                                this._mainCanvas.designResolution.height);
        this.node.x = this.node.y = 0;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onRelease, this);
    }

    update(dt){
        if(this._isForcedToReleased){
            this._isTouching = false;
            return;
        }
    }

    private onTouch() {
        this._isTouching = true;
    }

    private onRelease() {
        if(this._isForcedToReleased)
            this._isForcedToReleased = false;
        this._isTouching = false;
    }

    public getIsTouching() {
        return this._isTouching;
    }

    public forceToRelease(){
        this._isForcedToReleased = true;
    }
}
