import { Navigate, Route, Routes } from 'react-router-dom';
import { MainNav } from './components/MainNav';
import { HomePage } from './pages/home_page/HomePage';
import { Task1 } from './pages/task1/Task1';
import { Task2 } from './pages/task2/Task2';
import { Task3 } from './pages/task3/Task3';
import { Task4 } from './pages/task4/Task4';
import { Task5 } from './pages/task5/Task5';

export const App = () => {
  return (
    <>
      <MainNav />

      <Routes>
        <Route path="home" element={<Navigate to="/" replace /> } />
        <Route path="/" element={<HomePage />} />
        <Route path="task1" element={<Task1 />} />
        <Route path="task2" element={<Task2 />} />
        <Route path="task3" element={<Task3 />} />
        <Route path="task4" element={<Task4 />} />
        <Route path="task5" element={<Task5 />} />
      </Routes>

    </>
  )
}