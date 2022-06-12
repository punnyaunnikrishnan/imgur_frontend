import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//importing components
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import Userimage from "./components/Userimage";
import Imagebyid from "./components/Imagebyid";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      {/* <Header/> component */}

      <div className="container mt-3">
        {/* routes */}
        <Routes>
          <Route exact path="/" element={<BoardUser />} />
          <Route exact path="/:id" element={<Imagebyid />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/user" element={<Userimage />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
