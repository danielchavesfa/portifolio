export default class StaticForm {
  constructor() {
    this.form = document.getElementById('form-contact');
    this.formBtn = this.form.querySelector('button[type="submit"]');
    this.sendForm = this.sendForm.bind(this);
  }

  #accessKey = '024482ac-f7f5-46da-af2d-532f06b61376';
  #url = 'https://api.staticforms.xyz/submit';

  getFormObj() {
    const formObj = {};
    const inputs = this.form.querySelectorAll('[name]');

    inputs.forEach((input) => (formObj[input.name] = input.value));
    formObj.accessKey = this.#accessKey;

    return formObj;
  }

  onSubmission(event) {
    event.preventDefault();

    this.formBtn.innerText = 'Enviando mensagem...';
    this.formBtn.ariaDisabled = true;
    this.formBtn.disabled = true;
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);

      const response = await fetch(this.#url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.getFormObj()),
      });

      if (response.ok) {
        this.formBtn.innerText = 'Mensagem Enviada!';

        alert('Mensagem enviada com sucesso. Obrigado! 😊');
        return;
      }
    } catch (error) {
      this.formBtn.innerText = 'Não Enviada';
      console.error('Erro na requisição:', error.message);
    } finally {
      this.form.reset();
    }
  }

  init() {
    this.form.addEventListener('submit', this.sendForm);
  }
}
