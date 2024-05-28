import { Alert, AppBar, Autocomplete, Avatar, Badge, Box, Button, ButtonGroup, Card, CardContent, Checkbox, CircularProgress, IconButton, LinearProgress, Pagination, Paper, Skeleton, Table, TableCell, TableRow, TextField, Tooltip, Typography } from '@mui/material'
import { deepPurple, orange, pink, yellow } from '@mui/material/colors'
import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { CiMail } from 'react-icons/ci'


const App12 = () => {

  return (
    <div>
      <AppBar position='static'><Typography variant='h2'>Hello MUI </Typography></AppBar>
      <Card sx={{ margin: 2, width: 275 }}><CardContent >
        Hi mohammed arshad you are doing well and going to be happy with what you have and forgiving is the
        best habit in the world
      </CardContent></Card>
      <Box
        height={200}
        width={200}
        my={2}
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: '2px solid grey' }}
      >
        This Box uses MUI System props for quick customization.
      </Box>
      <ButtonGroup>
        <Button variant="outlined" startIcon={<FaTrash />}>Delete</Button>
        <Button variant="outlined" startIcon={<FaTrash />}>Delete</Button>
        <Button variant="outlined" startIcon={<FaTrash />}>Delete</Button>
      </ButtonGroup>
      <Tooltip title='delete'> <IconButton aria-label='delete' color='secondary'><FaTrash /></IconButton></Tooltip>
      <Checkbox defaultChecked color='success' />
      <Checkbox defaultChecked sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }} />
      <p><Avatar sx={{ bgcolor: deepPurple[600] }}>AM</Avatar></p>
      <p><Badge badgeContent={4} color='success'><CiMail color='action' /></Badge></p>
      <Table>
        <TableRow>
          <TableCell>hi</TableCell>
          <TableCell>hello</TableCell>
          <TableCell>welcome</TableCell>
        </TableRow>
      </Table>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={20} disabled />
      <br />
      <Typography variant='h1'>Hello Arshad</Typography>
      <Alert severity='info'>information</Alert>
      <Alert severity='error'>error</Alert>
      <Alert severity='success'>success</Alert>
      <Alert severity='warning'>warn</Alert>
      <LinearProgress color='success' />
      <CircularProgress color='error' />
      <Skeleton variant="circular" width={40} height={40} /><br />
      <Skeleton variant="rectangular" width={210} height={60} /><br />
      <Skeleton variant="rounded" width={210} height={60} />
    </div>
  )
}

export default App12