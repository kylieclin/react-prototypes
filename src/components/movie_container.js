import React, {Component}from 'react';
import axios from 'axios';
import Movie from './movie';


class Container extends Component{
    state ={
        movies:[]
    }
    componentDidMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

        axios.get(url).then((resp)=>{
            this.setState({
                movies: resp.data.feed.entry
            })
        });

    }
    render(){
        const {movies} = this.state;
        const movieList = movies.map((movie, index)=>{
            return <Movie info={movie} key={index} />
        })
        return(
        <div className="card-columns">
            {movieList}
        </div>
        )
    }
} 

export default Container;