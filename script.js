let btnEdit = document.querySelector('.profile__edit');
let btnClose = document.querySelector('.popup__close');
let btnSave = document.querySelector('.popup__button');
let popupBg = document.querySelector('.popup__bg');


 btnEdit.addEventListener('click', function () {
  popupBg.classList.add('popup__bg-open');
});
btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  popupBg.classList.remove('popup__bg-open');
});

//не работает
btnClose.addEventListener('click', function () {
  btnSave.classList.remove('popup__bg-open');
});