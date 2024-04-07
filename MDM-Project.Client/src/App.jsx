import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss'

import HomePage from './containers/HomePages/HomePage';
import Schedule from './containers/Schedule/Schedule';
import ManageBooking from './containers/ManageBooking/ManageBooking';
import Invoice from './containers/Invoice/Invoice';
import Login from './containers/Auth/Login/Login';
import Register from './containers/Auth/Register/Register';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lich-trinh" element={<Schedule />} />
      <Route path="/dat-ve" element={<ManageBooking />} />
      <Route path="/hoa-don" element={<Invoice />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App