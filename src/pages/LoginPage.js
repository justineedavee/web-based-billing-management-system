import React from "react"
import './LoginPage.css'
import { 
    TextField, 
    Button
} from '@mui/material';

export default function LoginPage({ handleClick }){
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    return(
        <div className="login--page">
            <form className="login--form">
                <strong>Login</strong>
                <TextField 
                    id="outlined-basic" 
                    label="Username" 
                    variant="outlined" 
                    margin="normal" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value) }
                />

                <br />

                <TextField 
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value) }
                />
                
                <br />
                <Button variant="contained" onClick={() => handleClick(username, password)}>Login</Button>
            </form>
        </div>
    )
}