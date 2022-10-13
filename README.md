# README

sequelize-cli가 ESM 문법과 호환이 잘 되지 않는 탓에 해당 패키지를 사용하지 않게 되었습니다.


[SWAGGER API DOC](https://app.swaggerhub.com/apis-docs/NINTHSUN91_1/hanghae_week4/1.0.0#/)


![ERD](/ref/drawSQL.png)



# 사용 주의 사항

아래 내용과 코드와 무관하게 편의상 쿠키에 refreshToken이 저장되게 ec2 서버를 수정했습니다. accessToken만 Bearer 방식으로 전달하면 됩니다.

refreshToken을 약식으로 구현하였기 때문에 로그인 시 헤더로 accessToken과 refreshToken이 전달되며, 인가가 필요한 작업을 요청할 시 Request Header에 { Authorization: "Bearer accessToken", RefreshToken: "refreshToken" }을 추가하여야 정상적으로 인증이 이루어집니다. 또한, refresh 요청을 하는 클라이언트가 없기 때문에 인증 미들웨어를 거치고나면 기존의 유효한 accessToken 혹은 새로 갱신한 accessToken이 다시 { Authorization: "Bearer accessToken" }의 형태로 헤더를 통해 전달됩니다.

![refresh](/ref/refresh_short.png)


