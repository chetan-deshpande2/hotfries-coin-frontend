import React from "react";
import {
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
  Form,
} from "react-bootstrap";
import { useState } from "react";

export default function DropdownNav(props) {
  const [input, setInput] = useState(0);
  const changeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <Form.Label htmlFor="basic-url">{props.InputLabel}</Form.Label>
      <InputGroup className="mb-4">
        <DropdownButton
          variant="outline-danger"
          title="Dropdown"
          id="input-group-dropdown-1"
          className="walletdropbutton"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <FormControl
          aria-label="Text input with dropdown button"
          placeholder="0"
          value={input}
        />
      </InputGroup>
    </div>
  );
}
