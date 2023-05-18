import React, { FormEvent, useRef, useState } from "react";
import FormHook from "../components/forms/FormHook";
import FormZod from "../components/forms/FormZod";
import { Container, Row, Box } from "../components/layouts";
import "./Home.scss";

const HomePage = () => {
  // FOLLOING IS FOR FORM REF
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  // FUNCTION FOR USE REF
  const handleRefSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (nameRef.current !== null) person.name = nameRef.current.value;

    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

    console.log({ person });
  };

  // FOLLOWING IS FOR FORM STATE
  const [personObj, setPersonObj] = useState({
    name: "",
    age: 0,
  });

  // FUNCTION FOR USE STATE
  const handleSubmitState = (e: FormEvent) => {
    e.preventDefault();

    console.log({ personObj });
  };

  return (
    <Container className={""} FULL={false} pageTitle={"Home"}>
      <Row className={"grid grid-cols-1 sm:grid-cols-2  gap-1 prose"}>
        <Box className={"p-3"}>
          <h1 className="h1">Form Ref:</h1>
          <form className="form-control" onSubmit={handleRefSubmit}>
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered input-primary mb-2"
              placeholder="Your Name"
              ref={nameRef}
            />
            <label className="label" htmlFor="age">
              Age
            </label>
            <input
              type="text"
              id="age"
              className="input input-bordered input-primary mb-2"
              placeholder="Your Age"
              ref={ageRef}
            />
            <button className="btn mt-3">Submit</button>
          </form>

          <hr />
        </Box>
        <Box className={"p-3"}>
          <h1 className="h1">Form State:</h1>
          <form className="form-control" onSubmit={handleSubmitState}>
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered input-primary mb-2"
              placeholder="Your Name"
              onChange={(e) =>
                setPersonObj({ ...personObj, name: e.target.value })
              }
              value={personObj.name}
            />
            <label className="label" htmlFor="age">
              Age
            </label>
            <input
              type="text"
              id="age"
              className="input input-bordered input-primary mb-2"
              placeholder="Your Age"
              onChange={(e) =>
                setPersonObj({ ...personObj, age: parseInt(e.target.value) })
              }
              value={personObj.age}
            />
            <button className="btn mt-3">Submit</button>
          </form>

          <hr />
        </Box>
        <Box className={"p-3"}>
          <h1 className="h1">Form Hook Form:</h1>
          <FormHook />
          <hr />
        </Box>
        <Box className={"p-3"}>
          <h1 className="h1">Form w/ Zod:</h1>
          <FormZod />
          <hr />
        </Box>
      </Row>
    </Container>
  );
};

export default HomePage;
