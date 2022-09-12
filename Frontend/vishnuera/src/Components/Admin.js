import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Admin = () => {
    const [facultyname,setFacultyname] = useState("");
const [password,setPassword]=useState("");
const[loginStatus,setLoginStatus]=useState("");
let navigate=useNavigate();

  

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/Admin", {
      facultyname:facultyname,
      password:password,
        
      })
      .then(function(response) {
        if(response.data.message){
          setLoginStatus(response.data.message)
          if(loginStatus==="Login Successfully"){
            navigate('./Report')
            }
        }else{
          setLoginStatus(response.data[0].facultyname)
        }
        
        
      });

    
  };
    return (
    
            <div className='abg'>
            <form className='aform' onSubmit={submitHandler}>
             <Card style={{ width: '18rem' }} >
      <Card.Header>Admin Login</Card.Header>
      <Card.Body>
        
        
        <Card.Text>
            
          <label>Username</label>
          <input type="text"  onChange={(e)=>{
              setFacultyname(e.target.value);
            }}></input><br/><br/>
          <label>Password</label>
          <input type="password" value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}></input><br/><br/>
        </Card.Text>
        <Button variant="dark" type="submit">Login</Button>
      </Card.Body>
     
    </Card>
    </form><br></br><br/>
    <center><h4 >{loginStatus}</h4></center>
        </div>
        
    );
};

export default Admin;
