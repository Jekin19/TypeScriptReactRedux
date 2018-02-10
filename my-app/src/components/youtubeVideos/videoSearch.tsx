import * as React from 'react';
import YTSearch from 'youtube-api-search';
import { API_KEY } from '../../types/constants';
import SearchBar from '../youtubeVideos/searchBar';
import VideoDetail from '../youtubeVideos/videoDetail';
import VideoList from '../youtubeVideos/videoList';
import '../youtubeVideos/youtubeVideos.css';
import _ from 'lodash';

export default class VideoSearch extends React.Component<{}, any> {
  constructor(props: object) {
  super(props);
  this.state = {
    videos: [],
    selectedVideo: null
  };
  this.videoSearch('surfboards');
}

videoSearch(term: string) {
  YTSearch({key: API_KEY, term: term}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]});
  });
}

render() {
  const videoSearch = _.debounce((term) => {this.videoSearch(term); }, 300);
  return (
   <div>
   <h1>Youtube video search using React</h1>
    <SearchBar onSearchTermChange={videoSearch}/>
    <VideoDetail video={this.state.selectedVideo}/>
    <VideoList
     onVideoSelect={selectedVideo => this.setState({selectedVideo})}
     videos={this.state.videos}
    />
   </div>
  );
}
}
