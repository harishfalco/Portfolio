import React from 'react'
import "./app.css"
import { BrowserRouter as Router , Route } from 'react-router-dom'
import Skills from '../Skills/Skills'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import Navbar from '../../Navbar/Navbar'
// import GoHome from '../GoHome/GoHome';

const App = () => {
    return (
        <div>
           <Router>
               <div>
                   <Navbar />
                   <Route path="/" component={Home} exact />
                   <Route path="/about" component={About} exact />
                   <Route path="/skills" component={Skills}  exact/>
                   <Route path="/projects" component={Projects} exact />
                   <Route path="/contact" component={Contact}  exact/>
                   {/* <GoHome /> */}
               </div>
           </Router>
        </div>
    )
}

export default App
