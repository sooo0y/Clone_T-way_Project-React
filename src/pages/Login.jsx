import React from 'react'
import SubHeader from '../components/layout/SubHeader'
import Footer from '../components/main/Footer'
import LoginPage from '../components/login/LoginPage'
import MypageModal from '../components/layout/MypageModal'
const Login = (child) => {
  return (
    <>
    <SubHeader/>
    <LoginPage/>
    <Footer/>
    </>
  )
}

export default Login