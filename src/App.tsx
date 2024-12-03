import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

const NotesHome = React.lazy(() => import("notesHomeRemote/NotesHome"));
const Login = React.lazy(() => import("loginRemote/module"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Redirect root path "/" to "/home" */}
          <Route index element={<Navigate to="/home" replace />} />

          {/* Protected index route */}
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <Suspense fallback={<div>Loading...</div>}>
                  <NotesHome />
                </Suspense>
              </ProtectedRoute>
            }
          />

          {/* Public route */}
          <Route
            path="login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="error"
            element={<div>Error</div>}
          />

          {/* Catch-all route */}
          <Route path="*" element={<h2>Page not found</h2>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
