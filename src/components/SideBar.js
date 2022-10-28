import { Box, Button } from '@mui/material'

import DashboardIcon from '@mui/icons-material/Dashboard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HistoryIcon from '@mui/icons-material/History';


const SideBar = () => {
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
            <Box mt="100px" sx={{ display: 'block', marginInline: 'auto' }}>
                <Button 
                    sx={{ 
                        width: '250px',
                        marginBlock: '5px',
                        paddingBlock: '15px',
    
                    }}
                    variant='contained'
                 >
                     <DashboardIcon />Dashboard
                </Button>

                <Button 
                    sx={{ 
                        width: '250px',
                        marginBlock: '5px',
                        paddingBlock: '15px',
                    }}
                    variant='outlined'
                 >
                     <CreditCardIcon />Payment Form
                </Button>
               
                <Button 
                    sx={{ 
                        width: '250px',
                        marginBlock: '5px',
                        paddingBlock: '15px',
                    }}
                    variant='outlined'
                 >
                     <HistoryIcon />History
                </Button>
                
            </Box>

            <img 
                src="https://raw.githubusercontent.com/Pyro247/Billing-Management-System/main/images/logo.png" 
                style= {{ filter: 'invert(42%) sepia(76%) saturate(7278%) hue-rotate(198deg) brightness(90%) contrast(101%)', marginTop: 'auto' }}
            />
        </Box>
    )
    
}

export default SideBar