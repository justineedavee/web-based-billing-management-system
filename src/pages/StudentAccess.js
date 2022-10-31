
import SideBar from '../components/SideBar'
import StudentDashboard from '../components/student/StudentDashboard'

import { Box, Container } from '@mui/material'

export default function StudentAccess(){
    
    return(
        <Container 
            sx={{
                backgroundColor: '#cfe8fc',
                minWidth: '100vw',
                minHeight: '100vh',
                paddingBlock: '30px'
            }}
        >
            
            <SideBar />
            <Box 
                sx={{ 
                    bgcolor: '#fff', 
                    height: 'calc(100vh - 60px)',
                    marginLeft: '250px',
                    marginRight: '10px',
                    borderRadius: '15px',
                    paddingBlock: '25px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
                    overflowY: 'auto'
                }} 
            >
                <StudentDashboard />
            </Box>
        </Container>
    )
}