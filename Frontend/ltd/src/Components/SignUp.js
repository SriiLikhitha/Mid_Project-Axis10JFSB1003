import React, { useState } from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';

const manager=[{name: "Manager1", id: 1},{name: "Manager2", id: 2},{name: "Manager3", id: 3}]

export default function Signup(){
    let history = useNavigate();
    const [managers,setManager]=React.useState([]);
    const [managerValue,setManagerValue]=useState(null);
    const [name,setName]=useState("");
    const [empId,SetEmpId]=useState("");
    const[password,setPassWord]=useState("");
    const[passwdError,setPassWordError]=useState(false);
    const[cpassword,csetPassWord]=useState("");
    const [hide,setHide]=useState(true)

    const onClickRegister=()=>{

        fetch('http://localhost:8091/api/v1/employee', {
            method: 'POST',
            body: JSON.stringify({
                empName: name,
                empId: empId,
                 password: password,
                managerId: managerValue
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }).then((response) => response.json()).then(() => {
                history("/auth/EmpLogin")
               } );

        history("/auth/EmpLogin")
    }

    React.useEffect(()=>{
        console.log(managerValue!=0)
        if(managerValue !=0 && name.trim() && empId.trim() && password.trim() && cpassword.trim()){
            setHide(false)
        }else{
            setHide(true)
        }

    },[managerValue,name,empId,password,cpassword])

    const validateConfirmationPassword=()=>{
        if(password===cpassword){
            setPassWordError(false)
        }else{
            setPassWordError(true)
        }
    }


    React.useEffect(()=>{
        fetch('http://localhost:8092/api/v2/getallmanagers')
        .then((response) => response.json())
        .then((json) => {
            setManager(json)
        });
    },[])
    return <div className="box-form">
    <div className="left">
      <div className="overlay">
        <h2>New Employee.</h2>
        <span>
          <p>login with social media</p>
         <div> <i className="fa fa-facebook" aria-hidden="true" /></div>
         <div> <i className="fa fa-twitter" aria-hidden="true" /> Login with Twitter</div>
        </span>
      </div>
    </div>
    <div className="signup-right">
      <h5>Sign Up</h5>
      <div className="inputs">
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
        <br />
        <input value={empId} onChange={(e)=>SetEmpId(e.target.value)}  type="text" placeholder="Employee Id" />
        <br />
        <input value={password} onChange={(e)=>setPassWord(e.target.value)}  type="password" placeholder="password" />
        <input onBlur={validateConfirmationPassword} disabled={!password.trim()} value={cpassword} onChange={(e)=>csetPassWord(e.target.value)}  type="Cpassword" placeholder="Confirm password" />
        {passwdError && <span style={{color: 'red'}}>Password doesn't match</span>}
        <br />
        <br />
        <label className='manager-type'>Manager:</label>
        <select onChange={(e)=>setManagerValue(e.target.value)} class="selectpicker form-control">
                <option value={0} selected={managerValue===0}>Select your Manager</option>
                {
                    managers?.map(val=> <option selected={val.managerId==managerValue} value={val.managerId}>{val.managerName}</option>)
                }
        </select>
      </div>
      <br />
      <div className="remember-me--forget-password">
          <NavLink to={'/emp/login'} >{'Employee Login'}</NavLink>
      </div>
      <br />
      <button onClick={onClickRegister} disabled={hide || passwdError}>Register</button>
    </div>
  </div>
  
}