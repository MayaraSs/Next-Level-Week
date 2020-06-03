import express from "express";

const app = express();

app.use(express.json());

const users = ["Mayara", "Mayza", "Matheus"];

app.get("/users", (request, response) => {
  console.log("Listagem de usuários");

  return response.json(users);
});

app.get("/users/:id", (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.post("/users", (request, response) => {
  const data = request.body;

  console.log(data);

  const user = {
    name: data.name,
    email: data.email,
  };

  return response.json(user);
});

app.listen(3333);
