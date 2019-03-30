import React from 'react';

export default (props) =>{
    const {name, label, type, value, onChange} = props
    return (
      <div className="form-group">
        <label htmlFor="">{label}</label>
        <input  name={name} className="form-control" type={type} value={value} onChange={onChange}/>
      </div>  
    )
}