import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import PrivateRoutes from './utils/PrivateRoutes'
import { AuthProvider } from './utils/AuthContext'



function App() {
  
  return (
     <Router>
      <AuthProvider>
       <Header />
        <Routes>
          
          <Route path="/login" element={<Login/>}/>
          <Route element={<PrivateRoutes/>}>
          <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </AuthProvider>
      </Router> 
    
  )
}

export default App
