import React from "react";
import { Col } from "react-bootstrap";

export default function Counter(props) {
  return (
    <Col xs={12} sm={6} md={3} className="counter-box">
      <h2 className="white-mode fs-32 fw-bold text-uppecase mb-3">{props.Count}</h2>
      <p className="dark-red fs-16 fw-bold text-uppecase mb-0">{props.Title}</p>
    </Col>
  );
}
