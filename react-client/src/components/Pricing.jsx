import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
const Pricing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      let res = await axios.get("/houses/1");
      setData(res.data);
    };
    getHouses();
  }, []);
  
  return (
    <Fragment>
      {data.map((dt, i) => (
        <div key={i}>
          <p>
            <strong>{`$${dt.price}`}</strong> {`${dt.bedrooms} bedrooms |`}{" "}
            {`${dt.sqft} sqft`}
          </p>
          <p>
            <strong>{dt.address}</strong>
          </p>
          {/* make entire p disapear when scroll down */}
          <p>For Sale | Zestimate $900,000</p>
          <p><strong>Est. payment: $2,384/mo</strong></p>
          <button>Contact Agent</button> <button>Schedule a tour</button>
        </div>
      ))}
    </Fragment>
  );
};

export default Pricing;
