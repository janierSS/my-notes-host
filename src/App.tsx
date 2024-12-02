import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';

const NotesHome = React.lazy(() => import('notesHomeRemote/NotesHome'))

function App() {

  return (
    <Router>
      <header>Header</header>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Suspense fallback={<div>Loading...</div>}><NotesHome/></Suspense>} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
      <main>
        <Outlet />
      </main>
    </Router>
  );
}

export default App
