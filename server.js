const express = require("express")
const app = express()
const mockBlog = require("./data")
app.use(express.json());

app.get('/',(req, res) => {
    res.json(mockBlog)
})

app.get("/:id",(req, res) => {
    res.json(mockBlog.find(post => post.id == req.params.id))
})

app.post("/", (req, res) => {
    mockBlog.push(req.body)
    res.json(req.body)
})

app.listen(3008,() =>{
    console.log("listening on port 3008")
})