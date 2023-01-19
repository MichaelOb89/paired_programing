# Paired Programing Chalenges
## Chalenge 1 (Jade Navigator - Michael Driver)
In the challenge1.js file is the solution 
```
function addTwo(num){
    return num+2
}
```
This function adds 2 to any argument "num" inputed

## Challenge 2 (Jade Navigator - Michael Driver)
The file challenge2.js has the solution
```
function addS(num){
    return num+"s"
}

```
This function concatenates s to any input string "num"
## Challenge 3 (Jade Navigator - Michael Driver)
The file challenge3.js has the solution
```
function map(array, callback){
    const newArr = []
    for(let i=0; i<array.length; i++){
        newArr.push(callback(array[i]))
    }
    return newArr
}
```
The function map takes in 2 arguments, an array and a function. The map function then iterates through the array, applying the function to each element and creating a new array with each resulting operation. After completing the iteration, the function then returns the new array.
## Challenge 4 (Jade Navigator - Michael Driver)
The file challenge4.js has the following solution
```
function forEach(arr, callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i])
    }
}
```
The forEach function takes two arguments, an array and a function. It iterates through the array, running the function on each element of the array. Nothing is returned.
## Challenge 5 - (Michael Navigator - Jade Driver)
The solution to this challenge is in the server.js file. 
```
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
    res.json(req.body)
})

app.listen(3008,() =>{
    console.log("listening on port 3008")
})
```
The mock data is in the data.js file. The code we created sets up a express server, listening on port 3008. the route "/" is the index route and returns all posts. The route "/:id" will look for a post with the id that matches the parameter :id inputed by the user and display onle that post. The line ```app.use(express.json())``` will allow the server to read the body of requests made, allowing the post route "/" to be used to create new posts.