import * as Pages from './pages';

export default (state) => `
    <div id="content">
        <div class="container">
        ${Pages[state.pageContent](state)}
        </div>
    </div>
    `;
