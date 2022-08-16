import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { UserList } from './pages/UserList'
import ErrorPage from './pages/ErrorPage'
import FirstPage from './pages/FirstPage'
import GoodbyePage from './pages/GoodbyePage'
import HomePage from './pages/HomePage'
import SecondPage from './pages/SecondPage'
import SecurityPage from './pages/SecurityPage'
import WelcomePage from './pages/WelcomePage'
import { UserItem } from './pages/UserItem'




const App = () => {


  


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='firstPage' element={<FirstPage />} />
        <Route path='secondPage' element={<SecondPage />} />
        <Route path='securityPage/*' element={<SecurityPage />} >
          <Route index path='welcomePage' element={<WelcomePage />} />
          <Route index path='goodbyePage' element={<GoodbyePage />} />
        </Route>
        <Route path="users" element={<UserList />} />
        <Route path="users/:id" element={<UserItem />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App