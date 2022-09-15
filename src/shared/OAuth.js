const REST_API_KEY = "80fffb8fffdb43c7d627f693b84a4416";
const REDIRECT_URI =  "http://localhost:3000/api/member/kakao/callback";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;