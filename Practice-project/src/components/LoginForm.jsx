import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email:"",
    password:""
  });

 const handleChange= (e) =>{
    setForm({
        ...form,
        [e.target.name] : e.target.value 
    });
 };

 const handleSubmit= (e) =>{
    e.preventDefault();
    console.log("submit")

    //Fake Login
   
    if (form.email === "Vai@19" && form.password === "1234"){
        localStorage.setItem("token","1119");
        navigate("/dashboard");
    }
    else{
        alert("Enter Valid Credentials")
    }
 };



  return (
    <form 
    onSubmit={handleSubmit}>
        <input  name="email" onChange={handleChange} placeholder="email" /><br />
        <input  name="password" type="password" onChange={handleChange} placeholder="password" /><br />
        <button type="submit">Login</button>
          
    </form>
  )
};

export default Login;
