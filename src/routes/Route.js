import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Upload from '../pages/Upload';
import Invoice from '../pages/Invoice';
import Schedule from '../pages/Schedule';
import Calendar from '../pages/Calendar';
import Notification from '../pages/Notification';
import Settings from '../pages/Settings';
import SignIn from '../components/SignIn';

export default function route() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/invoice' element={<Invoice />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </Router>
  )
}
