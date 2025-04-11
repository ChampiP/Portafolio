import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import AboutDetails from './components/AboutDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about-details" element={<AboutDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
