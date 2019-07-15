import React, { useState, Fragment, useEffect } from "react";

const useStateEx = props => {
  const [name, setName] = useState("Lis");
  const [address, setAddress] = useState("");
  const [sibling, setSibling] = useState("Timmy");
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('lis');

  useEffect(() => {
    // conditional 
    if(searchQuery.length > 0) {

    const fetchFunc = async () => {
      console.log('hi')
      const res = await fetch(``)
      const resJson = await res.json()
      setUser(resJson[0])
    }

    fetchFunc()
    }
  }, [searchQuery])

  return (
    <Fragment>
      <h1>{name}</h1>
      <h2>{address}</h2>
      <h3>{sibling}</h3>
      <button onClick={() => setName("Matthew")}>Set Name</button>
      <button onClick={() => setAddress("9809 Tree Tops Lake Road")}>
        Set address
      </button>
      <button onClick={() => setSibling("Andrew")}>Siblings</button>
      <div>
        <input
          type="search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        {user ? (
          <div>
            <h4>{user.name}</h4>
            <h4>{user.username}</h4>
            <h4>{user.email}</h4>
          </div>
        ) : (
          <p>No user found</p>
        )}
      </div>
    </Fragment>
  );
};

export default useStateEx;
