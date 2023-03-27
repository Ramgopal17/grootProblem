import React, { useState } from 'react';
import { Box, Flex, Grid, Heading, Card, CardHeader, CardBody, Text, Center, Menu, MenuButton, MenuItem, MenuList, IconButton } from "@chakra-ui/react";
import axios from "axios";
import { useLoaderData } from 'react-router-dom';
import Header from './Header';
import { useParams } from 'react-router-dom';


const TodoTask = () => {
  const tasks = useLoaderData();
  let { taskId } = useParams();
  // this is api call for taskStatus updation using taskId in params and taskStatus in req body

  const handleStatusUpdate = (taskId, taskStatus) => {
    axios
      .put(`http://localhost:4000/api/updateTask/${taskId}`, { taskStatus })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // used menu  user click on three dots to update taskStatus 
  return (
    <Box w="100%">
      <Header />
      <Flex justifyContent="center" h="60vh">
        <Grid templateColumns={["1fr"]} gap={6} w={["90%", "80%", "70%"]} p="2rem">

          {tasks.data.map(task => (
            task.isDeleted===false &&task.id===taskId&& (
              <Card key={task.id}>
                <CardHeader display="flex" justifyContent="space-between" alignItems="center">

                  <Menu>
                    <MenuButton as={IconButton} icon={<i className="fas fa-ellipsis-v">...</i>} bg="gray.100" size="xs" variant="ghost" ml="auto" />
                    <MenuList>
                      <MenuItem onClick={() => handleStatusUpdate(task.id, "ToDo")}>
                        ToDo
                      </MenuItem>
                      <MenuItem onClick={() => handleStatusUpdate(task.id, "InProgress")}>
                        In Progress
                      </MenuItem>
                      <MenuItem onClick={() => handleStatusUpdate(task.id, "Completed")}>
                        Completed
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </CardHeader>
                <Center><Heading size="md">{task.title}</Heading></Center>
                <CardBody>
                  <Center><Text>Start Date: {task.startDate}</Text></Center>
                  <Center><Text>Due Date: {task.dueDate}</Text></Center>
                  <Center><Text>Status: {task.taskStatus}</Text></Center>
                </CardBody>
              </Card>
            )
          ))}
        </Grid>
      </Flex>
    </Box>

  );
}
export default TodoTask;
//this is taskLoader which is passed as prop in the toDo component
export const taskLoader = async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/getTask`)
    return response.data;
  } catch (error) {
    // console.log(error);
    throw new Error("Error loading tasks");
  }
};





