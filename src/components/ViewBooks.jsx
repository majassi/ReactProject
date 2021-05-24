import React from "react";
import { useState } from "react";
import useDocument from "../composables/useDocument";

const ViewBooks = (props) => {
  const [name, setName] = useState(props.data.name);

  const { deleteDoc, update } = useDocument("collection", props.data.id);

  const handleChange = (e) => {
    setName(e.target.value);
    
  };

  return (
    <div>
      <input value={name} onChange={handleChange} />
      <br />
      <button
        onClick={() => {
          deleteDoc();
        }}
      >
        delete
      </button>
      <button
        onClick={() => {
          update(props.data.id, name);
        }}
      >
        edit
      </button>
    </div>
  );
};

export default ViewBooks;
