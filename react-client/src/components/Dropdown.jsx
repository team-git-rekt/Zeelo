import React, { Fragment } from "react";
import { Accordion, Card } from "react-bootstrap";
import MortgageCalculator from "mortgage-calculator-react";

const Dropdown = () => {
  return (
    <Fragment>
      <div>
        <Accordion className="accordion" defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Principal & interest
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>Home price</p>
                <input type="text" placeholder='home price'/>

                <p className="dwnPyTxt">Down payment</p>
                <input type="text" placeholder='down payment'/>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Mortgage calculator
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div>
                  <MortgageCalculator />
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </Fragment>
  );
};

export default Dropdown;
