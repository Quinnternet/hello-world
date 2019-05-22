function buildIconHTML(link){
    if(link.icon){
        return `<span class="${link.icon}"></span>`;
    }

    return '';
}

function buildNavHTML(stateLinks){
    let linksHTML = '';

    stateLinks.forEach((link) => {
        linksHTML += `<li><a href="/${link.text.toLowerCase()}" data-navigo>${buildIconHTML(link)}${link.text}</a></li>`;
    });

    return linksHTML;
}

export default (state) => `
  <nav>
    <ul class="flex">
      ${buildNavHTML(state.links.primary)}
      <li>
        Portfolio
        <ul id="dropdown">
          ${buildNavHTML(state.links.dropdown)}
        </ul>
      </li>
    </ul>
  </nav>
  `;

// function buildNavHTML(stateLinks){
//     let linksHTML = '';
//
//     stateLinks.forEach((link) => {
//         linksHTML += `<li><a href="">${link}</li>`;
//     });
//
//     return linksHTML;
// }
//
// export default (state) => `
//     <div id="navigation">
//          <div class="container">
//             <ul>
//                 <li><a href="Blog/">Blog Page!</a></li>
//                 <li>
//                 <a href="">Additional Thing!</a>
//                     <ul>
//                         <li><a href="">Thing one!</a></li>
//                         <li><a href="">Thing two!</a></li>
//                         <li><a href="">Thing three!</a></li>
//                     </ul>
//                 </li>
//                 <li><a href="Contact/">Contact me!</a></li>
//                 <li>
//                     <a href="">Projects!</a>
//                      <ul>
//                         <li><a href="">first</a></li>
//                         <li><a href="">second</a></li>
//                         <li><a href="">third</a></li>
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//     </div>
//     `;
// }