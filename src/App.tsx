import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';

function App() {

  return (
    <Router>
      <header>Header</header>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<div>Home</div>} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
      <main>
        <Outlet />
      </main>
    </Router>
  );
}

export default App
