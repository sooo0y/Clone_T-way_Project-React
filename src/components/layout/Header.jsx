import React from 'react'

import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'
import { getCookie } from '../../shared/Cookie';
import { logout } from '../../redux/config/module/users';
import { useDispatch } from 'react-redux';
const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = getCookie("isLogin")
    console.log(token)

    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장 
    const [ScrollActive, setScrollActive] = useState(false);
    function handleScroll() {
        if (ScrollY > 90) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
        }
    }
    useEffect(() => {
        function scrollListener() { window.addEventListener("scroll", handleScroll); } //  window 에서 스크롤을 감시 시작
        scrollListener(); // window 에서 스크롤을 감시
        return () => { window.removeEventListener("scroll", handleScroll); }; //  window 에서 스크롤을 감시를 종료
    });
    return (
        <>
            <div className={ScrollActive ? "fixedBox Stcontainer" : "Stcontainer"}>
                <header className='const StHeaderContainer'>
                    <h1 onClick={()=>{navigate("/")}} className={ScrollActive ? "fixedLogo" : 'StLogo'}></h1>
                    <nav className='StNavBox'>
                        <ul className='StNavContainer'>

                            {token == null ? <li onClick={() => {alert("로그인 후 이용하세요");navigate("/login")}} className={ScrollActive ? "fixedBox1" : "StNavList"}>항공권예매</li> : <li  onClick={() => {navigate("/search")}} className={ScrollActive ? "fixedBox1" : "StNavList"}>항공권예매</li>}
                            {token == null ? <li onClick={() => {alert("로그인 후 이용하세요");navigate("/login")}} className={ScrollActive ? "fixedBox1" : "StNavList"}>나의 예약</li> : <li  onClick={() => {navigate("/mypage")}} className={ScrollActive ? "fixedBox1" : "StNavList"}>나의 예약</li>}

                            <li className={ScrollActive ? "fixedBox1" : "StNavList"}>서비스안내</li>
                            <li className={ScrollActive ? "fixedBox1" : "StNavList"}>온라인면세점</li>
                            <li className={ScrollActive ? "fixedBox1" : "StNavList"}>이벤트</li>
                            <li className={ScrollActive ? "fixedBox1" : "StNavList"}>제휴</li>
                        </ul>
                    </nav>
                    <div className='StSideBox'>
                        {token == null ? <p onClick={() => { navigate("/login") }} className={ScrollActive ? "fixedMyPage" : "StMyPage"}>나의페이지</p> : <p onClick={() => { navigate("/login") }} className={ScrollActive ? "fixedMyPage2" : "StMyPage2"}>나의페이지</p>}
                        <button onClick={() => {
                            dispatch(logout(),
                                alert('로그아웃 성공'),
                                navigate("/login")
                            )
                        }}>로그아웃</button>
                    </div>
                </header>
            </div>

        </>
    )
}

export default Header




