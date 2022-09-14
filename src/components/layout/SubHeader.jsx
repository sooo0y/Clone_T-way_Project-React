import React from 'react'
import './substyle.css'
import { useNavigate } from 'react-router-dom'
const SubHeader = () => {
    const navigate = useNavigate();
    return (
        <div className="Stcontainer1">
            <header className='const StHeaderContainer1'>
                <h1 onClick={()=>{navigate("/")}} className='StLogo1'></h1>
                <nav className='StNavBox1'>
                    <ul className='StNavContainer1'>
                        <li className="StNavList1">항공권예매</li>
                        <li className="StNavList1">나의 예약</li>
                        <li className="StNavList1">서비스안내</li>
                        <li className="StNavList1">온라인면세점</li>
                        <li className="StNavList1">이벤트</li>
                        <li className="StNavList1">제휴</li>
                    </ul>
                </nav>
                <div className='StSideBox1'>
                    <p className="StMyPage1">나의페이지</p>
                </div>
            </header>
        </div>
    )
}

export default SubHeader