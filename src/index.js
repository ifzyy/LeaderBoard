import './style.css';
import postData from './modules/post-data';
import getData from './modules/get-data';

const name = document.querySelector('.name');
const score = document.querySelector('.number');
const refreshBtn = document.querySelector('.refresh');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postData(name.value, score.value);
  form.reset();
});

refreshBtn.addEventListener('click', () => {
  document.location.reload();
  getData();
});

getData();
