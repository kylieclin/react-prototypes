import React from 'react';
import ReactDOM from 'react-dom';

const data = {
    user: 'Dan',
    number: luckyNumber()
}

function luckyNumber(){
    const number = Math.floor((Math.random()*1001)+1);
    return number;
}

function greeting (data){
    return(<div>
        <h1>Welcom {data.user}</h1>
        <h2 className="text-muted">Your lucky number is: {data.number}</h2>
    </div>)
}

ReactDOM.render(
    greeting(data),
    document.getElementById('root')
);