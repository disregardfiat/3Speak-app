import React from 'react';
import VideoWidget from "../components/video/VideoWidget";

class NewFeed extends React.Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        fetch("https://3speak.online/apiv2/feeds/new")
            .then(res => res.json())
            .then(json => {
                this.setState({data: json})
            })
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                {this.state.data.map(el => (
                    <VideoWidget key={el.author + '/' + el.permlink} reflink={`hive/${el.author}/${el.permlink}`} {...el} />
                ))}
                </div>
            </div>
        );
    }
}

export default NewFeed