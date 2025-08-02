import { _decorator, Component, Node, AudioSource} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NhacNenComponent')
export class NhacNenComponent extends Component {

    
    @property({ type: AudioSource }) bgmSource: AudioSource = null;
    start() {
        this.bgmSource.loop = true;
        this.bgmSource.volume = 0.5;
        this.bgmSource.play();
    }

    update(deltaTime: number) {
        
    }
}


