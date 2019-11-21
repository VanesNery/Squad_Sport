import Events from './pages/events.js';
import Publicize from './pages/publicize.js';
import News from './pages/news.js';

function pageRoute() {
  const page = (window.location.hash) ? window.location.hash : '#events';
  switch (page) {
    case '#events':
      document.querySelector('main').innerHTML = Events();
      window.app.loadEvent();
      break;
    case '#publicize':
      document.querySelector('main').innerHTML = Publicize();
      break;
    case '#news':
      document.querySelector('main').innerHTML = News();
      window.news.api();
      break;
    default:
    document.querySelector('main').innerHTML = Events();
  };    
};

window.addEventListener('load', pageRoute);
window.addEventListener('hashchange', pageRoute, false);