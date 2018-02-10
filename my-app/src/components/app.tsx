import * as React from 'react';
import {  BrowserRouter, Route, Switch, } from 'react-router-dom';
import Home from './homePage';
import AboutPage from '../components/about/aboutPage';
import AgGridSample from '../components/agGridSample/gridSample';
import Headers from '../components/common/headers';
import VideoSearch from '../components/youtubeVideos/videoSearch';
const App = () => (
    <BrowserRouter>
      <div>
      <Headers/>
      <Switch>
        <Route name="about" path="/about" component={AboutPage} />
        <Route name="gridsample" path="/gridsample" component={AgGridSample} />
        <Route name="youtubesample" path="/youtubesample" component={VideoSearch} />
        <Route name="app" exact={true}  path="/" component={Home}/>
      </Switch>
      </div>
    </BrowserRouter>

);
export default App;
