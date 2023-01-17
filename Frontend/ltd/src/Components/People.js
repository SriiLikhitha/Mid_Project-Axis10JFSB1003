import React from 'react';

const getRandomColor=() =>{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export default function People(){

    const [employee,setEmployee]=React.useState([
      
    ]);

const onDelete=(id)=>{
    fetch('http://localhost:8091/api/v1/deleteTask/'+id, {
  method: 'DELETE',
  body: JSON.stringify({}),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response) => response.json())
  .then(() => {
        let employee=[...employee];
        const index=employee.findIndex(x => x.id ===id);
        if(index>=0){
            employee.splice(index,1)
        }
        setEmployee(employee)  
     } );

}

    React.useEffect(()=>{
    fetch('http://localhost:8091/api/v1/getEmpByMid/'+localStorage.getItem('userName')).then((response) => response.json()).then((json) => {
        setEmployee(json)
      }).catch((err)=>console.log(err));
    },[])


    return <><div className="topnav">
     <h3 className='header'>Peoples</h3>
    <div className="search-container">
    </div>
  </div>
  <div className='people-container' style={{paddingLeft:16}}>
    {!employee.length && <h2 style={{textAlign: 'center'}}>No users Found</h2>}
    {employee?.map((val)=>
    <div className='people-div'>
          <div className="profile">
     <div style={{backgroundColor: getRandomColor()}} class="circle">
       <p class="circle-inner">{val.empName?.slice(0,1)}</p>
     </div>
     <h4><b>Name:</b> {val.empName}</h4>
    <h4><b>Id:</b>{val.empId}</h4>
   </div>  
     <br/>
  
 </div>
    
    )}
    
 

  </div>
  </>
}
