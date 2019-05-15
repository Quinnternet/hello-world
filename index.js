import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

const root = document.querySelector('#root');

root.innerHTML = `
    ${Navigation}
    ${Header}
    ${Content}
    ${Footer}
    `;