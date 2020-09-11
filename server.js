const express = require("express")
const path = require("path")
const app = express()
let port = process.env.PORT || 5000

app.use(express.static(path.resolve(__dirname, "build")))

app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"))
})


app.listen(port, () => console.log(`Initializing server on port ${port}`))