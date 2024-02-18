import axios from "axios";
import { BsCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import Create from "./Create";
// import { applyDefaults } from "../../../Server/Models/Todo";
const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/get")
      .then((result) => {
        console.log(result.data);
        setTodos(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const handleEdit = (id) => {
  // axios.put("http://localhost:8001/update/"+id)
  // .then(result=>console.log(result))
  // .catch(err=>console.log(err))

  // };
  const handleDelete=(id)=>{
    axios.delete('http://localhost:8001/delete/'+id)
    .then(result=>{
      location.reload()
    })

    .catch(err=>console.log(err))
  }

  return (
    <div className="container">
      <div className="home">
        <h2>Todo list</h2>
        <Create />
        <br />
        {todos.length === 0 ? (
          <div>
            <h2>No record</h2>
          </div>
        ) : (
          todos.map((todo) => (
            <div className="task">
              <div className="checkbox" onClick={()=>handleEdit(todo_id)}>
                {}
                <BsCircleFill className="icon" />
                <p>{todo.task}</p>
              </div>
              <div>
                <span><BsFillTrashFill className="icon" 
                onClick={()=>handleDelete(todo._id)}/></span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
