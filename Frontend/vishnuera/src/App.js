import React from "react";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Student from "./Components/Student";
import Navbarheader from "./Components/Navbarheader";
import { Route, Routes } from "react-router-dom";
import Events from "./Components/Events";
import Admin from "./Components/Admin";
import Upload from "./Components/Upload";

import Report from "./Components/Report";
import Faculty from "./Components/Faculty";
import Eventpage from "./Components/Eventpage";
import Imageupload from "./Components/Imageupload";
const App = () => {
  return (
    <div>
      <Navbarheader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Imageupload" element={<Imageupload />} />
        <Route path="Admin/Report" element={<Report />} >
        <Route path="Student" element={<Student/>}/>
          <Route path="Faculty" element={<Faculty/>}/>
          <Route path="Eventpage" element={<Eventpage/>}/>
        </Route>
        <Route path="/Admin" element={<Admin />} >
        


        </Route>
      </Routes>
    </div>
  );
};

export default App;
