import { React, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { display } from '@mui/system';
import "./TransactionsData.css"
import Selector from '../Selector';

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

const rows = [
  { id: 1, tokenName: 'ETH', amount: 22.02, timestamp: "10-07-2022 17:55:25"},
  { id: 2, tokenName: 'MATIC', amount: 100, timestamp: "10-07-2022 17:55:25" },
  { id: 3, tokenName: 'ETH', amount: 20, timestamp: "10-07-2022 17:55:25"},
  { id: 4, tokenName: 'ETH', amount: 10, timestamp: "10-07-2022 17:55:25"},
];




export default function TransactionsData() {
  const [isShown, setIsShown] = useState(false);
  const handleEvent= () => {
    setIsShown(current => !current)
  };

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
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        onSelectionModelChange={handleEvent}
      />
    </Box>
    {isShown && <Selector />}
    </div>
  );
}
