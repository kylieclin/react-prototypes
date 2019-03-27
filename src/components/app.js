import React from 'react';
import Table from './table';

const students =[{name: 'Dan', course:'Java', grade: 100},{name: 'Vivi', course:'Cook', grade: 100},{name: 'Jo', course:'PE', grade: 100}];


export default ()=>{
    return (<div className="container">
        <h1>Student Grade Table</h1>
        <Table data={students}/>
    </div>)
}


