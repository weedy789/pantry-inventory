import React, {useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
//import "./App.css";
import { AgGridReact } from 'ag-grid-react'; 
import 'ag-grid-community/styles/ag-grid.css'; //core grid CSS for AgGrid
import 'ag-grid-community/styles/ag-theme-alpine.css'; //optional css for AgGrid

const [rowData, setRowData] = useState(); //set rowData to array of objects
const [columnDefs, setColumnDefs] = useState([
  {field: 'make', filter: true}, 
  {field: 'model', filter:true},
  {field: 'price'}
]);

//example data from AgGrid server
useEffect(() => {
  fetch('https://www.ag-grid.com/example-assets/row-data.json')
  .then(result => result.json())
  .then(rowData => setRowData(rowData))
}, []);


export default function Home() {
  return (
    <div>
      <Container>
        <centre>
          <h1> hi </h1>
          <AgGridReact
                       rowData={rowData} // Row Data for Rows

           columnDefs={columnDefs} // Column Defs for Columns
           defaultColDef={defaultColDef} // Default Column Properties

           animateRows={true} // Optional - set to 'true' to have rows animate when sorted
           rowSelection='multiple' // Options - allows click selection of rows
          />
        </centre>
      </Container>
    </div>
  );
}
