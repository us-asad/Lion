import { Footer, Header } from 'components'
import Home from 'pages/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
      <div style={{height: "10000px", background: "#ccc"}} />
    </div>
  )
}
