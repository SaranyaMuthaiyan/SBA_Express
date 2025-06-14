const express = require("express");
const router = express.Router();


let users = [{ id:1, name:"Sara"} , {id: 2, name:"Prasad"}];
let posts = [{ id: 1, title: "Peaceful winds", content: "First post"}];
let comments = [{id:1, postId:1, text: "Wow!"}];

router.get("/users",  (req, res) => res.json(users));
router.post("/users",  (req, res) => {
    // console.log(req.body);
    const payload = JSON.parse(req.body);
    
    const { name } = payload;    
    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }
    
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
});

router.get("/posts", (req, res) => res.json(posts));
router.get("/comments", (req, res) => res.json(comments));

module.exports = {router, users};