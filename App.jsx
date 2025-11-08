import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Task from './pages/Task.jsx'
import Flow from './pages/Flow.jsx'
import NavBar from './components/NavBar.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
        <Route path="/flow" element={<Flow />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  )
}
