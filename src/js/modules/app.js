import AnimaIntro from './animaIntro.js';
import SmoothScroll from './smoothScroll.js';
import StaticForm from './staticForm.js';

export default function app() {
  const intro = new AnimaIntro();
  const staticForm = new StaticForm();
  const smoothScroll = new SmoothScroll();

  intro.init();
  staticForm.init();
  smoothScroll.init();
}
