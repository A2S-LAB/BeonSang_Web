const buttonAdd = document.querySelector('.button-add');

const overlay = document.querySelector('.overlay');

const form = document.querySelector('.form');

const buttonClose = document.querySelector('.button-close');

const onModal = state => {
  if (state) {
    overlay.classList.remove('hidden');

    form.classList.remove('hidden');
  } else {
    overlay.classList.add('hidden');

    form.classList.add('hidden');
  }
};

overlay.addEventListener('click', onModal.bind(this, false));

buttonClose.addEventListener('click', onModal.bind(this, false));

buttonAdd.addEventListener('click', onModal.bind(this, true));
