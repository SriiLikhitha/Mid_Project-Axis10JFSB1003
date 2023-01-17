import React, {useState} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';

export default function Login({type}){
    const isEmp= type==='emp' ? true : false;
    let history = useNavigate();
    const [userName,setUserName]=useState("");
    const [password,setPassWord]=useState("");
    const [error,setError]=useState(false);

    React.useEffect(()=>{
        console.log(localStorage.getItem("userName"))
        if(localStorage.getItem("userName")?.length){
            history("/app")
        }
    },[type])
  
  const  onClick=()=>{
        const url= isEmp ? `http://localhost:8091/api/v1/employee/${userName}`: `http://localhost:8092/api/v2/${userName}`;
        fetch(url).then((response) => response.json()).then((json) => {
          console.log(">>>",json)
    if(isEmp && json.password==password){
        setError(false)
        history("/app")
        localStorage.setItem("mode", 'Employee')
        localStorage.setItem('userName', json.empId);
       localStorage.setItem('name', json.empName);
       localStorage.setItem('type', json.managerId);
       
    }else if(!isEmp && json.managerPassword==password){
        localStorage.setItem("mode", 'Manager')
        localStorage.setItem('userName', json.managerId);
       localStorage.setItem('name', json.managerName);
       localStorage.setItem('type', json.projectId);
       setError(false)
        history("/app")
       
    }else{
        setError(true)
        alert("Enter Valid Credentials!!")
    }
    
  }).catch((error)=>{console.log("login",error)});
    
    }


    return <div className="box-form">
    <div className="left">
      <div className="overlay">
        <h1>{isEmp ? 'Employee' : 'Manager'} Login.</h1>
       {isEmp && <span>
          <p>login with social media</p>
         <div> <i className="fa fa-facebook" aria-hidden="true" /></div>
         <div> <i className="fa fa-twitter" aria-hidden="true" /> Login with Twitter</div>
        </span> }
      </div>
    </div>
    <div className="right">
      <h5>Login</h5>
     {isEmp && <p>Don't have an account? <NavLink to="/auth/EmpSignup">Create Your Account</NavLink> it takes less than a minute</p> }
      <div className="inputs">
        <input value={userName} onChange={e=>setUserName(e.target.value)} type="text" placeholder="user name" />
        <br />
        <input value={password} onChange={e=>setPassWord(e.target.value)} type="password" placeholder="password" />
        {error && <span style={{color: 'red'}}>Password doesn't match</span>}
      </div>
      <br />
      <div className="remember-me--forget-password">
          <NavLink to={isEmp ? '/auth/MngLogin' : '/auth/EmpLogin'} >{isEmp ? 'Manager Login' : 'Employe Login'}</NavLink>
        <p>forget password?</p>
      </div>
      <br />
      <button onClick={onClick} disabled={!userName.trim() || !password.trim()}>Login</button>
    </div>
  </div>
  
}