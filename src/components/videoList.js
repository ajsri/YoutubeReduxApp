import React, { Component } from 'react';
import VideoListItem from './videoListItem';

let notify = () => {
	if(window.Notification.permission != "granted"){
		Notification.requestPermission();
	}
	else{
		new Notification("hey");
	}
}
const VideoList = (props) => {

	return(
		<div>
			<h3>Search Results</h3>
			<ul className="video-results">
				{props.videos.length < 1 &&
					<li>No results found</li>
				}
				{props.videos.map((video, i) => (
					<VideoListItem key={i} 
												 video={video} 
												 onVideoSelect={props.onVideoSelect}/>
				))}
			</ul>
			<button onClick={notify}>Notification</button>
		</div>
	);
};

export default VideoList;