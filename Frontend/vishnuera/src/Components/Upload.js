import React, { useState } from "react";
import "./Upload.css";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const[eventname,setEventName]=useState("");
  const[username,setUserName]=useState("");
  const[description,setDescription]=useState("");
  const[department,setDepartment]=useState("");
  const[category,setCategory]=useState("");
//   const [file, setFile] = useState();
//   const [fileName, setFileName] = useState("");
//   let navigate=useNavigate();
//   const saveFile = (e) => {
//     setFile(e.target.files[0]);
//     setFileName(e.target.files[0].name);
//   };

 
  const displayOutput = (e) => {
    e.preventDefault()

    axios.post("http://localhost:8000/Upload",{
        eventname:eventname,
        username:username,
        description:description,
        category:category,
        department:department,
    }).then(()=>{
        alert("Inserted Successfully");
       
        // navigate('/Imageupload')
        
        
    })
  };
//   const uploadFile =  async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("image", file);
//     formData.append("fileName", fileName);
//     try {
//       const res = await axios.post("http://localhost:8000/Upload", formData).then(()=>{
//         alert("uploaded image")
//       });
//       console.log(res);
//     } catch (ex) {
//       console.log(ex);
//     }
//   };
  return (
    <div className="back">
      <center>
        <div className="form">
          <form onSubmit={displayOutput}>
            <div>
              <h2>
                <i>
                  <b>Post an Event</b>
                </i>
              </h2>
            </div>
            <br></br>
            <br></br>
            <div className="inputclass">
              <label>&nbsp;&nbsp;&nbsp;Name of an Event:</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <select
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
              </select>
            </div>

            <br></br>
            <div className="nameinput">
              <label>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User Name:
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                name="username"
                placeholder="Name"
                
                onChange={(event)=>{
                    setUserName(event.target.value)
                }}
              ></input>
              </div>
              <br></br>
             
              <div className="descinput">
                <label> Description:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="textarea"
                  name="description"
                  placeholder="Description"
                  
                  onChange={(event)=>{
                    setDescription(event.target.value)
                }}
                ></input>
              </div>
              <br></br>
              <div className="inputclass">
              <label>&nbsp;&nbsp;&nbsp;Department:</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <select
                name="department"
     
                onChange={(event)=>{
                    setDepartment(event.target.value)
                }}
              >
                <option value={"department"}>Departments</option>
                <option value={"IT"}>IT</option>
                <option value={"CSE"}>CSE</option>
                <option value={"ECE"}>ECE</option>
                <option value={"EEE"}>EEE</option>
                <option value={"CIVIL"}>CIVIL</option>
                <option value={"MECHANICAL"}>MECHANICAL</option>
              </select>
            </div>

            <br></br>
            <div className="inputclass">
              <label>&nbsp;&nbsp;&nbsp;Category:</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <select
                name="category"
            
                onChange={(event)=>{
                    setCategory(event.target.value)
                }}
              >
                <option value={"category"}>Category</option>
                <option value={"student"}>Student</option>
                <option value={"faculty"}>Faculty</option>
                
              </select>
            </div>
            <br></br>
            {/* <div className="imageclass">
              <label>Image:</label>
              <br></br>
              <input type="file" onChange={saveFile} />
              <br></br>
              <button onClick={uploadFile}>Upload</button>
            </div> */}

            
            <br></br>

            <div className="btn">
              <button  type='submit'>
                Upload Post
              </button>
              <br></br>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
};

export default Upload;