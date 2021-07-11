//courses.js

const { db } = require("../util/admin");

exports.getAllCoursesAll = (request, response) => {
  db.collection("courses")
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let courses = [];
      data.forEach((doc) => {
        courses.push({
          courseId: doc.id,
          Coursetitle: doc.data().title,
          author: doc.data().author,
          courseBody: doc.data().body,
          createdAt: doc.data().createdAt,
          courseChapters: doc.data().courseChapters,
        });
      });
      return response.json(courses);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.postOneCourse = (request, response) => {
  if (request.body.courseDescription.trim() === "") {
    return response.status(400).json({ message: "Must not be empty" });
  }

  if (request.body.courseTitle.trim() === "") {
    return response.status(400).json({ title: "Must not be empty" });
  }

  const newCourseItem = {
    title: request.body.courseTitle,
    courseChapters: request.body.courseChapters,
    author: request.user.username,
    thumbnail: request.body.courseThumbnail,
    description: request.body.courseDescription,
    createdAt: new Date().toISOString(),
  };
  db.collection("courses")
    .add(newCourseItem)
    .then((doc) => {
      const responseCourseItem = newCourseItem;
      responseCourseItem.id = doc.id;
      return response.json(responseCourseItem);
    })
    .catch((err) => {
      response.status(500).json({ error: "Something went wrong" });
      console.error(err);
    });
};

exports.editCourse = (request, response) => {
  if (request.body.courseId || request.body.createdAt) {
    response.status(403).json({ message: "Not allowed to edit" });
  }
  let document = db.collection("courses").doc(`${request.params.courseId}`);
  document
    .update(request.body)
    .then(() => {
      response.json({ message: "Updated successfully" });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({
        error: err.code,
      });
    });
};

exports.deleteTodo = (request, response) => {
  const document = db.doc(`/todos/${request.params.todoId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return response.status(404).json({ error: "Todo not found" });
      }
      if (doc.data().username !== request.user.username) {
        return response.status(403).json({ error: "UnAuthorized" });
      }
      return document.delete();
    })
    .then(() => {
      response.json({ message: "Delete successfull" });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.getAllTodos = (request, response) => {
  db.collection("todos")
    .where("username", "==", request.user.username)
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let todos = [];
      data.forEach((doc) => {
        todos.push({
          todoId: doc.id,
          title: doc.data().title,
          username: doc.data().username,
          body: doc.data().body,
          createdAt: doc.data().createdAt,
        });
      });
      return response.json(todos);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.postOneTodo = (request, response) => {
  if (request.body.body.trim() === "") {
    return response.status(400).json({ body: "Must not be empty" });
  }

  if (request.body.title.trim() === "") {
    return response.status(400).json({ title: "Must not be empty" });
  }

  const newTodoItem = {
    title: request.body.title,
    body: request.body.body,
    username: request.user.username,
    createdAt: new Date().toISOString(),
  };
  db.collection("todos")
    .add(newTodoItem)
    .then((doc) => {
      const responseTodoItem = newTodoItem;
      responseTodoItem.id = doc.id;
      return response.json(responseTodoItem);
    })
    .catch((err) => {
      response.status(500).json({ error: "Something went wrong" });
      console.error(err);
    });
};

exports.deleteTodo = (request, response) => {
  const document = db.doc(`/todos/${request.params.todoId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return response.status(404).json({ error: "Todo not found" });
      }
      if (doc.data().username !== request.user.username) {
        return response.status(403).json({ error: "UnAuthorized" });
      }
      return document.delete();
    })
    .then(() => {
      response.json({ message: "Delete successfull" });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.editTodo = (request, response) => {
  if (request.body.todoId || request.body.createdAt) {
    response.status(403).json({ message: "Not allowed to edit" });
  }
  let document = db.collection("todos").doc(`${request.params.todoId}`);
  document
    .update(request.body)
    .then(() => {
      response.json({ message: "Updated successfully" });
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({
        error: err.code,
      });
    });
};
