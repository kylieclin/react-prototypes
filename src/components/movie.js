import React from 'react';

export default props =>{
    const {info} = props
    console.log(info);
    return(
        <div className="card text-center">
            <img className="card-img-top mt-2"src={info['im:image'][2].label} alt=""/>
            <div className="card-block">
                <h2 className="card-title">{info.title.label}</h2>
                <p className="card-text">{info.summary.label}</p>
                <a href={info.id.label} className="btn">iTunes Preview</a>
            </div>

        </div>
    )
}