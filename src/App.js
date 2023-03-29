
import NavBar from './components/navBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './pages/products';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Products /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
