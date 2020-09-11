import React from 'react';

import {Container, Row, Col, Form, Button} from 'react-bootstrap';

import './OrderContainer.css';

function OrderContainer() {
  // const initialStockState = {
  //   transactionType: 'buy',
  //   price: 0,
  //   quantity: 0,
  // }

  //const [stockState, setStockState] = React.useState({ initialStockState });

  return (
    <Container className="order-screen">
      <Form>
        <Form.Group as={Row} controlId="stockName">
          <Form.Label column sm="2">
            Stock Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              className="bold"
              plaintext
              readOnly
              defaultValue="Adani Green"
              data-testid="stock-name-ele"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="stockPrice">
          <Form.Label column sm="2">
            Stock Price
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              placeholder="0.0"
              data-testid="stock-price-ele"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Quantity
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              placeholder="0"
              data-testid="quantity-ele"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Transaction Type
          </Form.Label>
          <Col sm="2" className="no-padding--left">
            <Form.Check
              inline
              label="Buy"
              type="radio"
              data-testid="transaction-buy"
              id="transaction-type--buy"
            />
            <Form.Check
              inline
              label="Sell"
              type="radio"
              data-testid="transaction-sell"
              id="transaction-type--sell"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2"></Form.Label>
          <Col sm="2" className="no-padding--left">
            <Button
              data-testid="place-order-button"
              variant="primary"
              type="submit">
              Place Order
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default OrderContainer;
