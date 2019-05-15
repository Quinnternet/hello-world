import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

const root = document.querySelector('#root');

const state = {
    'title': 'welcome to the q u i n n t e r n e t'

};

root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
    `;

document
    .querySelector('li > a')
    .addEventListener('click', (event) => event.preventDefault());