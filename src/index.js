import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import Login from './components/Login/Login';
import Bingo from './components/Bingo/Bingo';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/bingo" element={<Bingo />} />
            <Route path="/" element={<Login />} />
        </Routes>
    </BrowserRouter>
);