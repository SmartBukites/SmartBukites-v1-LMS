//index.js

const functions = require("firebase-functions");
const app = require("express")();

//Auth
const auth = require("./util/auth");

//Todos
const { getAllTodos } = require("./APIs/todos");
const { postOneTodo } = require("./APIs/todos");
const { deleteTodo } = require("./APIs/todos");
const { editTodo } = require("./APIs/todos");

// Users
const { loginUser } = require("./APIs/users");
const { signUpUser } = require("./APIs/users");
const { uploadProfilePhoto } = require("./APIs/users");
const { getUserDetail } = require("./APIs/users");
const { updateUserDetails } = require("./APIs/users");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

//Todos
app.get("/todos", auth, getAllTodos);
// app.get("/todo/:todoId", auth, getOneTodo);
app.post("/todo", auth, postOneTodo);
app.delete("/todo/:todoId", auth, deleteTodo);
app.put("/todo/:todoId", auth, editTodo);

exports.api = functions.https.onRequest(app);

// Users
app.post("/login", loginUser);
app.post("/signup", signUpUser);
app.post("/user/image", auth, uploadProfilePhoto);
app.get("/user", auth, getUserDetail);
app.post("/user", auth, updateUserDetails);
