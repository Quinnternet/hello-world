export default function Header(state){
    return `
<div id="header">
     <div class="container">
        <h1 class="fullwidth">${state.title}</h1>
     </div>
</div>
    `;
}