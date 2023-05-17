import React from 'react'
import Header from './components/Header'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'

export default function App() {
    return (
        <div>
        <Routes>
            <Route path='/' element={<Header />}>
                <Route index element={<Home />} />
            </Route>
            
        </Routes>
        </div>

    )
}