import { _decorator, Component, ProgressBar, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ProgressBarComponent')
export class ProgressBarComponent extends Component {
  @property(ProgressBar)
  progressBar: ProgressBar = null!;

  @property(Label)
  progressLabel: Label = null!;

  // Cập nhật UI progress
  updateProgress(progress: number) {
    this.progressBar.progress = progress;
    this.progressLabel.string = `${Math.floor(progress * 100)}%`;
  }

  show() {
    this.node.active = true;
  }

  hide() {
    this.node.active = false;
  }
}