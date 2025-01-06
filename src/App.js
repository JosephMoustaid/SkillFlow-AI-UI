import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import './css/style.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;