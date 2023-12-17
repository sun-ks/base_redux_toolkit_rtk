import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TextField, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CoursesList = ({data}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(()=>{
    setFilteredData(data)
    setFilterText('');
  }, [data]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRowClick = (event, rowData) => {
    const {
      cc,
      exchangedate,
      r030,
      rate,
      txt
    } = rowData;

    navigate(`/edit-course?&cc=${cc}&exchangedate=${exchangedate}&r030=${r030}&txt=${txt}&rate=${rate}&cc=${cc}`);
  };

  const [filteredData, setFilteredData] = useState(data);
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setFilterText(searchText);
  
    const filteredItems = data.filter(({ cc, txt, r030, rate }) =>
      cc.toLowerCase().includes(searchText) ||
      txt.toLowerCase().includes(searchText) ||
      r030.toString().includes(searchText) ||
      rate.toString().includes(searchText)
    );
  
    setFilteredData(filteredItems);
  };

  return (
    <>
      <TextField
        data-testid="courses-list"
        label="Filter Currency"
        variant="outlined"
        value={filterText}
        onChange={handleFilterChange}
        size="small"
        sx={{ marginBottom: '20px' }}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, i) => (
              <TableRow key={`${item.cc}-${i}`} onClick={(e) => handleRowClick(e, item)}>
                <TableCell>{item.exchangedate}</TableCell>
                <TableCell>{item.cc}</TableCell>
                <TableCell>{item.txt}</TableCell>
                <TableCell>{item.r030}</TableCell>
                <TableCell>{item.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 30, 40, { label: 'All', value: -1 }]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )};
  
  export default CoursesList;