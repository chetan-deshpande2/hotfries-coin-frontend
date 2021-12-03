import React from "react";
import { Col, Image, Card } from "react-bootstrap";

export default function HomeCard(props) {
  return (
    <Col md={4} className="d-flex align-items-stretch">
      <Card className="mb-5 mb-sm-5 mb-md-0 py-3 py-sm-3 py-md-1">
        <Card.Body className="p-4 d-flex justify-content-start">
          <div className={props.CardClass}>
            <Image src={props.CardImage} className="" />
          </div>
          <div>
            <Card.Title className="white-mode fs-16 fw-medium">
              {props.CardTitle}
            </Card.Title>
            <Card.Text className="grey-color fs-14 fw-regular lh-24">
              {props.CardText}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Col>
    // className={props.CardClass == 'me-3' ? 'me-3' : ''}
  );
}
