import Button from '../components/button.js';
import Input from '../components/input.js';

function backPage() {
 let exit = confirm('Deseja sair?');
  if (exit == true){
    window.location.hash = '#events';
  };
};

function cleanPublicize() {
  document.querySelector('.js-name').value = '',
  document.querySelector('.js-date-event').value = '',
  document.querySelector('.js-date-event').value = '',
  document.querySelector('.js-email').value = '',
  document.querySelector('.js-modality').value = '',
  document.querySelector('.js-name-event').value = '',
  document.querySelector('.js-gender').value = '',
  document.querySelector('.js-address').value = '',
  document.querySelector('.js-price').value = '',
  document.querySelector('.js-additional-infor').value = ''
};

function sendEvent() {
  const name = document.querySelector('.js-name').value;
  const date = document.querySelector('.js-date-event').value;
  const hours = document.querySelector('.js-hours-event').value;
  const email = document.querySelector('.js-email').value;
  const sport = document.querySelector('.js-modality').value;
  const event = document.querySelector('.js-name-event').value;
  const gender = document.querySelector('.js-gender').value;
  const address = document.querySelector('.js-address').value;
  const price = document.querySelector('.js-price').value;
  const additional = document.querySelector('.js-additional-infor').value;

  if (name == '') {
    alert('Preencha o campo com seu nome');
  }
  else if (date == '') {
    alert('Escolha uma data');
  }
  else if (hours == '') {
    alert('Escolha uma hora');
  }
  else if (email == '') {
    alert('Preencha o campo com seu email');
  }
  else if (sport == '') {
    alert('Preencha o campo com a categoria do esporte');
  }
  else if (event == '') {
    alert('Preencha o campo com o nome do Evento');
  }
  else if (gender == '') {
    alert('Preencha o campo com o gênero do evento');
  }
  else if (address == '') {
    alert('Preencha o campo com o endereço onde ocorrerá o evento');
  }
  else if (price == '') {
    alert('Preencha o campo com o valor do ingresso');
  }
  else {
    const events = {
      name,
      date,
      hours,
      email,
      sport,
      event,
      gender,
      address,
      price,
      additional,
    };
    firebase.firestore().collection('divulge').add(events);
    alert('Obrigado !! Vamos validar os seus dados em Breve seu evento vai ser divulgado')
    window.publicize.cleanPublicize()
  };
};

function Publicize() {
  const template = `
  <main class="publicize-main"></main>
  <section class="form-event">
    <form class="event-data">
      ${Input({
        class: 'js-name',
        placeholder: 'Nome',
        type: 'text',
        autocomplete: 'off',
      })}
        ${Input({
        class: 'js-email',
        placeholder: 'exemplo@exemplo.com.br',
        type: 'email',
        autocomplete: 'off',
      })}
      ${Input({
        class: 'js-modality',
        placeholder: 'Qual o esporte',
        type: 'txt',
        autocomplete: 'off',
      })}
        ${Input({
        class: 'js-name-event',
        placeholder: 'Nome do Evento',
        type: 'text',
        autocomplete: 'off',
      })}
      ${Input({
        class: 'js-price',
        placeholder: 'Valor do Evento R$',
        type: 'number',
        min: '0,00',
        step: '0,00',
        autocomplete: 'off',
      })}
      <select class="js-gender" id="select">
      <option value="">Gênero</option>
      <option value="Feminino">Feminino</option>
      <option value="Masculino">Masculino</option>
      <option value="Misto">Misto</option>
      <option value="Outros">Outros</option>
      </select>
      ${Input({
        class: 'js-address',
        placeholder: 'Endereço',
        type: 'text',
        autocomplete: 'off',
      })}
      ${Input({
        class: 'js-date-event',
        placeholder: 'Data do Evento',
        type: 'date',
        autocomplete: 'off',
      })}
      ${Input({
        class: 'js-hours-event',
        placeholder: 'Horario do Evento',
        type: 'time',
        autocomplete: 'off',
      })}
      <textarea rows='8'
      cols='50' placeholder='Informações Complementares'
      class='js-additional-infor'> </textarea>
      <div class="btn">
      ${Button({
        id: 'publicize',
        title: 'Enviar',
        onClick: sendEvent,
      })}
      ${Button({
        id: 'backPage',
        title: 'Voltar',
        onClick: backPage,
      })}
      </div>
    </form>
  </section>`;


  return template;
};

window.publicize = {
  cleanPublicize,
  sendEvent
};

export default Publicize;