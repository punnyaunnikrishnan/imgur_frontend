import React, { useEffect, useState } from "react";
import userService from "../services/user.service";
// import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useParams } from "react-router-dom";
import Addimage from "./Addimage";

function Userimage() {
  const [images, setImages] = useState([]);

  const handleDelete = (id) => {
    // e.preventDefault();
    userService.deleteImage(id).then(() => {
      window.alert("image deleted!");
      window.location.reload();
    });
  };
  const toggleLike = (id) => {
    console.log(id);
    userService.toggleLike(id).then(() => {
      window.location.reload();
    });
  };

  useEffect(() => {
    userService.getUserImage().then(
      (response) => {
        setImages(response.data.data);
        console.log(response.data.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setImages(_content);
      }
    );
  }, []);
  return (
    <div>
      <Addimage />
      <div className="row">
        {images &&
          images.map((cont, index) => (
            <div className="col-sm-6 col-md-3 mb-3">
              <img
                src={`${cont.category}/${cont.path}`}
                alt={cont.path}
                className="img-fluid w-100 h-75"
              />
              <button
                onClick={() => handleDelete(cont._id)}
                style={{ color: "white", background: "blue",borderRadius:"10px" }}
              >
                Delete
              </button>

              <button
                onClick={() => toggleLike(cont._id)}
                style={{ color: "white", background: "blue",borderRadius:"10px" }}
              >
                Like {cont.likeCount}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Userimage;
