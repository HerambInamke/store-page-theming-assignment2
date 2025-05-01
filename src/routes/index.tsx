import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@/views/Home'
import ThemesPage from '@/views/Home/themes'

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/themes" element={<ThemesPage />} />
        </Routes>
    )
}

export default AppRoutes 