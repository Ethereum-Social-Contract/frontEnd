import { React, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { display } from '@mui/system';
import "./TransactionsData.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const timestamp = Date.now();

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'tokenName',
    headerName: 'Token Name',
    width: 150,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 150,
    editable: true,
  },
  {
    field: 'timestamp',
    headerName: 'Timestamp',
    type: 'date',
    width: 160,
    editable: true,
  },
];


/*const rows = [

  { id: 1, tokenName: 'ETH', amount: 22.02, timestamp: "10-07-2022 17:55:25"},
  { id: 2, tokenName: 'MATIC', amount: 100, timestamp: "10-07-2022 17:55:25" },
  { id: 3, tokenName: 'ETH', amount: 20, timestamp: "10-07-2022 17:55:25"},
  { id: 4, tokenName: 'ETH', amount: 10, timestamp: "10-07-2022 17:55:25"},
];
*/




export default function TransactionsData() {
  const [isShown, setIsShown] = useState(false);
  const [initialState, changeState] = useState(false);
  const handleEvent= (event) => {
    setIsShown(current => !current)
    window.currentRow=event;
  };
  function deleteData(){
    if(!window.currentRow) return;
    window.data.splice(window.currentRow-1, 1)
    changeState(current => !current)
  }

  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      paddingTop:'5vh',
      alignContent:'center',
      justifyContent:'center',
      flexDirection:'column'
    }}>
    <Box sx={{ display: 'flex', height: '42vh', width: '42vw', alignSelf: 'center', justifySelf:'center'}}>
      <DataGrid
        rows={window.data.map((item,index) => ({id:index+1,tokenName:item[0],amount:item[1],timestamp:item[2].toLocaleString()}))}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        onSelectionModelChange={handleEvent}
      />
    </Box>
    {isShown && <><div style={{
    display: 'flex',
    width: '100vw',
    paddingTop:'1vh',
    alignContent:'center',
    justifyContent:'center'
  }}>
<FormControl>
  <FormLabel id="demo-row-radio-buttons-group-label" style={{display:'flex', justifySelf:'center', alignSelf:'center'}}>Select privacy</FormLabel>
  <RadioGroup
    row
    aria-labelledby="demo-row-radio-buttons-group-label"
    name="row-radio-buttons-group"
  >
    <FormControlLabel value="public" control={<Radio />} label="Public"/>
    <FormControlLabel value="private" control={<Radio />} label="Private" />
  </RadioGroup>
</FormControl>
<footer className="p-4">
  <button
    type="submit"
    className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
    onClick={deleteData}
    >
      Withdraw
  </button>
</footer>
</div></>}
    </div>
  );
}

