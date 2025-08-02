import { instantiate, Node, Vec2 } from "cc";

export class HamChung{

    static daiRongO: number = 64;
    
    static LayViTri(hang: number, cot: number): Vec2 { return new Vec2((cot - 4) * this.daiRongO, (hang - 4) * this.daiRongO); }
    static LayDongCot(node: Node) 
    { 
        let nodeInstantiate = instantiate(node);
        return new Vec2(Math.floor(nodeInstantiate.x / this.daiRongO) + 4, Math.floor(nodeInstantiate.y / this.daiRongO) + 4)
     }

}

