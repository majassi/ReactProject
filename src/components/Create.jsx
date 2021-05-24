import React, { useState } from "react";
import { projectFirestore } from "../Firebase/config";

const Create = (e) => {
  const [name, setName] = useState("");
  

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const addName = () => {
    const nameRef = projectFirestore.collection("collection");
    const createName = {
      name,
      complete: false
    };

    nameRef.add(createName).then(() => setName(""));
  };

  return (
    <div className="create">
      {name}
      <br />
      Title:
      <br />
      <input type="text" value={name} onChange={handleChange} />
      {""}
      <br />
      Author:
      <br />
      <input type="text" value={name} onChange={handleChange} />
      {""}
      <br />
      Book:
      <br />
      <input type="text" value={name} onChange={handleChange} />
      {""}
      <br />
      
      <button className="createButton" onClick={addName}>
        Create
      </button>
    </div>
 );

 
};

export default Create;
