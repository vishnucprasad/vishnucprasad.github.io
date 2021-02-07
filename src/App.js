import { AnimatePresence } from "framer-motion";
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
    return (
        <div className="App">
            <AnimatePresence>
                <Router>
                    <Route path="/" exact >
                        <Home />
                    </Route>
                    <Route path="/about" exact >
                        <About />
                    </Route>
                </Router>
            </AnimatePresence>
        </div>
    );
}

export default App;