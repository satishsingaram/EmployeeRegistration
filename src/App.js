import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import logo from './images.png';
import './App.css'

class App extends Component {

  render() {
    const data = [
    {
      empId: 'sataram',
      empName: 'Satish Singaram',
      currentSkills:'Java Groovy',
      newSkills:'Python',
      newSkillLevel:'2'

    }]

    const columns = [{
      Header: 'AD Id',
      accessor: 'empId'
    },{
      Header: 'Employee Name',
      accessor: 'empName'
    },{
           Header: 'Current Skills',
           accessor: 'currentSkills'
    },{
        Header: 'New Skill',
        accessor: 'newSkills'
    },{
        Header: 'New Skill Level',
        accessor: 'newSkillLevel'
    }
    ]

    return (
    <div className="App">
            <header className="App-header">
            <div className="App-logo">
            <div className="Page-heading">Welcome to Drona Program Registration</div></div>
            </header>
            <p className="App-intro">
            <div className="App-form"></div>
                <div className="App-table">
                  <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize = {1}
                    pageSizeOptions = {[3, 6]}
                    showPagination= {false}
                  />
                </div>
            </p>
          </div>

    )

  }
}

export default App;