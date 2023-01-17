import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";


const sideMenu=[
{
    name: "Tasks",
    icon: 'fas fa-desktop',
    path:"/app/tasks",
},
{
    name: "People",
    icon: 'fas fa-user-friends',
    path:"/app/peoples"
},
{
    name: "Manager Login",
    icon: 'fas fa-user-shield',
    path:"/auth/mngLogin",
},
{
    name: "Log Out",
    icon: 'fas fa-cog',
    path:"/auth/empLogin",
}
]

const getRandomColor=() =>{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export default function MainMenu(){
    const location=useLocation()
    let navigate = useNavigate();
    const [color,setColor]= React.useState("")
    const [userName,setUserName]= React.useState("")
    const [name,setName]= React.useState("")
    const [mode,setMode]= React.useState("")
  React.useEffect(()=>{
    if(location.pathname==='/app'){
        navigate('/app/tasks')
    }

},[location])
React.useEffect(()=>{
    setColor(getRandomColor())
    setUserName(localStorage.getItem("userName"))
    setName(localStorage.getItem("name"))
    setMode(localStorage.getItem("mode"))
},[])

const onClickLink=(path)=>{
    if(path==='/auth/mngLogin' || path==='/auth/empLogin' ){
    localStorage.removeItem("userName");
    localStorage.removeItem("name");
    localStorage.removeItem("mode");
    localStorage.removeItem("type");
    }
}


 return <div className="wrapper">
 <div className="section">
   <div className="container">
     <Outlet />
   </div>
 </div>
 <div className="sidebar">
   <div className="profile">
     <div style={{backgroundColor: color}} class="circle">
       <p class="circle-inner">{name?.slice(0,1)}</p>
     </div>
     <h3>{name}</h3>
     <p>{mode==='Employee' ? 'Software Engineer' : 'Manager'}</p>
   </div>
   <ul className="menu-container">
    {sideMenu.map(val=>{
     if(mode==='Employee' && val.path==='/app/peoples'){
        return null;
     }
   return <li>
        
       <Link onClick={()=>onClickLink(val.path)} to={val.path} className={val.path===location.pathname && "active"}>
         <span className="icon"><i className={val.icon} /></span>
         <span className="item">{val.path==='/auth/mngLogin' ? mode==='Employee' ? 'Manager Login' : 'Employee Login' : val.name}</span>
       </Link>
     </li>})
}    
   </ul>
 </div>
</div>


}