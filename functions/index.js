//index.js

const functions = require("firebase-functions");
const app = require("express")();
const cors = require("cors");

//Auth
const auth = require("./util/auth");

//Todos
// const { getAllTodos } = require("./APIs/todos");
// const { postOneTodo } = require("./APIs/todos");
// const { deleteTodo } = require("./APIs/todos");
// const { editTodo } = require("./APIs/todos");

//Courses
const { getAllCoursesAll } = require("./APIs/courses");
const { postOneCourse } = require("./APIs/courses");
const { editCourse } = require("./APIs/courses");

// Users
const { loginUser } = require("./APIs/users");
const { signUpUser } = require("./APIs/users");
const { uploadProfilePhoto } = require("./APIs/users");
const { getUserDetail } = require("./APIs/users");
const { updateUserDetails } = require("./APIs/users");

app.use(cors());

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
// app.get("/todos", auth, getAllTodos);
// // app.get("/todo/:todoId", auth, getOneTodo);
// app.post("/todo", auth, postOneTodo);
// app.delete("/todo/:todoId", auth, deleteTodo);
// app.put("/todo/:todoId", auth, editTodo);

//Courses
app.get("/courses-all", auth, getAllCoursesAll);
// app.get("/todo/:todoId", auth, getOneTodo);
app.post("/course", auth, postOneCourse);
// app.delete("/todo/:todoId", auth, deleteTodo);
app.put("/course/:courseId", auth, editCourse);

exports.api = functions.https.onRequest(app);

// Users
app.post("/login", loginUser);
app.post("/signup", signUpUser);
app.post("/user/image", auth, uploadProfilePhoto);
app.get("/user", auth, getUserDetail);
app.post("/user", auth, updateUserDetails);
