import React from 'react'
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { __KakaoLogin } from '../../redux/modules/users';
const KakaoLogin = () => {
    const dispatch = useDispatch();
    let params = new URL(document.URL).searchParams;
    let code = params.get("code");
    // console.log(code)
    useEffect(() => {
        console.log('gdnsakfn')
        dispatch(__KakaoLogin(code))
        
    });

    return (
    
        <div>
            <div>
                <p>잠시만 기다려 주세요! 로그인 중입니다.</p>
            </div>
        </div> 
    )
}

export default KakaoLogin