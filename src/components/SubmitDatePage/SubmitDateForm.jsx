import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import "../../Styling/submitDateForm.css";

export default function SubmitDateForm() {
  let navigate = useNavigate();

  const [newSubmitDate, setSubmitDate] = useState({
    name: "",
    location: "",
    price: "",
    dressCode: "",
    rating: 1 | 2 | 3 | 4 | 5,
    interactionLevel: 1 | 2 | 3,
    image: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://project-planned-date-backend.web.app/submitadate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSubmitDate),
    })
      .then(() => navigate("/submitadate"))
      .catch(setError);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSubmitDate({
      ...newSubmitDate,
      [e.target.name]: newValue,
    });
  };

  return (
    <>
      <section className="dateform">
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name"
            defaultValue={newSubmitDate.name}
            onChange={handleChange}
            required={true}
            name="name"
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingLocation" label="Location">
          <Form.Control
            type="input"
            placeholder="Location"
            defaultValue={newSubmitDate.location}
            onChange={handleChange}
            required="true"
            name="location"
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPrice" label="Price">
          <Form.Select
            type="input"
            placeholder="$"
            defaultValue={newSubmitDate.price}
            onChange={handleChange}
            required="true"
            name="price"
          >
            <option></option>
            <option defaultValue="$">$</option>
            <option defaultValue="$$">$$</option>
            <option defaultValue="$$$">$$$</option>
            <option defaultValue="$$$$">$$$$</option>
            <option defaultValue="$$$$$">$$$$$</option>
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel controlId="floatingRating" label="Rating">
          <Form.Select type="Rating" placeholder="⭐️" name="rating">
            <option>select rating</option>
            <option defaultValue="1">⭐️</option>
            <option defaultValue="2">⭐️⭐️</option>
            <option defaultValue="3">⭐️⭐️⭐️</option>
            <option defaultValue="4">⭐️⭐️⭐️⭐️</option>
            <option defaultValue="5">⭐️⭐️⭐️⭐️⭐️</option>
            onChange={handleChange}
            required="true"
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel controlId="floatingDressCode" label="Dress Code">
          <Form.Control
            type="DressCode"
            placeholder="Dress Code"
            defaultValue={newSubmitDate.dressCode}
            onChange={handleChange}
            required="true"
            name="dressCode"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInteractionLevel"
          label="Interaction Level"
        >
          <Form.Select
            type="Interaction Level"
            placeholder="Interaction Level"
            name="interactionLevel"
          >
            <option></option>
            <option defaultValue="1">Low Interaction</option>
            <option defaultValue="2">Average Interaction</option>
            <option defaultValue="3">High Interaction</option>
            onChange={handleChange}
            require
          </Form.Select>
        </FloatingLabel>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload a photo</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <body>
          <span>
            <a href="#" onClick={handleSubmit}></a>
          </span>
        </body>
      </section>
      <div className="show-submitted">
        <Button onClick={() => navigate(`/viewdates`)}>
          Show Submitted Date
        </Button>
      </div>
    </>
  );
}
