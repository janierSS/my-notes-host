import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

const Login = React.lazy(() => import("loginRemote/Login"));
const NotesHome = React.lazy(() => import("notesHomeRemote/NotesHomeComponent"));


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
                <Suspense fallback={<div>Loading Home...</div>}>
                  <NotesHome />
                </Suspense>
              </ProtectedRoute>
            }
          />

          {/* Public route */}
          <Route
            path="login"
            element={
              <Suspense fallback={<div>Loading Login...</div>}>
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
