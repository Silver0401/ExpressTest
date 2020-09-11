const express = require("express")
const app = express()
const path = require("path");
app.use(express.json())

const Users = [
    {name: "Ismael", pass:"password"},
    {name: "Eguz", pass:"pichula"},
    {name: "Euge", pass:"spiderman"}
]

app.get("/", (request, response) => {
    response.send("Hello World Thingy Testing 3")
})


app.get("/users", (req,res) => {
    res.send(Users)
})

app.get("/page/page1", (request, response) => {
    response.send([1,2,3,"coso"])
})

app.get("/home/:personID", (request, response) => {
    response.send(request.params.personID)
})

app.get("/users/:name", (request, response) => {
    
    // response.send("Working")
    const User = Users.find(user => user.name === request.params.name)
    if (!User) response.status(404).send("The user requested does not exist")
    response.send(User)
})

app.get("/thingy",(req,res) => {
    res.send("in thingy page")
})

app.post("/things/thingy1", (req,res) => {
    const thingy = {

    }
})



const whitelist = [
  "http://localhost:3000",
  "http://localhost:8080",
  "https://thingy-testing.herokuapp.com/",
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}


if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "front-end/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "front-end/build", "index.html"));
  });
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}`))

