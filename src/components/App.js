import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import moment from 'moment';

import '../styles/App.scss';

import Header from './Header';
import Stories from './Stories';
import Footer from './Footer';

import ItemComments from './comments/ItemComments';
import { StoryType } from '../services/hnAPI';

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
      <Routes>
        {/** React Router hasn't documented that if using the outlet feature with an array of elements, outlet must be declared
         * only once. In this case, it is component header that has it declared. This means even if footer component doesn't have
         * an outlet tag, it will be present nonetheless in all routes.
         */}
        <Route path="/" element={[<Header key={1} />, <Footer key={2} />]} >
          <Route path="" element={<Stories type={StoryType.top} />} />
          <Route path=":pageId" element={<Stories type={StoryType.top} />} />

          <Route path="top" element={<Stories type={StoryType.top} />} >
            <Route path=":pageId" element={<Stories type={StoryType.top} />} />
          </Route>
          <Route path="best" element={<Stories type={StoryType.best} />} >
            <Route path=":pageId" element={<Stories type={StoryType.best} />} />
          </Route>  
          <Route path="/new" element={<Stories type={StoryType.new} />}>
            <Route path=":pageId" element={<Stories type={StoryType.new} />} />
          </Route>

          <Route path="/show" element={<Stories type={StoryType.show} />} >
            <Route path=":pageId" element={<Stories type={StoryType.show} />} />
          </Route>
          <Route path="/ask" element={<Stories type={StoryType.ask} />} >
            <Route path=":pageId" element={<Stories type={StoryType.ask} />} />
          </Route>
          <Route path="/job" element={<Stories type={StoryType.job} />} >
            <Route path=":pageId" element={<Stories type={StoryType.job} />} />
          </Route>

          <Route path="/item" element={<ItemComments />}>
            <Route path=":itemId" element={<ItemComments />} />
          </Route>
          <Route path="*" element={<Link to="/">No route available</Link>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;