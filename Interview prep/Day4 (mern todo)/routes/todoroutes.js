const {Router}= require("express");

const router = Router();

const {getToDo,saveToDo,deleteTodo,updateTodo} = require("../controllers/todocontroller")

router.get("/get-todos",getToDo);
router.post("/save-todo",saveToDo);
router.post("/delete",deleteTodo);
router.post("/update-todo",updateTodo);


module.exports = router;