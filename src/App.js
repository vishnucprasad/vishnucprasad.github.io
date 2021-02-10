import { AnimatePresence } from "framer-motion";
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Credits from "./components/Credits";

const App = () => {
    return (
        <div className="App">
            <AnimatePresence>
                <Router basename='/'>
                    <Route exact path="/" >
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/resume">
                        <Resume />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Router>
            </AnimatePresence>
            <Credits />
        </div>
    );
}

export default App;