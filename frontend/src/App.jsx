import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskPage } from "./pages/TasksPages";
import { TaskForm } from "./pages/TaskForm";
import { Nav } from "./componests/Nav";
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to={"/tasks"} />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/tasks-form" element={<TaskForm />} />
        <Route path="/tasks-form/:id" element={<TaskForm />} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
