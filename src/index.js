import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import {Grid, Col, Row} from 'react-bootstrap';
import SearchBar from './components/searchBar';
import VideoDetail from './components/videoDetail';
import VideoList from './components/videoList';

const API_KEY = "INSERT YOUR API KEY HERE";

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			term: 'tedx talk',
			videos: [],
		};
	}

	getResults(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			let currentVideo = videos[0];
			this.setState({videos, currentVideo});
		});		
	}

	setCurrentVideo(video) {
		this.setState({currentVideo: video});
	}

	componentDidMount() {
		this.getResults(this.state.term);
	}

	render() {
		const videoSearch = _.debounce((term) => {this.getResults(term)}, 300);
		return(
			<Grid>
				<Row>
					<Col sm={12}>
						<SearchBar onSearchChange={videoSearch}/>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={8}>
						<VideoDetail video={this.state.currentVideo}/>
					</Col>
					<Col xs={12} sm={4}>
						<VideoList videos={this.state.videos}
											 onVideoSelect={currentVideo => this.setCurrentVideo(currentVideo)}/>
					</Col>
				</Row>
			</Grid>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('react'));