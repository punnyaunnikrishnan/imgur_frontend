import React, { useState, useEffect } from "react";
import userService from "../services/user.service";
import { useParams } from "react-router-dom";

function Imagebyid() {
    const { id } = useParams();
  const [image, setImage] = useState({});
  useEffect(()=>{
   
        userService.getImageById(id).then(
          (response) => {
            setImage(response.data.data);
            console.log(response.data.data);
            
          },
          (error) => {
            const _content =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            setImage(_content);
          }
        );
        },[id])

  return (
    <div> {image && 
        <img src={image.category+"/"+image.path} alt={image.path}
        className="img-fluid w-100 h-100"/>
        
        }</div>
  )
}

export default Imagebyid