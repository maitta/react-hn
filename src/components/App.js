import '../styles/App.scss';

import Header from './Header';
import Stories from './Stories';
import Footer from './Footer';

import moment from 'moment';

function App() {
  
  moment.updateLocale('en', {
    relativeTime : {
        m:  "1 minute",
        h:  "1 hour",
        d:  "1 day",
        w:  "1 week",
        M:  "1 month",
        y:  "1 year"
    }
  });

  return (
    <div id="wrapper">
      <Header></Header>
      <Stories></Stories>
      <Footer></Footer>
    </div>
  );
}

export default App;
