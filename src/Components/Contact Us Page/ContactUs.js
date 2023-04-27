import { useRef } from "react";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";

const ContactUs = (props) => {
  const name = useRef("");
  const email = useRef("");
  const phoneNumber = useRef("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const userDetails = {
      name: name.current.value,
      email: email.current.value,
      phoneNumber: phoneNumber.current.value,
    };

    fetch(
      "https://react-ecommers-website-2023-default-rtdb.firebaseio.com/Complained_Users.json",
      {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          userDetails: "complained Users",
        },
      }
    ).then(() => {
      alert(
        "Your Complaint got registered.You will recive a call Back in 24hours"
      );
    });
  };

  return (
    <Card
      className="mb-5 text-center"
      style={{ width: "50rem", margin: "auto" }}
    >
      <Card.Header>
        <Card.Title>Request Call Back</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={formSubmitHandler}>
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Name" ref={name} />
          </FloatingLabel>
          <FloatingLabel
            className="mb-3"
            controlId="floatingDirector"
            label="Email"
          >
            <Form.Control type="email" placeholder="Email" ref={email} />
          </FloatingLabel>
          <FloatingLabel
            className="mb-3"
            controlId="floatingDirector"
            label="Phone Number"
          >
            <Form.Control
              type="tel"
              placeholder="Phone Number"
              ref={phoneNumber}
            />
          </FloatingLabel>
          <Button type="submit" variant="warning">
            Submit
          </Button>
          <Button className="m-2" variant="danger">
            CLOSE
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ContactUs;
