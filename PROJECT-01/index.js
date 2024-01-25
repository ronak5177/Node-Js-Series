const express = require("express");
const app = express();
const fs = require("fs");

const users = require("./MOCK_DATA.json");

// Middlewere
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next)=>{
  fs.appendFile("log.txt", `${Date.now()}: ${req.method}: ${req.path}\n`, (err, result)=>{
    req.adminName = "Ronak"
    next()
  })
})

app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
  return res.status(200).send(html);
});

app.get("/api/users", (req, res) => {
  res.setHeader("X-MyName", "Ronak Patel")
  return res.status(200).json(users);
});

app.post("/api/users", (req, res) => {
  // Create a new user
  const body = req.body;

  if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title ){
    return res.status(400).json({error: "All fields are required"})
  }
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).send({ status: "success", id: users.length });
  });
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    // Get user with id
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user) res.status(404).json({error: "user doesn't exist"})
    return res.status(200).json(user);
  })
  .patch((req, res) => {
    // Edit user with iddata.
    const data = req.body
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    const newUsers = users.filter((user) => user.id != id);
    
    if (data.first_name && data.first_name != ""){
      user.first_name = data.first_name
    } if (data.last_name && data.last_name != ""){
      user.last_name = data.last_name
    } if (data.email && data.email != ""){
      user.email = data.email
    } if (data.gender && data.gender != ""){
      user.gender = data.gender
    } if (data.job_title && data.job_title != ""){
      user.job_title = data.job_title
    } 
      newUsers.push({...user});
      fs.writeFile("./MOCK_DATA.json", JSON.stringify(newUsers), (err, data) => {
        return res.status(201).send({ status: "Updation Success", id });
      });
  })

  .delete((req, res) => {
    // Delete user with id
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user) res.status(404).json({error: "can't perfom deletion as user doesn't exist"})
    newUsers = users.filter((user) => user.id != id);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(newUsers), (err, data) => {
      return res.status(201).send({ status: "Deletion Success", id });
    });
  });

app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
