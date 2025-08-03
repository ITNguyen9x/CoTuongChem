import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass('DoiTuongNguoiChoi')
export class DoiTuongNguoiChoi extends Component{

    @property({type: Node}) NguoiChoi: Node = null!;

    start() { 
       const nguoiChoi01 = new Node("NguoiChoi01");
       nguoiChoi01.setParent(this.NguoiChoi);
    }


}