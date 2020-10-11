import React from 'react';
import Search from './Search';
import API from '../API';
import Lists from './Lists';
import Details from './Details';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearch) => {
        const response = await API.get('/search', {
            params: {
                q: termFromSearch
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='container' style={{marginTop: '1em'}}>
                <Search handleFormSubmit={this.handleSubmit}/>
                <div className='grid'>
                    <div className="row">
                        <div className="eleven wide column">
                            <Details video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <Lists handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;