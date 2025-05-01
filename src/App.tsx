import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Verify from './pages/Verify';
import User from './pages/User';
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  const token =localStorage.getItem("token");

  // if(token){
  //   // return <Navigate to="/user" replace/>
  // }
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verify />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRole="user">
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="admin">
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;