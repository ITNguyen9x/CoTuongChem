import { _decorator, Component, instantiate, Node, Prefab, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('QuanCoComponent')
export class QuanCoComponent extends Component {
    @property({type: Node})
    quanCo: Node = null!;

    @property({type: Prefab})
    tuongXanhPrefab: Prefab = null!;
    @property({type: Prefab})
    siXanhPrefab: Prefab = null!;
    @property({type: Prefab})
    boXanhPrefab: Prefab = null!;
    @property({type: Prefab})
    nguaXanhPrefab: Prefab = null!;
    @property({type: Prefab})
    xeXanhPrefab: Prefab = null!;
    @property({type: Prefab})
    phaoXanhPrefab: Prefab = null!;
    @property({type: Prefab})
    chotXanhPrefab: Prefab = null!;
    @property({type: Prefab})
    tuongDoPrefab: Prefab = null!;
    @property({type: Prefab})
    siDoPrefab: Prefab = null!;
    @property({type: Prefab})
    boDoPrefab: Prefab = null!;
    @property({type: Prefab})
    nguaDoPrefab: Prefab = null!;
    @property({type: Prefab})
    xeDoPrefab: Prefab = null!;
    @property({type: Prefab})
    phaoDoPrefab: Prefab = null!;
    @property({type: Prefab})
    chotDoPrefab: Prefab = null!;

    
    dong:number = 10;
    cot:number = 9;
    daiRongO: number = 64;

    start() {
        this.taoQuanCo();
    }

    taoQuanCo(){
        //Phe Xanh
        this.taoMotQuanCo(4, 0, this.tuongXanhPrefab);
        this.taoMotQuanCo(3, 0, this.siXanhPrefab);
        this.taoMotQuanCo(5, 0, this.siXanhPrefab);
        this.taoMotQuanCo(2, 0, this.boXanhPrefab);
        this.taoMotQuanCo(6, 0, this.boXanhPrefab);
        this.taoMotQuanCo(1, 0, this.nguaXanhPrefab);
        this.taoMotQuanCo(7, 0, this.nguaXanhPrefab);
        this.taoMotQuanCo(0, 0, this.xeXanhPrefab);
        this.taoMotQuanCo(8, 0, this.xeXanhPrefab);
        this.taoMotQuanCo(1, 2, this.phaoDoPrefab);
        this.taoMotQuanCo(7, 2, this.phaoDoPrefab);
        //for(let i = 0; i < 8; i+2) this.taoMotQuanCo(3, i, this.chotDoPrefab);
    }

    taoMotQuanCo(dong: number, cot: number, loaiquan: Prefab) {
        const tuongxanh = instantiate(loaiquan);
        const pos = this.layViTri(dong, cot);
        tuongxanh.setPosition(pos.x, pos.y);
        this.quanCo.addChild(tuongxanh);
    }

    layViTri(dong: number, cot: number): Vec2 {
        const x = (dong - 4) * this.daiRongO;
        const y = (cot - 4) * this.daiRongO;
        return new Vec2(x, y);
    }
}