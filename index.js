const express = require("express")
const app = express()
app.use(express.json())

const Users = [
    {name: "Ismael", pass:"password"},
    {name: "Eguz", pass:"pichula"},
    {name: "Euge", pass:"spiderman"}
]

app.get("/", (request, response) => {
    response.send("Hello World")
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

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}`))

