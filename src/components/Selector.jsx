import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Selector() {
  return (
    <div style={{
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
        >
          Withdraw
      </button>
    </footer>
    </div>
  );
}