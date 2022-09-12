import React from 'react'
import styled from 'styled-components'
const LoginPage = () => {
    return (
        <StContainer>
            <StTitbox><StTit>로그인</StTit></StTitbox>
            <StLoginContainer>

                <StLoginTit>
                    회원로그인
                </StLoginTit>
                <StLoginBox>
                    <StLoginForm>
                        <form action="">
                        <StInput maxLength={20} placeholder="아이디를 입력하세요" type="text" />
                        <StInput placeholder='비밀번호를 입력하세요' type="text" />
                        <StButton type="">로그인</StButton>
                        <div>
                            <p>아직 회원이 아니신가요?</p>
                        </div>
                        </form>
                    </StLoginForm>
                    <div>
                        <h1>SNS 서비스 계정으로 로그인</h1>
                        <StSnsLogin>
                            <StLi><img src="https://contents-image.twayair.com/homepage/images/member/sns_c_kakao.png" alt="" />
                                <p> 카카오</p></StLi>
                            <StLi><img src="https://contents-image.twayair.com/homepage/images/member/sns_c_naver.png" alt="" />
                                <p> 네이버</p></StLi>
                            <StLi><img src="https://contents-image.twayair.com/homepage/images/member/sns_c_fb.png" alt="" />
                                <p> 페이스북</p></StLi>
                        </StSnsLogin>
                    </div>
                </StLoginBox>
            </StLoginContainer>
        </StContainer>
    )
}

export default LoginPage
const StContainer = styled.div`
    width: 100%;
`
const StTitbox = styled.div`
width: 100%;
    margin: 0 auto;
`
const StTit = styled.h1`
width: 1200px;
text-align: center;
    margin:  0 auto;
    padding: 30px;
    
`
const StLoginTit = styled.h2`
    width: 1200px;
    margin: 0 auto 100px auto;
    text-align: center;
    padding: 20px;
    border-left:  1px solid #eee;
    border-right:  1px solid #eee;
    border-top: 4px solid #d22c26;
`
const StLoginBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
`
const StLoginContainer = styled.div`
    width: 1200px;
    margin: 0 auto;
`
const StInput = styled.input`
    width: 480px;
    height: 46px;
    border: 1px solid #eee;
    display: block;
    padding:  0px  0px 0px 20px;
    font-size: 16px;
    margin-bottom: 10px;
`
const StButton = styled.button`
    width: 100%;
    height: 60px;
    background-color: #d22c26;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
`
const StLoginForm = styled.div`
    width: 500px;
    padding-right: 40px;
    border-right: 1px solid #eee;
`
const StSnsLogin = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`
const StLi = styled.li`
    text-align: center;
`