import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/ui/SignIn-Page';
import SignUpPage from './components/ui/SignUp-Page';
import TodoCard from './components/ui/Todos';
import CreateTodoCard from './components/ui/CreateTodos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/todo" element={<TodoCard />} />
        <Route path="/createTodo" element={<CreateTodoCard/>} />
      </Routes>
    </Router>
  );
}

export default App;
