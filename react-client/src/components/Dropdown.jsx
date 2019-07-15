import React, { Fragment } from "react";
import { Button, Accordion, Card } from "react-bootstrap";

const Dropdown = () => {
  return (


    <Fragment>
    <div className="shipToMe" > <button className="shipToMeButt"> </button> Ship to Me </div>
    <div className="inStorePickUp" > <button className="inStorePickUpButt"> </button> In-Store Pickup </div>
    <div className="addButtonCont"> <button onClick={display} onClick={addToBag} className="addToBag"> Add to Bag </button> </div>

    <div>
      <Accordion className="accordion" defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Details
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{item.description}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Shipping + Returns
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Free pre-paid returns and exchanges for orders shipped to the US.
              Get refunded faster with easy online returns and print a FREE
              pre-paid return SmartLabel® online! Return or exchange any unused
              or defective merchandise by mail or at one of our US or Canada
              store locations. Made to order items cannot be canceled, exchanged
              or returned. Visit Returns + Exchanges for more information on
              completing a return.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
    </Fragment>
  )
};

export default Dropdown;
