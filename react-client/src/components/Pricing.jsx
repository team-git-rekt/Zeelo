import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
const Pricing = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      let res = await axios.get(`http://ec2-18-216-214-104.us-east-2.compute.amazonaws.com:3000/houses/${window.location.pathname.slice(1)}`);
      setData(res.data)
    }
    getHouses()
    // preventDefault()
  }, [])

  return (
    <Fragment>
      {data.map((dt, i) => {
        return (
          <nav key={i}>
            <p>
              <strong>{`$${dt.price}`}</strong> {`${dt.bedrooms} bedrooms |`}{" "}
              {`${dt.sqft} sqft`}
            </p>
            <p>
              <strong>{dt.address}</strong>
            </p>
            <p>For Sale | Zestimate $900,000</p>
            <p>
              <strong>Est. payment: $2,384/mo</strong>
            </p>
            <button
              style={{ color: "blue", backgroundColor: "white", border: "black" }}
            >
              Contact Agent
            </button>{" "}
            <button style={{ color: "white", backgroundColor: "blue" }}>
              Schedule a tour
            </button>
          </nav>
        );
      })}
    </Fragment>
  );
};

export default Pricing;