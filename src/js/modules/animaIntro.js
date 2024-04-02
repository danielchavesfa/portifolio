export default class AnimaIntro {
  constructor() {
    this.introAnimation = document.querySelector('[data-main="animation"]');
    this.mainContent = document.querySelector('[data-main="content"]');
  }

  init() {
    if (!this.introAnimation && !this.introAnimation) return;
    this.mainContent.classList.add('disable');

    setTimeout(() => {
      this.introAnimation.classList.add('hidden');
      this.mainContent.classList.add('show');
    }, 2000);

    setTimeout(() => {
      this.introAnimation.classList.remove('anima');
      this.introAnimation.classList.add('disable');
      this.mainContent.classList.remove('disable');
    }, 2300);
  }
}
