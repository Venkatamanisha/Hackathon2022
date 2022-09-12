import React from "react";
import "./Home.css";
import Facultylogin from "./Facultylogin";
import Studentlogin from "./Studentlogin";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
<div className="imageshome"> 
  <img src="https://www.fbk.eu/wp-content/uploads/2019/07/hackathon-microsoft-FBK_1600x600.jpg"height='250px'width="100%"></img>
</div>
<div className="homebg">
      <NavLink to ="/"className="fl"><Facultylogin /></NavLink>
      <NavLink to ="/"className="fl"><Studentlogin /></NavLink>
      
    <div className="footer">
    <Marquee className="mar">
    <h4 >Student has to login through their respective register numbers</h4>
    
  </Marquee>
</div>
</div>
    
</div>

    
   
  );
};

export default Home;
