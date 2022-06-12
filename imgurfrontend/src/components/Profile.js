import React from "react";
import AuthService from "../services/auth.services"
const Profile =()=>{
    const currentUser=AuthService.getCurrentUser()
    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{currentUser.username}</strong> Profile
                </h3>
            </header>
            <p>
            <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)} 
            </p>
            <p>
            <strong>Id:</strong> {currentUser.data._id}
            </p>
            <p>
            <strong>Email:</strong> {currentUser.data.email} 
            </p>
            <strong>Authorities:</strong>
            <u1>
                {currentUser.roles && 
                currentUser.roles.map((role,index)=><li key ={index}>{role}</li>)}

            </u1>
        </div>
    )
}
export default Profile;