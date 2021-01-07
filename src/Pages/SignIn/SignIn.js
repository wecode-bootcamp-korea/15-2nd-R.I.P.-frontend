import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { LOGIN_COMMON } from "../../config";
import { KAKAO_LOGIN } from "../../config";
const { Kakao } = window;

function SignIn(props) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nickName, setNickName] = useState("");
  const history = useHistory();

  const logInSign = () => {
    fetch(LOGIN_COMMON, {
      method: "POST",
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE === "SUCCESS") {
          alert("Login SUCCESS");
          console.log(res);
          localStorage.setItem("token", res.ACCESS_TOKEN);
          localStorage.setItem("NICKNAME", res.nickname);
          setNickName(res.nickname);
          history.push("/");
        } else alert("TRY AGAIN");
      });
  };

  const signInPress = e => {
    const isValid = id.includes("@") && pw.length >= 5;
    if (isValid === false) {
      alert("check your ID or Password");
    }
    if (isValid === true) {
      logInSign();
    }
  };

  const handleInputChange = e => {
    if (e.target.name === "id") {
      setId(e.target.value);
    } else {
      setPw(e.target.value);
    }

    //{e.target.name === id ? setId(e.target.value) : setPw(e.target.value)}
  };

  //카카오 로그인
  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(KAKAO_LOGIN, {
          method: "POST",
          body: JSON.stringify({
            kakao_access_token: authObj.access_token,
          }),
        })
          .then(res => res.json())
          .then(res => {
            console.log(res);
            localStorage.setItem("kakao_access_token", res.ACCESS_TOKEN);
            if (res.ACCESS_TOKEN) {
              alert("KAKAO LOGIN SUCCESS");
              history.push("/");
            } else {
              alert("KAKAO LOGIN FAIL");
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <>
      <div className="forNav"></div>
      <LoginContainer>
        <div className="loginBox">
          <div className="loginFont">로그인</div>
          <div className="loginInputBox">
            <LogInput
              className="logInput"
              type="text"
              placeholder="아이디(이메일)"
              name="id"
              onChange={handleInputChange}
            />
            <LogInput
              className="logInput"
              type="password"
              placeholder="비밀번호"
              name="pw"
              onChange={handleInputChange}
            />
            <div className="findPassword">비밀번호 찾기</div>
          </div>
          <button className="loginBtn" onClick={signInPress}>
            로그인
          </button>
          <div className="underbtn">다른방식으로 로그인</div>
          <SocialLog>
            <img
              className="socialLoginImo"
              src="/images/kakao2.png"
              alt="kakao"
              onClick={kakaoLoginClickHandler}
            />
            <img
              className="socialLoginImo"
              src="/images/facebook.png"
              alt="face"
            />
          </SocialLog>
        </div>
      </LoginContainer>
    </>
  );
}

export default SignIn;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
  width: 100%;
  padding: 0px;
  min-height: 653px;

  .loginBox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    margin: 0px auto;
    max-width: 808px;
    width: 100%;
    padding: 0px;
    min-height: 653px;
  }
  .loginFont {
    position: relative;
    height: 50px;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.54px;
    color: rgb(51, 51, 51);
    text-align: center;
    font-weight: bold;
    margin: 0px;
  }

  .findPassword {
    color: rgb(170, 170, 170);
    line-height: 20px;
    float: right;
    border-bottom: 1px solid rgb(170, 170, 170);
    cursor: pointer;
  }

  .loginBtn {
    width: 360px;
    height: 56px;
    line-height: 24px;
    padding: 16px;
    background-color: rgb(181, 197, 214);
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    margin: 33px 0px 0px;
    border: 1px solid rgb(181, 197, 214);
    position: relative;
    transition: 800ms ease all;
    &:focus {
      outline: none;
    }
  }
  button:hover {
    background: #fff;
    color: #1aab8a;
  }
  button:before,
  button:after {
    content: “”;
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #1aab8a;
    transition: 400ms ease all;
  }
  button:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  button:hover:before,
  button:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
  
  }
  .underbtn {
    color: rgb(181, 197, 214);
    margin-top: 40px;
    text-align: center;
    cursor: pointer;
`;
const LogInput = styled.input`
  display: block;
  width: 360px;
  height: 50px;
  color: rgb(17, 17, 17);
  font-size: 14px;
  line-height: 22px;
  border-radius: 4px;
  background-color: rgb(250, 250, 250);
  border: 1px solid rgb(250, 250, 250);
  margin-top: 4px;
  margin-bottom: 8px;
  padding-left: 10px;

  &:focus {
    outline: none;
  }
`;
const SocialLog = styled.div`
  margin-top: 16px;
  width: 200px;
  display: flex;
  justify-content: space-between;
  img {
    &:hover {
      opacity: 0.5;
    }
  }
  .socialLoginImo {
    width: 48px;
    height: 48px;
    display: inline;
  }
`;
