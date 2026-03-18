import React,{useState} from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './components/LoginForm';

const App = () => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("token")? true : false
  );
  return (
    <Routes>
     <Route path="/" element = {<Navigate to = "/login" />} />
     <Route path="/login" element={<Login setIsAuth={setIsAuth} />}/>

     <Route path="/dashboard" 
      element={isAuth ? <Dashboard /> : <Navigate to="/login"/>}
      />
    </Routes>
  );
}

export default App;

