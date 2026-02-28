import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pagenotfound" element={<PageNotFound />} />
        </Routes>
    );
}

export default App;