import React from 'react';

const status=['New', 'Inprogress','Done']

export default function EmployeeTaskList(){
    const [taskList,setTastList]=React.useState([]);
    const [employee,setEmployee]=React.useState([]);
    const [show,setShow]=React.useState(false);
    const [text,setText]=React.useState("")

const onDelete=(id)=>{
    fetch('http://localhost:8091/api/v1/deleteTask/'+id, {
  method: 'DELETE',
  body: JSON.stringify({}),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response) => response.json())
  .then(() => {
       getTaskData()
     } );

}

const onAddTask=()=>{
    const value=document.getElementById('employee');
    const value1=document.getElementById('createtask')
    
    fetch('http://localhost:8091/api/v1/saveTask', {
        method: 'POST',
        body: JSON.stringify({
            projectId: localStorage.getItem('type'),
            taskDescription: text ,
            empId: value.value,
            managerId: localStorage.getItem('userName'),
            status: value1.value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json()).then(() => {
        getTaskData();
        setShow(false)
           } );

}

const onUpdate=(id,val)=>{
const value=document.getElementById(id)
fetch('http://localhost:8091/api/v1/updateTask/'+val.id, {
  method: 'PUT',
  body: JSON.stringify({
  status: value.value
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response) => response.json()).then((json) => {
        let taskList=[...taskList];
        const index=taskList.findIndex(x => x.id ===val.id);
        if(index>=0){
            taskList[index].status=value.value
        }
        setTastList(taskList)

     }).catch((err)=>console.log(err));
    }

    
    const getTaskData=()=>{
      const userName=localStorage.getItem("userName")
      console.log(userName)
      const id=localStorage.getItem('mode')==='Employee'? localStorage.getItem('userName'):localStorage.getItem('type')
        const url=`http://localhost:8091/api/v1/${localStorage.getItem('mode')==='Employee' ? 'getTaskByEmpId' : 'getTaskByProjectId'}/${id}`; 
        fetch(url).then((response) => response.json()).then((json) => {
        setTastList(json)
      }).catch((err)=>console.log(err));
    }

    React.useEffect(()=>{
      getTaskData()
  if(localStorage.getItem('mode')!=='Employee'){
    fetch('http://localhost:8091/api/v1/getEmpByMid/'+localStorage.getItem('userName')).then((response) => response.json()).then((json) => {
        setEmployee(json)
      }).catch((err)=>console.log(err));
  }
    },[])


    return <><div className="topnav">
     <h3 className='header'>TasksList</h3>
    <div className="search-container">
   {localStorage.getItem('mode')!=='Employee' && <button onClick={()=>setShow(true)} type="submit"><i className="fa fa-plus" style={{fontSize:18,color:'green'}}></i>AddTask</button>}
        {/* <input type="text" placeholder="Search.." name="search" />
        <button type="submit"><i className="fa fa-search"></i></button> */}
    </div>
  </div>
  {show &&
  <div className="popup" id="popup1">
    <h3>CreateTask </h3>
    <h3 style={{marginBottom: 0}}>TaskDescription:</h3>
    <textarea onChange={(e)=>setText(e.target.value)} style={{ width: '100%'}} />
    <h6 className='tast-create' style={{marginBottom: 0}}><b>Employee:</b></h6>
    <select id={'employee'} style={{marginBottom: 30,marginRight: 10}} class="selectpicker form-control">
             {
                 employee?.map(value=> <option value={value.empId}>{value.empName}</option>)
             }
     </select>
    <h6 className='tast-create' style={{marginBottom: 0}}><b>Status:</b></h6>
    <select id={'createtask'} style={{marginBottom: 30}} class="selectpicker form-control">
             {
                 status?.map(value=> <option value={value}>{value}</option>)
             }
     </select>
     <br />
     <button style={{marginRight: 10}} onClick={()=>setShow(false)}  className='button-style'>Cancel</button>
     <button onClick={()=>onAddTask()} className='button-style'>AddTask</button>
</div>
}
  <div className='employee-container' style={{paddingLeft:16}}>
    {!taskList.length && <h2 style={{textAlign: 'center'}}>No Tasks Found</h2>}
    {taskList?.map((val)=>
    <div>
    <h4><b>TaskId:</b> {val.id}</h4>
    <h4><b>EmployeId:</b>{val.empId}</h4>
    <h4><b>ProjectId:</b> {val.projectId}</h4>
    <h6 className='tast-create' style={{marginBottom: 0}}><b>TaskDescription:</b></h6>

    <p>{val.taskDescription}</p>
    <h6 style={{marginBottom: 0}}><b>Status:</b></h6>
    <select id={'selected-box'+val.id} style={{marginBottom: 30}} class="selectpicker form-control">
             {
                 status?.map(value=> <option selected={val.status==value} value={value}>{value}</option>)
             }
     </select>
     <br/>
   {localStorage.getItem('mode')!=='Employee' && <button onClick={()=>onDelete(val.id)}>Delete</button> }
    <button onClick={()=>onUpdate('selected-box'+val.id, val)}>Update</button>
 </div>
    
    )}
    
 

  </div>
  </>
}
