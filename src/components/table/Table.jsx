import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('USA', 1500, 56.35),
  createData('Germany', 800, 33.25),
  createData('Australia', 760, 15.45),
  createData('United Kingdom', 450, 25.00),
  createData('Romania', 620, 10.25),
  createData('Brazil', 230, 75.00),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table" style={{backgroundColor: "#191C24", color: "#fff",'&:last-child td, &:last-child th': { border: 0 }}}>
        <TableHead>
          <TableRow>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              style={{ '&:nth-last-of-type(3)': { borderBottom: "red" } }}
            >
              <TableCell component="th" scope="row" style={{color: "#fff", borderBottom: "1px solid #333", padding: "20px"}}>
                {row.name}
              </TableCell>
              <TableCell align="right" style={{color: "#fff", borderBottom: "1px solid #333"}}>{row.calories}</TableCell>
              <TableCell align="right" style={{color: "#fff", borderBottom: "1px solid #333"}}>{row.fat}</TableCell>
              <TableCell align="right" style={{color: "#fff", borderBottom: "1px solid #333"}}>{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}