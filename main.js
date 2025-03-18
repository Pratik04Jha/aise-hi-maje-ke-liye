const express = require("express");
const app = express();
const user = require("./user");

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/ip', (req, res) => {
    let ip = req.ip;
    res.send(ip);
})

app.get('/popcorn', async (req, res) => {
  let createduser = await user.create({
    name: "Pratik Jha",
    email: "pratik04jha@gmail.com",
    password: "UMBAHEBHANA",
  });
  res.send(createduser);
});

app.listen(3000);
