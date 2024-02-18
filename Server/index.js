const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./Models/Todo");
const app = express();

app.use(cors());
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://shubham:1234567890@cluster0.ppm7bwf.mongodb.net/todolist?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connection successful to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });


app.get('/get' ,(req,res)=>{
   TodoModel.find()
   .then(result=>res.json(result))
   .catch(err=>res.json(err))

})
// app.put('/update/:id',(req,res)=>{
//   const {id}=req.params;
//   TodoModel.findByIdAndUpdate({_id:id},{done:true})
//   .then(result=>res.json(result))
//   .catch(err=>res.json(err))
//   // console.log(id);
// })

app.delete('/delete/:id',(req,res)=>{

  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id }  )
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
  // console.log(id);
})
  

app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    task: task
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(8001, () => {
  console.log("server is running");
});
