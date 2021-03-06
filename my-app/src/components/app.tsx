import * as React from 'react';
import {  BrowserRouter, Route, Switch, } from 'react-router-dom';
import Home from './homePage';
import AboutPage from '../components/about/aboutPage';
import AgGridSample from '../components/agGridSample/gridSample';
import Headers from '../components/common/headers';
import VideoSearch from '../components/youtubeVideos/videoSearch';
import BookList from '../containers//book_list';
import '../components/youtubeVideos/youtubeVideos.css';
import ChartSample from '../components/highChartSample/chartSamples';

const App = () => (
    <BrowserRouter>
      <div>
      <Headers/>
      <Switch>
        <Route name="about" path="/about" component={AboutPage} />
        <Route name="gridsample" path="/gridsample" component={AgGridSample} />
        <Route name="youtubesample" path="/youtubesample" component={VideoSearch} />
        <Route name="reduxsample" path="/reduxsample" component={BookList} />
        <Route name="chartsample" path="/chartsample" component={ChartSample} />
        <Route name="app" exact={true}  path="/" component={Home}/>
      </Switch>
      </div>
    </BrowserRouter>

);
export default App;
