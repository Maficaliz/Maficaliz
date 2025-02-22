import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import LangTest from './pages/tests/langTest';
import MoneyPage from './pages/money/money';
import Sandbox from './pages/sandbox/sandbox';

const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/sandbox" element={<Sandbox />} />
                <Route path="/lang" element={<LangTest />} />
                <Route path="/" element={<App />} />
                <Route path="/money" element={<MoneyPage />} />
            </Routes>
        </Router>
    );
    }


    export default RouterComponent