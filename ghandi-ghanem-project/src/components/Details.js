import React from "react";
import '../video.css'

const Details = ({ video }) => {
  if (!video) {
    return <div>
              <h1>Enter what's going in your mind ;)</h1>
          </div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default Details;