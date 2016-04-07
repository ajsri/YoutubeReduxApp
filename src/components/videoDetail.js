import React, { Component } from 'react';

const VideoDetail = (props) => {
	if(!props.video){
		return <div>Loading...</div>;
	}
	
	let videoUrl = `http://www.youtube.com/embed/${props.video.id.videoId}`;

	return(
		<div>
			<h3>{props.video.snippet.title}</h3>
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={videoUrl}></iframe>
			</div>
			<div className="details">
				<div>{props.video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;