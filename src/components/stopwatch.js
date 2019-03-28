import React, {Component} from 'react';
import FormatTime from './format_time';

class Stopwatch extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0,
            lap: []
        };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.update = this.update.bind(this);
        this.reset = this.reset.bind(this);
        this.lap = this.lap.bind(this);
    }
    start(){
        const {start, elapsed} = this.state;
        let newStart = new Date().getTime();
        if(start){
            newStart = newStart - elapsed;
        }
        this.setState({
            status: 'running',
            start: newStart
        });
        setTimeout(this.update, 10);
    }
    stop(){
        this.setState({
            status: 'stopped'
        })
    }
    reset(){
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0,
            lap: []
        })
    }
    update(){

        const{ status , start} = this.state;
        if(status === 'running'){
            this.setState({
                elapsed: new Date().getTime() - start
            })
            setTimeout(this.update, 10);
        } 
    }
    lap(){
        if(this.state.status === 'running'){
            this.setState({
                lap: [...this.state.lap, this.state.elapsed]
            })   
        }
     
    }
    render(){
        const {status, elapsed, lap} = this.state;
        return (
            <div className="jumbotron">
                <FormatTime time={elapsed} className="display-3"/>
                <hr className="my-3"/>
                <p className="lead text-center">{status}</p>
                <p className="text-center">
                    <button onClick={this.start} className="btn btn-outline-success mx-3">Start</button>
                    <button onClick={this.lap} className="btn btn-outline-info mx-3">Lap</button>
                    <button onClick={this.stop} className="btn btn-outline-danger  mx-3">Stop</button>
                    <button onClick={this.reset} className="btn btn-outline-warning mx-3">Reset</button>   
                </p>
                <div className="lap text-center">
                    {lap.map((time, index)=>{
                        return <FormatTime time={time} key={index}/>
                    })}
                </div>
            </div>
        )
    }
}

export default Stopwatch;