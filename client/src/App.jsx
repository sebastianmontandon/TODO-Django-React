import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { TaskPage } from './pages/TaskPage'
import { TaskFromPage } from './pages/TaskFromPage'
import { Navigation } from './components/Navigation'
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to='/tasks' />}></Route>
          <Route path="/tasks" element={<TaskPage />}></Route>
          <Route path="/tasks-create" element={<TaskFromPage />}></Route>
          <Route path="/tasks/:id" element={<TaskFromPage />}></Route>
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App