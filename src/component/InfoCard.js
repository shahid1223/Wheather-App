import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';

const InfoCard = (props) => {
    return (
        <Col sm={3}>
        <Card className="innerCard" bg="success">
            <Card.Header>{props.header}</Card.Header>
            <Card.Body>
                <Card.Title> {props.title}</Card.Title>
                <Card.Title>Timezone {props.timezone}</Card.Title>
                <Card.Title></Card.Title>
                <Card.Text>
                Discription: {props.discription}
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default InfoCard
