import { Routes, Route } from "react-router-dom"
import { followingDotCursor } from "cursor-effects"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import "./App.css"
import { useEffect } from "react"
import Nav from "./components/Nav"

export default function App() {
  // Only run once
  useEffect(() => {
    new followingDotCursor()
  }, [])

  return (
    <>
      <Nav /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>

  )
}
