# ✈ T'way-air 클론코딩 ✈

Innovation-Camp Week7 _ 7조  
Frontend GitHub : https://github.com/lee123so/Clone-T-way-Front_end  
Backend GitHub : https://github.com/sparta-team7/t-way-clone 
SA : https://www.notion.so/7-Tway-7f5f845972d24632882c9e52a356fc4a
웹 주소 : http://tway.s3-website.ap-northeast-2.amazonaws.com

## 📅 제작 기간
2022.09.09 ~ 2022.09.15 (7일)

## 👪 구성원 & 담당 

|이름|포지션|담당 기능|
|------|---|---|
|김민식|Backend|회원가입, 예매권 조회|
|서나연|Backend|회원가입, 로그인|
|이주현|Backend|탑승자 정보 조회, 티켓 예약 |
|김소연|Frontend|예매권 조회 기능, 탑승자 정보 입력 기능, 예약 기능|
|이희수|Frontend|로그인, 회원가입, 나의 예약 조회 기능|

## 🎞 시연 영상
https://youtu.be/6oblvLjBtP8

## 📗 와이어프레임
![image](https://user-images.githubusercontent.com/110370672/190314437-c1807b23-be87-4ce2-8296-24462a87803b.png)

## 📘 ERD
![image](https://user-images.githubusercontent.com/110370672/190314470-b3ac1092-c2e4-427c-a3cc-46ef8215b00a.png)

## 📙 API
![image](https://user-images.githubusercontent.com/110370672/190383061-d919245e-7f5c-477e-a2a2-d5b350400f18.png)

## 🖼 구현 이미지

## 👷 사용한 기술
`Back-end`
-   Java 11
-   Spring Boot 2.7.2
-   H2, MySQL
-   Spring security, JWT
-   AWS S3, IAM, EC2

`Front-end`

-   JavaScript
-   React
-   React-Toolkit
-   axios
-   React-redux

## 🏳‍🌈 기존 사이트와 다른 점
- 회원가입
    - 기존 Tway와는 달리 회원가입 과정에서 userid,, password 정보를 직접 받아 회원등록을 처리합니다.
- 메인페이지
    - 예약은 안되지만 예쁘다.
- 예약
    - 현장결제만 지원하며 수화물이 고정되어있다. (선택항목을 줄여 더욱 간편하고 빠르다)
    - 편도(도착지 제주도로 한정) 항공편만 예약이 가능하다
- 예약 조회
    - 구매 일자는 입력하지 않고 예약 번호로만 조회한다.

## 😡 Trouble Shooting

- "Parameter 0 of constructor in com.example.intermediate.service.TicketService required a bean of type
'com.example.intermediate.discount.RateDiscountPolicy' that could not be found.
라는 오류가 RateDiscountPolicy에 @Component가 들어가지 않아서 생기는 오류였다. 
스프링은 컴포넌트 스캔을 통해 의존 관계를 주입해준다.
의존관계가 주입된 Bean도 다른 Bean을 주입받을 수 있는데,
컴포넌트 스캔은 @Component가 달려있는 Bean만 의존관계를 주입시켜줄 수 있다."

- 79000을 79,000으로 표시하는 과정!
String type으로 변환한 charge값을 slice 함수를 사용해서 0,2와 2로 나누어 콤마를 찍어주는 방식으로 진행했는데, 만원 단위일 때는 문제가 없지만 십만원 단위부터는 문제가 됐다. 그래서 slice를 사용해서 인위적으로 나누어주는 방식이 아닌, 정규표현식을 사용해서 숫자가 3번 나타나는 부분에 ,를 찍어주는 방식을 사용하여 천단위로 나타낼 수 있었다.

- 여행 일정을 검색하는 페이지에서 출발지, 도착지, 탑승일, 인원수 각각 required가 설정되어있음에도 불구하고, 출발지와 도착지 select에 초기옵션으로 도시/공항이 선택되어있어서 별도로 선택하지 않아도 다음 페이지로 넘어가지는 현상이 발생했다. 도시/공항 옵션에 value="" 와 같이 빈값을 넣어줬더니 해결되었다.

- 카카오 로그인 시 get 요청이 2번가는 현상 --해결:React.StrictMode 삭제하니 해결되었다.
