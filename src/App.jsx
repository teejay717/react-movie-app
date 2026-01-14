import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MovieDetail from "./pages/MovieDetail"
import Search from "./pages/Search"
import NavBar from "./components/NavBar"


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/movie/:id" element={<MovieDetail />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
