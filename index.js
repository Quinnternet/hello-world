import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import * as states from './Store';
import { capitalize } from 'lodash';
import Navigo from 'navigo';

const router = new Navigo(window.location.origin);
const root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
    `;
 
    router.updatePageLinks();
}

// Checks the URL bar
// Takes anything beyond window.location.origin
// Assigns it to an objcet called 'params' with a key of its filepath
// Uses 'capitalize' from lodash to capitalize the name of the object so it will render properly
router
    .on(':path', (params) => {
        render(states[capitalize(params.path)]);
    })
    .on('/', () => render(states.Home))
    .resolve();