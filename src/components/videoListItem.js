import React, { Component } from 'react';

const VideoListItem = (props) => {
	return(
 		<li onClick={() => props.onVideoSelect(props.video)}>
 			<img src={props.video.snippet.thumbnails.default.url}/>
 			<p>{props.video.snippet.title}</p>
 		</li>
	);
};

export default VideoListItem;