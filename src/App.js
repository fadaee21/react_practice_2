import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { UserList } from './pages/UserList'
import ErrorPage from './pages/ErrorPage'
import FirstPage from './pages/FirstPage'
import HomePage from './pages/HomePage'
import SecondPage from './pages/SecondPage'
import SecurityPage from './pages/SecurityPage'
import { UserItem } from './pages/UserItem'
import PublicPage from './pages/PublicPage'
import ProtectedPage from './pages/ProtectedPage'
import { AuthProvider } from './context'
import RequireAuth from './pages/RequireAuth'
import LoginPage from './pages/LoginPage'
import Register from './pages/Register'


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='firstPage' element={<FirstPage />} />
          <Route path='secondPage' element={<SecondPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
          <Route path='securityPage/*' element={<SecurityPage />} >
            <Route path='publicPage' element={<PublicPage />} />
            <Route path='protectedPage' element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>} />
          </Route>
          <Route path="users" element={<UserList />} />
          <Route path="users/:id" element={
            <RequireAuth>
              <UserItem />
            </RequireAuth>
          } />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App