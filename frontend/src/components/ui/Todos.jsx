'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from 'axios';

export default function TodoCard({ todos, onUpdateTodo }) {
  const handleMarkAsDone = async (todoId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        'http://localhost:3000/user/completed',
        { id: todoId, completed: true },
        { headers: { Authorization: token } }
      );
      onUpdateTodo();
    } catch (error) {
      console.error("Error marking todo as done:", error);
    }  
  };

  const handleDeleteTodo = async (todoId) => {
    try {
      const token = localStorage.getItem('token');
      axios.delete('http://localhost:3000/user/deleteTodo', { 
        data: { 
          id: todoId 
        },
        headers: { Authorization: token }
      });
      onUpdateTodo();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div>
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <Card key={todo._id} className="my-4">
            <CardHeader>
              <CardTitle>{todo.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{todo.description}</p>
              <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
            </CardContent>
            <CardFooter>
              {!todo.completed && (
                <Button onClick={() => handleMarkAsDone(todo._id)}>
                  Mark as Done
                </Button>
              )}
              <Button
                variant="destructive"
                onClick={() => handleDeleteTodo(todo._id)}
                className="ml-auto"
              >
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))
      ) : (
        <p>No todos found.</p>
      )}
    </div>
  );
}
