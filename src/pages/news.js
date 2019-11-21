// import Button from "../components/button.js";

// function backPage() {
//   window.location.hash = '#events';
// };

// function Publicize() {
//   window.location.hash = '#publicize';
// };

// function api() {
//   fetch("http://18.228.196.34/ge/futebol-americano")
//     .then(res => res.json())
//     .then(data => {
//       document.querySelector('.eventos').innerHTML = '';
//       data.forEach(data => {
//         let titleNews = data.title;
//         let link = data.link;
//         let imgNews = data.image;
//         const template = `
//         <li class ='card-event'>
//         <figure class='card-event-img'>
//           <img src= '${imgNews}'/>
//         </figure>
//         <article class='card-event-text'>
//           <p>
//             <strong>Titulo:</strong> ${titleNews} <br/>
//             <a href="${link}" target="blank"><strong>Notícia</strong></a>
//             </p>
//         </article>
//         </li>
//         `;
//         document.querySelector('.eventos').innerHTML += template
//       });
//     });
// };

// function News() {
//   let template = `
//   <div class="container-buttons">
//   ${Button({
//     id: 'events',
//     title: 'Eventos',
//     onClick: backPage,
//   })}
//   ${Button({
//     id: 'publicize',
//     title: 'Divulgue seu evento',
//     onClick: Publicize,
//   })}
//   </div>
//   <div class='container-events'>
//     <ul class="eventos">
//     </ul>
//   </div>`
  
//   return template;

// };

// window.news = {
//   api
// };

// export default News;
import Button from "../components/button.js";
  
function backPage() {
  window.location.hash = '#events';
};

function Publicize() {
  window.location.hash = '#publicize';
};

function api() {
  fetch("http://18.228.196.34/ge/futebol-americano")
    .then(res => res.json())
    .then(data => {
      document.querySelector('main').innerHTML = '';
      data.forEach(data => {
        let titleNews = data.title;
        let link = data.link;
        let imgNews = data.image;
        document.querySelector('main').innerHTML += News(titleNews, link, imgNews)
      });
    });
};

function News(titleNews, link, imgNews) {
  let template =  `
  <div class='container-events'>
    <ul class="eventos">
      <li class ='card-event'>
        <figure class='card-event-img'>
          <img src= '${imgNews}'/>
        </figure>
        <article class='card-event-text'>
          <p>
            <strong>Titulo:</strong> ${titleNews} <br/>
            <a href="${link}" target="blank"><strong>Notícia</strong></a>
          </p>
        </article>
      </li>
    </ul>
  </div>
  <div class="container-buttons">
  </div>`
  return template;
};
        
window.news = {
  api
};

export default News;
