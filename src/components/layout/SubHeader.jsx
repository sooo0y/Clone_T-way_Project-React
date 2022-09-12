import React from 'react'
import './substyle.css'
const SubHeader = () => {
    return (
        <div className="Stcontainer">
            <header className='const StHeaderContainer'>
                <h1 className='StLogo'></h1>
                <nav className='StNavBox'>
                    <ul className='StNavContainer'>
                        <li className="StNavList">항공권예매</li>
                        <li className="StNavList">나의 예약</li>
                        <li className="StNavList">서비스안내</li>
                        <li className="StNavList">온라인면세점</li>
                        <li className="StNavList">이벤트</li>
                        <li className="StNavList">제휴</li>
                    </ul>
                </nav>
                <div className='StSideBox'>
                    <p className="StMyPage">나의페이지</p>
                </div>
            </header>
        </div>
    )
}

export default SubHeader