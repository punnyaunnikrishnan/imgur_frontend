import React, { useState, useRef } from "react";
// import Form from "react-validation/build/form"
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import userService from "../services/user.service";
import "bootstrap/dist/css/bootstrap.min.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is Required!
      </div>
    );
  }
};

function Addimage() {
  const form = useRef();
  const [category, setCategory] = useState("");
  const [path, setPath] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const onChangeCategory = (e) => {
    const category = e.target.value;
    setCategory(category);
  };
  const onChangePath = (e) => {
    const path = e.target.value;
    setPath(path);
  };
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(category, path);
    userService.addImage(category, path).then(() => {
      window.location.reload();
      hideModal();
    });
  };
  return (
    <div>
      <button onClick={showModal} style={{ color: "white", background: "blue",borderRadius:"10px" }}>Add Image</button>
      <Modal show={isOpen}>
        <Modal.Body>
          <Form onSubmit={handleSubmit} ref={form}>
            <Form.Group className="mb-3" controlId="formCategory">
              <Form.Label>category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                onChange={onChangeCategory}
                validations={[required]}
                placeholder="Enter category"
                value={category}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPath">
              <Form.Label>path</Form.Label>
              <Form.Control
                type="text"
                name="path"
                onChange={onChangePath}
                validations={[required]}
                placeholder="Enter path"
                value={path}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          <button>Save</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Addimage;
