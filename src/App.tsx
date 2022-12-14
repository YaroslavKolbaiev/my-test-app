import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainNav } from './components/MainNav';
import { Task1 } from './pages/Task1';
import { Task2 } from './pages/Task2';
import { Task3 } from './pages/Task3';
import { Task4 } from './pages/Task4';

export const App = () => {
  return (
    <>
      <MainNav />

      <Routes>
        <Route path="home" element={<Navigate to="/" replace /> } />
        <Route path="/" element={<h1 className="title">Home Page</h1>} />
        <Route path="task1" element={<Task1 />} />
        <Route path="task2" element={<Task2 />} />
        <Route path="task3" element={<Task3 />} />
        <Route path="task4" element={<Task4 />} />
      </Routes>

    </>
  )
}