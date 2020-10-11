import React from 'react';
import Items from './Items';

const Lists = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <Items key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div className='divided list'>{renderedVideos}</div>;
};
export default Lists;