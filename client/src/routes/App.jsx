import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AuthProvider } from "../context/authContext";
import { ProtectedRoute } from "./router";
import { Header } from "../components/headers/Header";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import { TaskFormPage } from "../pages/TaskFormPage";
import { LoginPage } from "../pages/LoginPage";
import { TasksPage } from "../pages/TasksPage";
import { TaskProvider } from "../context/tasksContext";
import { CountryProvider } from "../context/countryContext";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <CountryProvider >
          <BrowserRouter>
            <Header />
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/add-task" element={<TaskFormPage />} />
                <Route path="/tasks/:id" element={<TaskFormPage />} />
                <Route path="/profile" element={<h1>Profile</h1>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CountryProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
