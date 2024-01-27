import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/common.scss'

import Header from './components/layout/header.jsx';
import Footer from './components/layout/footer.jsx';  

import Index from './pages/index/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Index />
    <Footer />
  </React.StrictMode>,
)
