import React, { Component } from "react";
import styled from "styled-components";
import { SIGN_UP_PHONECHECK } from "../../config";
import { FINAL_SIGNUP } from "../../config";
import { PHONE_CHECK } from "../../config";

class StandardSignUp extends Component {
  constructor() {
    super();
    this.state = {
      phoneCheck: false,
      access: "",
      email: "",
      pw: "",
      nickname: "",
      isLoading: true,
      phone_number: "",
      sms_number: "",
    };
  }

  //핸드폰 번호 넘겨주기
  checkPhone = e => {
    e.preventDefault();
    const { phone_number } = this.state;
    fetch(PHONE_CHECK, {
      method: "POST",
      body: JSON.stringify({
        phone_number: phone_number,
      }),
    });
  };

  //휴대폰 인증번호 이게될까?
  certifyPhone = e => {
    e.preventDefault();
    const { phone_number, sms_number } = this.state;
    fetch(SIGN_UP_PHONECHECK, {
      method: "POST",
      body: JSON.stringify({
        phone_number: phone_number,
        sms_number: sms_number,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE === "SUCCESS") {
          alert("인증번호가 일치합니다");
        } else {
          alert("인증번호가 일치하지 않습니다.");
        }
      });
  };

  //id,pw,nickname,phonumber 최종 회원가입
  finalSignUp = e => {
    e.preventDefault();
    const { email, pw, nickname, sms_number, phone_number } = this.state;
    fetch(FINAL_SIGNUP, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: pw,
        nickname: nickname,
        phone_number: phone_number,
        sms_number: sms_number,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE === "SUCCESS") {
          window.alert("회원가입 성공");
          this.props.history.push("/SignIn");
        } else {
          window.alert("회원가입 실패");
        }
      });
  };
  //loading
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  checkInputValue = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <LoadingChang>
            <div>
              <img src="/images/logo.png" alt="loading" />{" "}
            </div>
          </LoadingChang>
        ) : (
          <>
            <FullStandard>
              <div className="standardContainer">
                <div className="standardTitle">회원가입</div>
                <StandardMainInput>
                  <div>
                    <input
                      className="standardInput"
                      type="text"
                      placeholder="아이디(이메일)"
                      onChange={this.checkInputValue}
                      name="email"
                    />
                  </div>
                  <div>
                    <input
                      className="standardInput"
                      type="password"
                      placeholder="비밀번호"
                      onChange={this.checkInputValue}
                      name="pw"
                    />
                  </div>
                  <div className="moreTen">10자 이상으로 해주세요.</div>
                  <input
                    className="standardInput"
                    type="password"
                    placeholder="비밀번호 한번더"
                  />
                </StandardMainInput>
                <div className="nextSignUp">
                  <div>
                    <input
                      className="writeNickName"
                      type="text"
                      placeholder="닉네임"
                      name="nickname"
                      onChange={this.checkInputValue}
                    />
                  </div>
                  <form className="phoneSend">
                    <input
                      className="phoneSign"
                      name="phone_number"
                      type="text"
                      placeholder="휴대폰번호(-없이 입력)"
                      onChange={this.checkInputValue}
                    />
                    <button className="sendNumber" onClick={this.checkPhone}>
                      인증번호 전송
                    </button>
                  </form>
                  <form className="checkingCheck">
                    <input
                      className="checkNumber"
                      type="text"
                      placeholder="인증번호"
                      name="sms_number"
                      onChange={this.checkInputValue}
                    />
                    <button className="showNumber" onClick={this.certifyPhone}>
                      인증하기
                    </button>
                  </form>
                </div>
                <button className="standardBtn" onClick={this.finalSignUp}>
                  가입하기
                </button>
              </div>
            </FullStandard>
          </>
        )}
      </>
    );
  }
}

export default StandardSignUp;

