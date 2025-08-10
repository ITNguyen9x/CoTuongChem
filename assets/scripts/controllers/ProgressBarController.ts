import { _decorator, Component, Node, director } from 'cc';
import { ProgressBarComponent } from '../components/ProgressBarComponent';
const { ccclass, property } = _decorator;

@ccclass('ProgressBarController')
export class ProgressBarController extends Component {
  @property(ProgressBarComponent)
  progressBarComponent: ProgressBarComponent = null!;

  async loadSceneWithProgress(sceneName: string) {
    this.progressBarComponent.show();
    this.progressBarComponent.updateProgress(0);

    // Giả lập progress tăng dần (nếu muốn)
    let progress = 0;
    const fakeInterval = setInterval(() => {
      progress += 0.05;
      if (progress > 0.9) progress = 0.9;
      this.progressBarComponent.updateProgress(progress);
    }, 1000);

    await new Promise<void>((resolve, reject) => {
      director.loadScene(sceneName, (error) => {
        clearInterval(fakeInterval);
        if (error) {
          console.error('Load scene lỗi:', error);
          reject(error);
        } else {
          this.progressBarComponent.updateProgress(1);
          resolve();
        }
      });
    });

    //this.progressBarComponent.hide();
  }
}