import React from 'react';
import SearchBar from './Component/SearchBar';
import './App.css';
import Test from './Component/Test';
import VideoList from './Component/VideoList';
import VideoListItem from './Component/VideoListItem';
import VideoDetail from './Component/VideoDetail';




class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('React js conf');

    }

    videoSearch(searchTerm) {


    }

    render() {

        return (
            //         <div>
            //             <SearchBar  />
            //             <VideoDetail video={this.state.selectedVideo} />
            //             <VideoList
            //  onVideoSelect={userSelected => this.setState({ selectedVideo: userSelected })}
            //             videos={this.state.videos} />
            //   </div>

            <div className="wrapper">
                <div className="header" img className="img-responsive" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAolBMVEX////lLSe6JSDkAAC5EAWzAAD78PDmJx/eoqG3DQDlKiTAJiHLKCLjDAC2AAC3JSDkHBP/+vrzqafmODPyo6HkIRn2vr3raWa4GxX1t7XoUEz66OfxmZf629rmNC63EwrufnvqYl/51NPpWFTtdnPnREDjrazUcW/KZWLbmZfVgoDyysm+NTLJW1jfkZD3x8bHUE3KSEXEAADqjozviofJHBWJfHNqAAAD6ElEQVRoge2Z23aqMBCGBQUK3UlBRSJYwWNttbXudr//q+3gqeYwIQF7x3/XVVa/zuSfySTpdFq1atWq1a2i+XiynKUrqkVSDPfPvwOZpCFCYex5AZXnxeVPs352X8z8a9UNA0uQh7qL+7GiURLKKBeWVczvwhmvQg+iHBXEcdIctU2RGnNUjJbNEuguuxqYE2rYgDMKQj1MKbSoa/foG4EWkMmLx7U47gyZYKgCNKnByVYGabsIFeacQNMFrMKZKcerxTEmZauaHEoqDDjRLK7Loetk4IjC1G8saaTLGTfiWIGn2Y6y2KhORcULPVCTBToJ9XU4o25TjhWEbjUnGjRMXCkdjw9rdB4JqbKTu/cIiPphWQXq3yUgumdUhBSlbO8JUFdT3D8YfqtBe65WvXFUlYNzyicsKRioq3bJ1pB+N+l0vlgSUm63LlerSJ/Tyf6yuUhUH/NdzjMAuc4fdpVURbvkrCCAtnDmXeeJISlz53FFJIAeCDiTuo7NkOIC5jxzmRMjesDOKwxiSMEUBgkbkQjybbyRJ78EMSQEp5lzqCwi37bz3RYE3ZKQ9LOjEn4kkYJsksvSdwLdkBRuSDkvyCOiwhuxYZxBP6QQnFKErQgE0fQJTfMCupJg27kBv0WAIJvgBwh0IcG9gW9AiojK9L2w7vsBnUkeOLRm/F6kBNm9HVO8N6ATyQOHIUMQcdYQ6EiCQWap8w+sHxhQSYJTZ2IG23nhHM6CKCkGzWBgb+Kv+V9xIPvpXwGB9Au2J5aRALL9DxA002tB1NmSSUIAYSHoq75jnYgIkf4FEQQ3Va1tQtJ9ABC8TcyrNz5f1k/loEeQ0+lwJyMJyOFbHAgiLwpQUjWcrOG88yCsGk6ajVvaS0Q/5idoA1DGgsi78uuENXgXzpSgV58NCK6iUiM2d4GlTVrnnOnUQ7674nyHcE9LGLOY/K3iHxNPlo92HeVVZ8tsKhwtH5/MOWRTmeuJeLasEROuvjZ2LfG0bBxTruoKF/UlN0GmJGWxXpVK7urMSBg6cbDiDy/G60QOWhxqcSlJPyZf+wI8kd1qaJMqms+tolR2k6aZPcVMIiobyC5vtWLqQTuwXM/SByMNUv5pxKHjg/TRqDJ7vYMhh8Y0kK6TOibfLG8nZamx95y3GhzqvaXsWQcmiYdAbfVlCwWtk79r8NCXLSRBSWMiuF7arhpPRaOLJII/Gz8zR8OBkEAue8T/3DfFlHL7KeJm5duYfH9jMJSpFe0Lr8uwziSS493Hfd/m3VExPb7JBycRysD48DFvZgG5sv2wmKWDqWVNV+nmbb3VeIFooihyfyOMVq1atfo9/Qe650nnstLbJgAAAABJRU5ErkJggg==" alt="utubelogo"/>></div>
                <div className="container-videos"></div>
                <div className="left"></div>
                <div className="right"></div>
            </div>
            
                    );
                }
            }
            
            export default App;
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {}

//     }

//     render() {
//         return (
//             <div className="App">
//                 <SearchBar></SearchBar>
//             </div>
//         );
//     }
// }


