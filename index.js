import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import * as states from './store';
import { capitalize } from 'lodash';
import axios from 'axios';
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

axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) =>
        // TODO: Grab the posts from the data and iterate over them
        // We need to 'push' each and ever post into states.Blog.posts
        console.log(response.data));

// Checks the URL bar
// Takes anything beyond window.location.origin
// Assigns it to an object called 'params' with a key of its filepath
// Uses 'capitalize' from lodash to capitalize the name of the object so it will render properly
router
    .on(':path', (params) => {
        render(states[capitalize(params.path)]);
    })
    .on('/', () => render(states.Home))
    .resolve();
