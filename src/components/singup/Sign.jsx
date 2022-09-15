import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import axios from "axios";
const Sign = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userId, setuserId] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [idMessage, setIdMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')


  const [isId, setIsId] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)

  const onChangeName = (e) => {
    const usernameRegex = /^(?=.*[a-zA-z0-9])(?=.*[a-zA-z]).{4,12}$/
    const usernameCurrnet = e.target.value 
    setuserId(usernameCurrnet)
    
    if(!usernameRegex.test(usernameCurrnet)){
        setIdMessage('영문자랑 숫자만으로 구성해주세요')
        setIsId(false)
    }else{
        setIdMessage('올바른 형식입니다')
        setIsId(true)
    }
};
const onChangePassword = (e) => {
  const passwordRegex = /^(?=.*[a-zA-z])(?=.*[0-9]).{8,32}$/
  const passwordCurrnet = e.target.value;
  setPassword(passwordCurrnet)

  if(!passwordRegex.test(passwordCurrnet)){
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
      setIsPassword(false);
  }else{
      setPasswordMessage('안전한 비밀번호에요!')
      setIsPassword(true);
  }
}

const onChangePasswordConform = (e) => {
  const passwordConformRegex = /^(?=.+[a-zA-z])(?=.+[0-9]).{8,32}$/
  const passwordConformCurrnet = e.target.value;
  setPasswordConfirm(passwordConformCurrnet)

  if(!password===passwordConfirm){
      setPasswordConfirmMessage('비밀번호가 틀립니다')
      setIsPasswordConfirm(false);
  }else{
      setPasswordConfirmMessage('비밀번호가 같습니다')
      setIsPasswordConfirm(true);
  }
}
const userInfo = {
  userId,
  password,
  passwordConfirm
}

const onSubmitHandler = async (e) => {
  e.preventDefault();
if( userId.trim()===""|| password.trim() === ""|| passwordConfirm.trim() === ""){
  return alert ('모든 항목을 입력해주세요')
};   
if(password !== passwordConfirm){
  return alert('비밀번호 확인이 일치하지 않습니다.')};
if(isId !== true || isPassword !== true || isPasswordConfirm !== true ){
  return alert('형식을 확인해주세요')
}
const data = await axios.post(
  "http://3.39.254.156/api/member/signup",
  userInfo,{
      headers:{
          "Content-Type": "application/json",
      }
  }
);
console.log(data)
if(data.data.success){
  navigate('/login');
}else{
  window.alert(data.error.message)
}


}  
  return (
    <div>
      <StTit><h1>회원가입하기</h1><p>회원님의 개인정보를 입력해주시기 바랍니다.</p></StTit>
      
      <StForm>
      
      <StTbody >
        <tr>
          <StSignUpTit>아이디</StSignUpTit>
          <StSignTd><StInputWrap  >
            <span>
              <StInput maxlength="20" type="text" name='username' placeholder="6~20자리, 영대 소문자, 숫자 조합."  value={userId} onChange={onChangeName}/>
              <StButton >중복 확인</StButton>
            </span>
          </StInputWrap></StSignTd>
        </tr>
        <tr>
          <StSignUpTit>비밀번호</StSignUpTit>
          <StSignTd>
            <StInputWrap >
              <span>
                <StInput   maxlength="20"  title="비밀번호 입력 란" type="password" placeholder="8자~20자리, 영대소문자,숫자,특수기호 중 2가지 이상 조합." value={password} onChange={onChangePassword} />
              </span>
            </StInputWrap>
          </StSignTd>
        </tr>
        <tr>
          <StSignUpTit>비밀번호 확인</StSignUpTit>
          <StSignTd>
            <StInputWrap >
              <span>
                <StInput value={passwordConfirm} onChange={onChangePasswordConform}  maxlength="20"  title="비밀번호 확인 입력 란" type="password" placeholder="8자~20자리, 영대소문자,숫자,특수기호 중 2가지 이상 조합." />
              </span>
            </StInputWrap>
          </StSignTd>
        </tr>
      </StTbody>
      <StSignButtonWrap>
        <StSignButton onClick={onSubmitHandler}  >회원가입 완료하기</StSignButton>
      </StSignButtonWrap>
      </StForm>
    </div>
  )
}

export default Sign
const StTit = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 100px;
`
const StSignUpTit =styled.th`
  padding: 20px 30px;
    font-size: 16px;
    font-weight: normal;
    color: rgb(77, 77, 77);
    text-align: left;
    vertical-align: middle;
    border-bottom: 1px solid rgb(224, 224, 224);
    background-color: rgb(245, 245, 245);
`
const StSignTd = styled.td`
width: 90%;
  position: relative;
    padding: 14px 20px;
    font-size: 16px;
    color: rgb(26, 26, 26);
    text-align: left;
    vertical-align: middle;
    border-bottom: 1px solid rgb(224, 224, 224);
`
const StInputWrap = styled.div`
  position: relative;
    margin-bottom: 8px;
    overflow: hidden;
`
const StInput = styled.input`
width: 500px;
  padding: 0px 20px;
    height: 46px;
    font-size: 16px;
    color: rgb(26, 26, 26);
    border: 1px solid rgb(204, 204, 204);
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
`
const StButton = styled.button`
  display: inline-block;
    padding: 12px 20px;
    min-width: 80px;
    min-height: 46px;
    font-size: 16px;
    margin-left: 15px;
    color: rgb(26, 26, 26);
    text-align: center;
    line-height: 1.1;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(128, 128, 128);
    border-radius: 3px;
    box-sizing: border-box;
    vertical-align: middle;
`
const StTbody = styled.tbody`
    width: 100%;
    
    
`
const StForm = styled.div`
  width: 1200px;
  margin:  0 auto;
  border-top: 1px solid rgb(26, 26, 26);
`
const StSignButton = styled.button`
  width: 170px;
  height: 60px;
  background-color: rgb(210, 44, 38);
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  
 
`
const StSignButtonWrap = styled.div`
width: 1200px;
text-align: center;
margin-top: 50px;
`