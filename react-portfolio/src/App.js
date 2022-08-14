
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout.component';
import Home from './components/home/home.component';
import About from './components/about/about.component';

import './App.scss';

function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/*<Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
