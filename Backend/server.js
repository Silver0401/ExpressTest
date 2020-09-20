const express = require("express")
const path = require("path")
const app = express()
require("dotenv").config()

let port = process.env.PORT || 5000

let Users = [
    {"name": "Isma"},
    {"name": "Eguz"},
    {"name": "Emix"},
    {"name": "Euge"}
]


if (process.env.URL_THINGY === "coso"){

    app.use(express.static(path.resolve(__dirname, "../build")))

    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../build", "index.html"))
    })

} else {

    app.use(express.static(path.resolve(__dirname, "./coso.html")))

    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "coso.html"))
    })

}


app.get("/users-info", (req,res) => {
    res.send(Users)
})

app.listen(port, () => console.log(`Initializing server on port ${port}`))