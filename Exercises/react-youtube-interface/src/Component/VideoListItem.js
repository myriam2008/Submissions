import React from "react";


const VideoListItem = (props) => {

    const video = props.video;
    console.log(video);
    const imageUrl = video.snipet.thumbnails.default.url;

    return (
        <li /* onClick={()=> onUserSelected(video)} */ className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-headine">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};






export default VideoListItem;