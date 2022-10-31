

import { Box, Button } from '@mui/material'

import DashboardIcon from '@mui/icons-material/Dashboard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HistoryIcon from '@mui/icons-material/History';


const SideBar = ({ changeTab, tab }) => {
    return (
        <Box
            sx={{
                backgroundColor: '#cfe8fc',
                width: '250px',
                height: '100vh',
                position: 'fixed',
                top: '0',
                left: '0',
                padding: '25px 10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                visibility: 'visible'
            }}
        >
            {/* //Content */}
            
                <img 
                    src="https://images.unsplash.com/photo-1666876033676-e1f1bbcc890e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    height = "170px"
                    width = "170px"
                    style = {{ borderRadius: '50%', marginBottom: '2rem' }}
                />  

                <h2>Justine Dave</h2>
                <span>Web & Mobile Application</span>
            <Box mt="75px" sx={{ 
                width: '250px', 
                padding: '10px 5px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }}>
                <Box 
                    onClick={() => changeTab(1)}
                    sx={{ 
                    opacity: '.8', 
                    cursor: 'pointer' ,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 5px',
                    color: `${tab === 1 ? '#06c' : 'inherit'}`,

                }}>
                    <DashboardIcon sx={{ marginRight: '10px' }}/>
                    <span style= {{ fontSize: '1.25rem' }}>Dashboard</span>
                </Box>

                <Box 
                    onClick={() => changeTab(2)}
                    sx={{ 
                    opacity: '.8', 
                    cursor: 'pointer' ,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 5px',
                    color: `${tab === 2 ? '#06c' : 'inherit'}`,
                    
                }}>
                    <CreditCardIcon sx={{ marginRight: '10px' }}/>
                    <span style= {{ fontSize: '1.25rem' }}>Payment Form</span>
                </Box>

                <Box 
                    onClick={() => changeTab(3)}
                    sx={{ 
                    opacity: '.8', 
                    cursor: 'pointer' ,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 5px',
                    color: `${tab === 3 ? '#06c' : 'inherit'}`,
                    
                }}>
                    <HistoryIcon sx={{ marginRight: '10px' }}/>
                    <span style= {{ fontSize: '1.25rem' }}>History</span>
                </Box>
            </Box>

            <img 
                src="https://raw.githubusercontent.com/Pyro247/Billing-Management-System/main/images/logo.png" 
                style= {{ filter: 'invert(42%) sepia(76%) saturate(7270%) hue-rotate(198deg) brightness(90%) contrast(101%)', marginTop: 'auto' }}
            />
        </Box>
    )
    
}

export default SideBar