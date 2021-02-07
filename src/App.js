import { AnimatePresence } from "framer-motion";
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <AnimatePresence>
                <Router>
                    <Route path="/" exact >
                        <Home />
                    </Route>
                </Router>
            </AnimatePresence>
        </div>
    );
}

export default App;