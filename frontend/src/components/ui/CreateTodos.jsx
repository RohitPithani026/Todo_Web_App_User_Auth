import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from 'axios';
import TodoCard from './Todos';

export default function CreateTodoCard({ initialTitle = '', initialDescription = '' }) {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [todos, setTodos] = useState([]);


  const fetchTodos = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/user/userTodo', {
        headers: { Authorization: token }
      });
      setTodos(response.data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos(); 
  }, []);
  const handleCreateTodo = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const data = { title, description };
      await axios.post('http://localhost:3000/user/todo',
        data, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        }
      });

      fetchTodos(); 
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen mt-18">
      <Card className="w-[1200px] max-w-full mb-8">
        <CardHeader>
          <CardTitle>Todo Item</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter todo title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter todo description"
              rows={3}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button onClick={handleCreateTodo}>Add a todo</Button>
        </CardFooter>
      </Card>
      <div className="w-[1200px] max-w-full">
        <TodoCard todos={todos} onUpdateTodo={fetchTodos} />
      </div>
    </div>
  );
}