const FullStandard = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  .standardContainer {
    display: flex;
    align-items: center;
    text-align: center;
    flex-flow: column nowrap;
    width: 800px;
    height: 470px;
    margin-top: 50px;
  }
  .standardTitle {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.54px;
    color: rgb(51, 51, 51);
    text-align: center;
    font-weight: bold;
    margin-bottom: 50px;
  }
  .nextSignUp {
    max-width: 360px;
    margin: 15px auto;
    .writeNickName {
      width: 330px;
      padding: 14px 14px 12px;
      color: rgb(17, 17, 17);
      font-size: 14px;
      line-height: 22px;
      border-radius: 3px;
      background-color: rgb(250, 250, 250);
      border: 1px solid rgb(250, 250, 250);
      margin-top: 4px;
      margin-bottom: 8px;

      &:focus {
        outline: none;
      }
    }
    .phoneSend {
      display: flex;
      justify-content: space-between;
      .phoneSign {
        width: 219px;
        padding: 14px 14px 12px;
        color: rgb(17, 17, 17);
        font-size: 14px;
        line-height: 22px;
        border-radius: 3px;
        background-color: rgb(250, 250, 250);
        border: 1px solid rgb(250, 250, 250);
        margin-top: 4px;
        margin-bottom: 8px;

        &:focus {
          outline: none;
        }
      }
      .sendNumber {
        width: 136px;
        height: 50px;
        line-height: 20px;
        padding: 0px 13px;
        background-color: rgb(238, 238, 238);
        text-align: center;
        cursor: pointer;
        border-radius: 8px;
        color: rgb(170, 170, 170);
        font-size: 14px;
        margin: 4px 0px 8px;
        border: 1px solid rgb(238, 238, 238);
        &:focus {
          outline: none;
        }
        &:hover {
          background-color: #dedede;
        }
      }
    }
    .checkingCheck {
      display: flex;
      justify-content: space-between;
      .checkNumber {
        width: 246px;
        padding: 14px 14px 12px;
        color: rgb(17, 17, 17);
        font-size: 14px;
        line-height: 22px;
        border-radius: 3px;
        background-color: rgb(250, 250, 250);
        border: 1px solid rgb(250, 250, 250);
        margin-top: 4px;
        margin-bottom: 8px;

        &:focus {
          outline: none;
        }
      }
      .showNumber {
        width: 106px;
        height: 50px;
        line-height: 20px;
        padding: 0px 13px;
        background-color: rgb(255, 255, 255);
        text-align: center;
        cursor: pointer;
        border: 1px solid rgb(181, 197, 214);
        border-radius: 8px;
        color: rgb(181, 197, 214);
        font-size: 14px;
        margin: 4px 0px 8px;

        &:focus {
          outline: none;
        }
        &:hover {
          background-color: #f2f2f2;
        }
      }
    }
  }
  .standardBtn {
    width: 360px;
    height: 56px;
    line-height: 56px;
    padding: 0px 13px;
    background-color: rgb(181, 197, 214);
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
    color: rgb(244, 244, 244);
    font-size: 16px;
    margin-top: 15px;
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
`;

const StandardMainInput = styled.div`
  width: 400px;

  input {
    width: 330px;
    padding: 14px 14px 12px;
    color: rgb(17, 17, 17);
    font-size: 14px;
    line-height: 22px;
    border-radius: 3px;
    background-color: rgb(250, 250, 250);
    border: 1px solid rgb(250, 250, 250);
    margin-top: 4px;
    margin-bottom: 8px;

    &:focus {
      outline: none;
    }
  }
  .moreTen {
    display: flex;
    margin: 15px 0 15px 21px;
    font-size: 12px;
    line-height: 16px;
    color: rgb(153, 153, 153);
  }
`;

const LoadingChang = styled.div`
  display: inline-block;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 350px auto;
  width: 80px;
  height: 80px;

  img {
    width: 170px;
    height: 100px;
  }

  :after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #eb4034;
    border-color: #eb4034 transparent #eb4034 transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;
