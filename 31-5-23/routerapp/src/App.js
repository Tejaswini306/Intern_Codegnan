import React from "react"
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './container/Home'
import About from './container/About'
import Contact from './container/Contact'
import Navigation from "./container/Navigation"
import Notfound from "./container/Notfound"

export default function App(){
  return(
    <div>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

