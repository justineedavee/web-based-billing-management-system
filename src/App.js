import React from 'react'
import './App.css';

import LoginPage from "./pages/LoginPage"
import StudentAccess from './pages/StudentAccess';

function App() {
  const account = {
    username: 'admin',
    password: 'admin',
  }
  const [view, setView] = React.useState('')

  React.useEffect(() => {
    const checkAccount = () => {
      if(localStorage.length <= 0){
        setView('')
      }else{
        setView('student')
      }
    }
    checkAccount()
  }, [])

  const handleClick = (username, password) => {
    if(username === account.username && password === account.password){
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)
      setView('student')
    }else{
      alert("invalid")
    }
  }

  return (
    <div className="App">
      {!view && <LoginPage handleClick={handleClick}/>}
      {view === 'student' && <StudentAccess />}
    </div>
  );
}

export default App;
