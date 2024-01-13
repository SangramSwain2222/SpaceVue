import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";
import './Table.css';


export const Table = () => {
    const columnDefs=[
        {headerName:"Mission Name",field:"mission",checkboxSelection:true,headerCheckboxSelection:true},
        {headerName:"Launch Company",field:"company"},
        {headerName:"Location",field:"location"},
        {headerName:"Date",field:"date"},
        {headerName:"Time",field:"time"},
        {headerName:"Rocket Types",field:"rocket"},
        {headerName:"Price",field:"price"},
        {headerName:"Mission Outcomes",field:"successful"}

    ]
    const defaultColDef={
        sortable:true,
        editable:true,
        filter:true,
        flex:1,
         floatingFilter:true
    }
    const onGridReady=(p)=>{
        console.log("grid is Ready")
        fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
        .then(resp=>resp.json()).then(resp=>
            p.api.applyTransaction({add:resp}))
    }
  return (
    
 
    <div className="ag-theme-quartz" style={{ height: 500}}> 
    <h1  className='text' align='center'>SpaceVue</h1>
 <h3 className='dtext' >Recent Space Mission Data</h3>
<AgGridReact
 columnDefs={columnDefs}
 defaultColDef={defaultColDef}
onGridReady={onGridReady}
pagination={true}
rowSelection='multiple'
onSelectionChanged={(event) => console.log(event)}
// enableCharts={true}
// enableRangeSelection={true}
    />
    </div>
    
   
  )
}


