import React, { useEffect, useState, useNavigate } from 'react'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './components/Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider, Routes, BrowserRouter
} from "react-router-dom";
import { auth } from "./firebase"
import Addtask from './components/Addtask';
import TodoTask, { taskLoader } from './components/TodoTask';
import InProgress from './components/InProgress';
import TaskDone from "./components/TaskDone"
import UpdateTask from './components/UpdateTask';
import View from "./components/View"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/addtask" element={<Addtask />} />
      <Route path="/todoTask" element={<TodoTask />} loader={taskLoader} errorElement={<div>Failed to load task data</div>} />
      <Route path="/inProgress" element={<InProgress />} loader={taskLoader} errorElement={<div>Failed to load task data</div>} />
      <Route path="/taskDone" element={<TaskDone />} loader={taskLoader} errorElement={<div>Failed to load task data</div>} />
      <Route path="/updateTask/:taskId" element ={<UpdateTask/> } loader={taskLoader}  errorElement={<div>Failed to load task data</div>}/> 
      <Route path="/getTask/:taskId" element ={<View/> } loader={taskLoader}  errorElement={<div>Failed to load task data</div>}/>
    </Route>
  )
);






function App() {
  const [userName, setUserName] = useState("")


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName)
      } else {
        setUserName("")
      }
    })
  }, [])
  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  )
}
export default App


