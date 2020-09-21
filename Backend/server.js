const express = require("express")
const path = require("path")
const app = express()
const mongoose = require("mongoose")

require("dotenv").config()

let port = process.env.PORT || 5000

let Users = [
    {"name": "Isma"},
    {"name": "Eguz"},
    {"name": "Emix"},
    {"name": "Euge"}
]

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
const dataBase = mongoose.connection
dataBase.on("error", error => console.log(error))
dataBase.once("open", () => console.log("Connected to MongooseDB"))




if (process.env.URL_THINGY === "coso"){

    app.use(express.static(path.resolve(__dirname, "../build")))

    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../build", "index.html"))
    })

} else {

    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "coso.html"))
    })

}


app.get("/users-info", (req,res) => {
    res.send(Users)
})

app.listen(port, () => console.log(`Initializing server on port ${port}`))