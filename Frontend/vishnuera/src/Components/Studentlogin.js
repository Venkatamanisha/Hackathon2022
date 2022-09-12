import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Studentlogin = () => {
    const [username,setUsername] = useState("");
const [password,setPassword]=useState("");

const[loginStatus,setLoginStatus]=useState("");
let navigate=useNavigate();
  

  const submitHandler = (e) => {
    axios.post("http://localhost:8000/", {
      username:username,
      password:password,
        
      })
      .then(function(response) {

        if(response.data.message){
          setLoginStatus(response.data.message)
          if(loginStatus==="Login Successfully"){
          navigate('./Upload')
          }

        }else{
          setLoginStatus(response.data[0].username)
        
        }
        
      });

    
  };
    return (
        <div className='sform'>
            <form onSubmit={submitHandler} >
             <Card style={{ width: '18rem' }} >
      <Card.Header >Student Login</Card.Header>
      <Card.Body>
        
        
        <Card.Text>
            
          <label className='colo'>Username</label>
          <input type="text"  value={username}
            onChange={(e)=>{
              setUsername(e.target.value);
            }}></input><br/><br/>
          <label className='colo'>Password</label>
          <input type="password" value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}></input><br/><br/>
        </Card.Text>
        <Button variant="dark" type="submit" onClick={()=>{submitHandler()}}>Login</Button>
        
      </Card.Body>
     
    </Card>
    </form>
    <h4 className='slog'>{loginStatus}</h4>
        </div>
    );
};

export default Studentlogin;