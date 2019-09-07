const {ccclass, property} = cc._decorator;

@ccclass()
export default class PillarPool extends cc.Component {
    static instance:PillarPool = null;

    public static GetPillarPool(){
        if(this.instance){
            return this.instance;
        }
        this.instance = PillarPool.instance;
    }

    
}