const {Task}=require("../db/config")
const {isValid}=require("../validation/validation")

//-----------------------------------------------------To Add task----------------------------------------------------------


exports.addTask=async(req,res)=>{
    try{
        let data=req.body
        let {title,startDate,dueDate,taskStatus,priority,isDeleted}=data
        data.taskStatus="ToDo"
        data.isDeleted=false// set default value for taskStatus


       
        if (Object.keys(req.body).length === 0) {
            return res.status(400).send({ status: false, message: "Kindly enter all the required details." })
        }
       
        if (!isValid(title)||!isValid(startDate)||!isValid(dueDate)||!isValid(priority)) {
            return res.status(400).send({ status: false, message: "please fill all the field. " })
        }


        let a= await Task.add(req.body)
        res.status(200).send({status:true,msg:"successfully added "})
    }
    catch (error) {
        console.log("This is the error :", error.message)
        return res.status(500).send({ msg: "Error", error: error.message })
    }
}



//-----------------------------------------------------To get task----------------------------------------------------------

exports.getTask=async function (req,res){
  
      try{
    
      let data= req.query
      let {title,startDate,dueDate,taskStatus}=data
      let usr=[]
         let fetchedData= await Task.get(data)
    const a=fetchedData.docs.map((doc)=>({id:doc.id,...doc.data()}))
      res.status(200).send({ status: true, message: "successfully fetched data ",data:a})
    
    if(Object.keys(data).length!==0){
      
        if(data.taskStatus==="inProgress"){
       let d=a.filter((n)=>(n.taskStatus=="inProgress"))
     
       res.status(200).send({ status: false, message: "succesfully fetched ",data:d})
        }else if(data.taskStatus==="completed"){
    
            let p=a.filter((m)=>(m.taskStatus=="completed"))
            console.log(p)
            res.status(200).send({ status: false, message: "succesfully fetched ",data:p})  
        }
    }
    
    }
    catch (error) {
              console.log("This is the error :", error.message)
              return res.status(500).send({ msg: "Error", error: error.message })
          }
      
      }
// -----------------------------get by Task Id-------------------------------------
  
  exports.getTaskById=async function (req,res) {
    try{
    const taskId = req.params.taskId;
    console.log(taskId)
  
    const doc = await Task.doc(taskId).get();
  
    if (!doc) {
      throw new Error('Task not found');
    }
  
    const taskData = doc.data();
    return res.status(200).send({status:true,msg:"success",data:{
      id: doc.id,
      ...taskData
    }})
}
catch (error) {
    console.log("This is the error :", error.message)
    return res.status(500).send({ msg: "Error", error: error.message })
}


  }

//-----------------------------------------------------To update task----------------------------------------------------------
      exports.updateTask=async function (req,res){
      
            try{
            data=req.body
        
          const taskId=req.params.taskId
       
          delete req.body.id
           let updateData = await Task.doc(taskId).update(req.body)
      
           return res.status(200).send({ status: "true", message: "Successfulluy data updated", data: updateData })
            }catch (error) {
                console.log("This is the error :", error.message)
                return res.status(500).send({ msg: "Error", error: error.message })
            }
        
        }
     //-----------------------------------------------------To delete task----------------------------------------------------------
        
        exports.deleteTask=async function (req,res){
            const taskId=req.params.taskId
        
            try{
            data=req.body
            console.log(data)
           let deletedData= await Task.doc(taskId).delete(data)
          
           return res.status(200).send({ status: "true", message: "Successfully deleted"})
           
            }catch (error) {
                console.log("This is the error :", error.message)
                return res.status(500).send({ msg: "Error", error: error.message })
            }
        
        }

      


