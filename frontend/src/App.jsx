import React from 'react'
import Header from './components/Header'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import OtherProjects from './pages/OtherProjects'
import Contact from './pages/Contact'

export default function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path='portfolio' element={<Portfolio />} />
                    <Route path='portfolio/others' element={<OtherProjects />}/>
                    <Route path='contact' element={<Contact />}/>
                </Route>
            </Routes>
        </div>
    )
}