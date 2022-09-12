import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Eventpage = () => {
    const [userdetails,setuserdetails]=useState([ ]);
    const[eventname,setEventName]=useState("");
    
useEffect(()=>{
        axios.get("http://localhost:8000/Eventpage").then((response)=>{
             setuserdetails(response.data)
            console.log(response.data)
        })
    },[])
    return (
        <div>
            <center>
                <form action="/Eventpage" method='get'>
           Type of Event: <select
                name="eventname"
        
                onChange={(event)=>{
                    setEventName(event.target.value)
                }}
              >
                <option value={"select an event"}>Select an Event</option>
                <option value={"Workshops"}>Workshop</option>
                <option value={"Hackathons"}>Hackathons</option>
                <option value={"Club Events"}>Club Events</option>
                <option value={"Competitions"}>Competitions</option>
              </select><br/><br/>
              <button type="submit">Report</button><br/><br/>
              </form>
            <table className="ui celled table">
  <thead>

    <tr>
    <th>sno</th>
    <th>eventname</th>
    <th>username</th>
    <th>description</th>
    <th>department</th>
    <th>category</th>
   
  </tr></thead>
  <tbody>
    {userdetails.map((item)=>{
        return(
            <tr>
                <td>{userdetails.indexOf(item)+1}</td>
                <td data-label="eventname">{item.eventname}</td>
            <td data-label="username">{item.username}</td>
            <td data-label="description">{item.description}</td>
            <td data-label="department">{item.department}</td>
            <td data-label="category">{item.category}</td>
            <td><button onClick={()=>{}}>Add</button></td>
            <td><button onClick={()=>{}}>Delete</button></td>
            <td><button onClick={()=>{}}>Update</button></td>
           
            {/* <td><button onClick={()=>{setDialog(true)}}>Delete</button></td> */}
          </tr>
          
         
        )
    }) }
    
  </tbody>
</table>
{/* {openDioalog && <Dialogbox closeDialog={setDialog}/>} */}
</center>
   
        </div>
    );
};

export default Eventpage;