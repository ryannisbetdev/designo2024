import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/common.scss';

import Header from './components/layout/header.jsx';
import Footer from './components/layout/footer.jsx';  

import Index from './pages/index/index.jsx';
import WebPage from './pages/web/web.jsx';
import GraphicsPage from './pages/graphics/graphics.jsx';
import AppPage from './pages/app/app.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className="pageWrap">
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/webdesign" element={<WebPage />}></Route>
          <Route path="/graphicdesign" element={<GraphicsPage />}></Route>
          <Route path="/appdesign" element={<AppPage />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
)
