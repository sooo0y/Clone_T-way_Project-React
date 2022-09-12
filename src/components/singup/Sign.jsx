import React from 'react'
import styled from 'styled-components'

const Sign = () => {
  return (
    <div>
      <StTit><h1>회원가입하기</h1><p>회원님의 개인정보를 입력해주시기 바랍니다.</p></StTit>
      
      <StForm>
      
      <StTbody >
        <tr>
          <StSignUpTit>아이디</StSignUpTit>
          <StSignTd><StInputWrap  >
            <span>
              <StInput maxlength="20" type="text" placeholder="6~20자리, 영대 소문자, 숫자 조합." />
              <StButton >중복 확인</StButton>
            </span>
          </StInputWrap></StSignTd>
        </tr>
        <tr>
          <StSignUpTit>비밀번호</StSignUpTit>
          <StSignTd>
            <StInputWrap >
              <span>
                <StInput   maxlength="20"  title="비밀번호 입력 란" type="password" placeholder="8자~20자리, 영대소문자,숫자,특수기호 중 2가지 이상 조합." />
              </span>
            </StInputWrap>
          </StSignTd>
        </tr>
        <tr>
          <StSignUpTit>비밀번호 확인</StSignUpTit>
          <StSignTd>
            <StInputWrap >
              <span>
                <StInput   maxlength="20"  title="비밀번호 확인 입력 란" type="password" placeholder="8자~20자리, 영대소문자,숫자,특수기호 중 2가지 이상 조합." />
              </span>
            </StInputWrap>
          </StSignTd>
        </tr>
      </StTbody>
      <StSignButtonWrap>
        <StSignButton >회원가입 완료하기</StSignButton>
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