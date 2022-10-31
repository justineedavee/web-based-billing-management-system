import React from "react";

import { Container, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SchoolIcon from '@mui/icons-material/School';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PercentIcon from '@mui/icons-material/Percent';
import LightbulbIcon from '@mui/icons-material/Lightbulb';


const StudentDashboard = () => {
    const data = 
    [{
      "id": 1,
      "amount": "$2.84",
      "date": "03/27/2021",
      "status": "Pending",
      "reason": "Quality-focused 4th generation system engine",
      "person_in_charge": "Cindy Eneas"
    }, {
      "id": 2,
      "amount": "$6.68",
      "date": "09/08/2021",
      "status": "Pending",
      "reason": "Self-enabling multimedia portal",
      "person_in_charge": "Rodd Basill"
    }, {
      "id": 3,
      "amount": "$7.70",
      "date": "08/22/2021",
      "status": "Pending",
      "reason": "Triple-buffered systematic process improvement",
      "person_in_charge": "Luigi Rearie"
    }, {
      "id": 4,
      "amount": "$0.40",
      "date": "09/08/2020",
      "status": "Denied",
      "reason": "Ergonomic coherent productivity",
      "person_in_charge": "Rutter Habberjam"
    }, {
      "id": 5,
      "amount": "$0.29",
      "date": "02/10/2023",
      "status": "Denied",
      "reason": "User-centric transitional array",
      "person_in_charge": "Adelbert Piscopello"
    },{
        "id": 6,
        "amount": "$0.29",
        "date": "02/10/2023",
        "status": "Denied",
        "reason": "User-centric transitional array",
        "person_in_charge": "Adelbert Piscopello"
      },{
        "id": 7,
        "amount": "$0.29",
        "date": "02/10/2023",
        "status": "Denied",
        "reason": "User-centric transitional array",
        "person_in_charge": "Adelbert Piscopello"
      }]

    return (
        <Container>
            <h1>Dashboard</h1>
            <span>Here's an overview of your Bills & Payments</span>

            <Box 
                mt="20px"
                sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr 1fr',
                    columnGap: '5rem',
                    rowGap: '2.5rem',
                    gridTemplateRows: 'auto',

                }} 
            >
                <Box 
                    sx={{
                        boxShadow: '0 7px 15px 0 rgba(0, 0, 0, .13), 0 1px 4px 0 rgba(0, 0, 0, .11)',
                        width: '100%',
                        height: '80px',
                        borderRadius: '16px',
                        padding: '10px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <LocalOfferIcon 
                        color="primary"
                        sx={{ 
                            backgroundColor: '#cfe8fc',
                            padding: '10px',
                            borderRadius: '10px',
                            fontSize: 50,
                            marginRight: '15px'
                        }}
                    />
                  
                    <Box sx ={{ display: 'flex', flexDirection: 'column' }}>
                        <h3>P30,000</h3>
                        <span style={{ opacity: '.8' }}>Tuition Fee</span>
                    </Box>
                    <KeyboardArrowRightIcon sx={{ marginLeft: 'auto' }}/>
                </Box>

                <Box 
                    sx={{
                        boxShadow: '0 7px 15px 0 rgba(0, 0, 0, .13), 0 1px 4px 0 rgba(0, 0, 0, .11)',
                        width: '100%',
                        height: '80px',
                        borderRadius: '16px',
                        padding: '10px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <AccountBalanceWalletIcon 
                        color="primary"
                        sx={{ 
                            backgroundColor: '#cfe8fc',
                            padding: '10px',
                            borderRadius: '10px',
                            fontSize: 50,
                            marginRight: '15px'
                        }}
                    />
                  
                    <Box sx ={{ display: 'flex', flexDirection: 'column' }}>
                        <h3>P15,800</h3>
                        <span style={{ opacity: '.8' }}>Remaining Balance</span>
                    </Box>
                    <KeyboardArrowRightIcon sx={{ marginLeft: 'auto' }}/>
                </Box>

                <Box 
                    sx={{
                        boxShadow: '0 7px 15px 0 rgba(0, 0, 0, .13), 0 1px 4px 0 rgba(0, 0, 0, .11)',
                        width: '100%',
                        height: '80px',
                        borderRadius: '16px',
                        padding: '10px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <ReceiptLongIcon 
                        color="primary"
                        sx={{ 
                            backgroundColor: '#cfe8fc',
                            padding: '10px',
                            borderRadius: '10px',
                            fontSize: 50,
                            marginRight: '15px'
                        }}
                    />
                  
                    <Box sx ={{ display: 'flex', flexDirection: 'column' }}>
                        <h3>P6,500</h3>
                        <span style={{ opacity: '.8' }}>Total Amount Paid</span>
                    </Box>
                    <KeyboardArrowRightIcon sx={{ marginLeft: 'auto' }}/>
                </Box>

                <Box 
                    sx={{
                        boxShadow: '0 7px 15px 0 rgba(0, 0, 0, .13), 0 1px 4px 0 rgba(0, 0, 0, .11)',
                        width: '100%',
                        height: '80px',
                        borderRadius: '16px',
                        padding: '10px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <SchoolIcon 
                        color="primary"
                        sx={{ 
                            backgroundColor: '#cfe8fc',
                            padding: '10px',
                            borderRadius: '10px',
                            fontSize: 50,
                            marginRight: '15px'
                        }}
                    />
                  
                    <Box sx ={{ display: 'flex', flexDirection: 'column' }}>
                        <h3>P5,000</h3>
                        <span style={{ opacity: '.8' }}>Scholarship Deduction</span>
                    </Box>
                    <KeyboardArrowRightIcon sx={{ marginLeft: 'auto' }}/>
                </Box>

                <Box 
                    sx={{
                        boxShadow: '0 7px 15px 0 rgba(0, 0, 0, .13), 0 1px 4px 0 rgba(0, 0, 0, .11)',
                        width: '100%',
                        height: '80px',
                        borderRadius: '16px',
                        padding: '10px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <PercentIcon 
                        color="primary"
                        sx={{ 
                            backgroundColor: '#cfe8fc',
                            padding: '10px',
                            borderRadius: '10px',
                            fontSize: 50,
                            marginRight: '15px'
                        }}
                    />
                  
                    <Box sx ={{ display: 'flex', flexDirection: 'column' }}>
                        <h3>P2,700</h3>
                        <span style={{ opacity: '.8' }}>Discount Deduction</span>
                    </Box>
                    <KeyboardArrowRightIcon sx={{ marginLeft: 'auto' }}/>
                </Box>

                <Box 
                    sx={{
                        boxShadow: '0 7px 15px 0 rgba(0, 0, 0, .13), 0 1px 4px 0 rgba(0, 0, 0, .11)',
                        width: '100%',
                        height: '80px',
                        borderRadius: '16px',
                        padding: '10px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <LightbulbIcon 
                        color="primary"
                        sx={{ 
                            backgroundColor: '#cfe8fc',
                            padding: '10px',
                            borderRadius: '10px',
                            fontSize: 50,
                            marginRight: '15px'
                        }}
                    />
                  
                    <Box sx ={{ display: 'flex', flexDirection: 'column' }}>
                        <h3>18</h3>
                        <span style={{ opacity: '.8' }}>Total Units</span>
                    </Box>
                    <KeyboardArrowRightIcon sx={{ marginLeft: 'auto' }}/>
                </Box>

            </Box>

            <Box 
                mt="50px"
                sx={{
                    boxShadow: '0 7px 15px 0 rgba(0, 0, 0, .13), 0 1px 4px 0 rgba(0, 0, 0, .11)',
                    padding: '25px',
                    borderRadius: '16px'
                }}
            >
                <span style={{ fontSize: '1.25rem' }}>Pending & Denied Transactions</span>
                <TableContainer sx={{ mt: '20px', overflow: 'scroll', maxHeight: 400}}>
                    <Table stickyHeader sx={{ minWidth: 650}}>
                        <TableHead>
                            <TableRow  sx={{
                                        color: "#cfe8fc",
                                        "& th": {
                                        fontFamily: 'inherit',
                                        color: '#06c'
                                        
                                    }
                                }}>
                                <TableCell align="center">Transaction ID</TableCell>
                                <TableCell align="center">Amount Paid</TableCell>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Payment Status</TableCell>
                                <TableCell align="center">Reason</TableCell>
                                <TableCell align="center">Person in Charge</TableCell>
                                <TableCell align="center">Remarks</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           {data.map(item => (
                               <TableRow
                                    align="right"
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                               >
                                   <TableCell align="center">{item.id}</TableCell>
                                   <TableCell align="center">{item.amount}</TableCell>
                                   <TableCell align="center">{item.date}</TableCell>
                                   <TableCell align="center" sx={{ color: item.status === 'Pending' ? "#06c" : "crimson" }}>{item.status}</TableCell>
                                   <TableCell align="center">{item.reason}</TableCell>
                                   <TableCell align="center">{item.person_in_charge}</TableCell>
                                   <TableCell align="center">{item.status !== 'Pending' && <Button variant='contained'>Resubmit</Button>}</TableCell>
                               </TableRow>
                           ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>
            
        </Container>
        
    )
}

export default StudentDashboard