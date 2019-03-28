import React, {Component} from 'react';

class FormatTime extends Component{
    constructor(props){
        super(props);

        this.timerStyle = {
            display: 'inline-block',
            position: 'relative',
            left: '65%',
            transform: 'translate(-50%)',
            width: '383px'
        }

    }
    millisecondsToTime(){
       const {time} = this.props;
       const sec = time/1000;
       const min = sec/60;
       const presentTime ={
           hour: Math.floor(min / 60),
           min: Math.floor(min % 60),
           sec: Math.floor(sec % 60),
           ms: Math.floor(time % 100)
       }
       return presentTime; 
    }
    leadingZero(number){
        if(number < 10){
            return '0'+number
        } 
        return number;
    }
    trailingZero(number){
        if(number < 10){
            return number +'0'
        } 
        return number;
    }
    render(){
        const {hour, min, sec, ms} = this.millisecondsToTime();
        return(
            <div style={this.timerStyle}>
                <h1>{this.leadingZero(hour)}:{this.leadingZero(min)}:{this.leadingZero(sec)}.{this.trailingZero(ms)}</h1>
            </div>
            
        )
    }
}

export default FormatTime;