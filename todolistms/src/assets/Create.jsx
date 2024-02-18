import React, { useState } from "react";
import axios from "axios";
const Create = () => {
  const [task, setTask] = useState();
  const addc = () => {
    axios.post("http://localhost:8001/add", { task: task });
  };
  return (
    <div className="container">
    <div className="create_from">
      <input  className ="shubham" type="text"  placeholder="Enter  Your task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={addc} className="button">
        Add
      </button>
    </div>
    </div>
  );
};

export default Create;
