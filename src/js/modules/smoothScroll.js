export default class SmoothScroll {
  constructor() {
    this.element = document.querySelector('a[href^="#projects"');
    this.scrollToTheElement = document.querySelector('#projects');
  }

  scrollToElement(event) {
    event.preventDefault();
    this.scrollToTheElement.scrollIntoView({ behavior: 'smooth' });
  }

  init() {
    this.element.addEventListener('click', this.scrollToElement.bind(this));
  }
}
