const express = require("express");
const router = express.Router();


let users = [];
let posts = [{ id: 1, title: "Peaceful winds", content: "First post"}];
let comments = [{id:1, postId:1, text: "Wow!"}];
router.get("/", (req, res) => {
    res.render("index", {users})
})
router.get("/users",  (req, res) => res.json(users));

router.post("/users",  (req, res) => {

    
    const { name } = req.body;    
    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }
    
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.redirect("/")
});
router.put("/users/:id", (req, res) => {
    const userId = req.params.id
    const user = users.find(u => u.id == userId);
    
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    
    if(req.body.name){;
    
        user.name = req.body.name;
    }
    
    res.redirect("/")
});
router.delete("/users/:id", (req, res) => {
    const userId = req.params.id;
    const userIndex = users.findIndex(u => u.id == userId);
    
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    
    users.splice(userIndex, 1);
    res.redirect("/")
});

router.get("/posts", (req, res) => res.json(posts));
router.get("/comments", (req, res) => res.json(comments));


router.get("/user", (req, res) => {
    let filteredUsers = users;
    if (req.query.name) {
        filteredUsers = filteredUsers.filter(user => 
            user.name.toLowerCase().includes(req.query.name.toLowerCase())
        );  
    }   
    res.json(filteredUsers);        
}); 


module.exports = {router, users};