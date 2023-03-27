const express=require("express")
const router=express.Router()
const {addTask,getTask,updateTask,deleteTask,getTaskById}=require("../controller/taskController")

router.post("/create",addTask)
router.get("/getTask",getTask)
router.get("/getTask/:taskId",getTaskById)
router.put("/updateTask/:taskId",updateTask)
router.delete("/deleteTask/:taskId",deleteTask)

module.exports = router;



