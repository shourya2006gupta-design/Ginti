import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Understand from './pages/Understand';
import SelfEnumerate from './pages/SelfEnumerate';
import Explore from './pages/Explore';
import Trust from './pages/Trust';

export default function App() {
  return (
    <>
      <Header />
      <main className="main-content" role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/understand" element={<Understand />} />
          <Route path="/self-enumerate" element={<SelfEnumerate />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/trust" element={<Trust />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
