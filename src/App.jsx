// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Layout from "./layout/Layout";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages with Layout */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* Admin Pages with AdminLayout */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout>
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
