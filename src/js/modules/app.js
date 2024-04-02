import AnimaIntro from './animaIntro.js';
import StaticForm from './staticForm.js';

export default function app() {
  const intro = new AnimaIntro();
  const staticForm = new StaticForm();

  intro.init();
  staticForm.init();
}
