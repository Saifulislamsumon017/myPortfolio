import { Outlet } from 'react-router';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Particle from './Components/Particle';

function App() {
  return (
    <>
      <Particle />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
