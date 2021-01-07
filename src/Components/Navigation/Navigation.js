import React, { Component } from "react";
import { Link } from "react-router-dom";
import EventNavigation from "./EventNavigation";
import styled from "styled-components";
import Modal from "./Modal";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      subNavigationToggle: false,
      modalToggle: false,
      NICKNAME: localStorage.getItem("NICKNAME"),
    };
  }

  toggleSubNav = () => {
    this.setState({
      subNavigationToggle: !this.state.subNavigationToggle,
    });
  };

  handleModal = () => {
    this.setState({
      modalToggle: !this.state.modalToggle,
    });
  };

  render() {
    const ifYouGetToken = localStorage.getItem("NICKNAME") ? (
      <>
        <span>{localStorage.getItem("NICKNAME")}</span>
        <span
          onClick={() => {
            localStorage.clear();
            this.setState({ NICKNAME: "" });
          }}
        >
          로그아웃
        </span>
        <span>자주묻는 질문</span>
        <span>공지사항</span>
      </>
    ) : (
      <>
        <Link to="/SignUP">
          <span>회원가입</span>
        </Link>
        <Link to="/SignIn">
          <span>로그인</span>
        </Link>
        <span>자주 묻는 질문</span>
        <span>공지사항</span>
      </>
    );
    return (
      <div>
        <FullNavBar>
          <div className="superNavigation">
            <div className="topMax">
              <div className="upNavigation">
                <div className="UpNavHost">
                  <span>호스트 지원</span>
                </div>
                <div className="upNavContents">{ifYouGetToken}</div>
              </div>
            </div>
            <div className="midMax">
              <div className="middleNavigation">
                <CategoryImoBox>
                  <Link to="/CategoryNav">
                    <img
                      className="middleNavImo"
                      src="/images/hamburger.png"
                      alt="burger"
                    />
                  </Link>
                  <div className="explainImo">카테고리</div>
                </CategoryImoBox>
                <span className="mainMiddleLogo">
                  <Link to="/">
                    <img
                      className="mainLogo"
                      src="/images/logo.png"
                      alt="mainLogo"
                    />
                  </Link>
                </span>
                <SearchBoxInNav>
                  <input
                    className="mainSearch"
                    type="text"
                    placeholder="검색어를 입력해 주세요."
                    onClick={this.handleModal}
                  />
                  <img
                    className="loupeImo"
                    src="/images/loupe.png"
                    alt="loupe"
                  />
                </SearchBoxInNav>
                <CategoryImoBox>
                  <img
                    className="middleNavImo"
                    src="/images/book.png"
                    alt="book"
                  />
                  <div className="explainImo">피드</div>
                </CategoryImoBox>
                <CategoryImoBox>
                  <img
                    className="middleNavImo"
                    src="/images/bookmark.png"
                    alt="bookmark"
                  />
                  <div className="explainImo">저장</div>
                </CategoryImoBox>
                <CategoryImoBox>
                  <img
                    className="middleNavImo"
                    src="/images/user.png"
                    alt="user"
                  />
                  <div className="explainImo">마이</div>
                </CategoryImoBox>
              </div>
            </div>
            <BottomMax>
              <div className="bottomCategory">
                <div>추천</div>
                <div onClick={this.toggleSubNav}>일상</div>
                <div>국내여행</div>
                <div>베스트</div>
                <div>기획전</div>
              </div>
            </BottomMax>
          </div>
        </FullNavBar>
        {this.state.modalToggle ? <Modal /> : null}
        {/* <div>{this.state.subNavigationToggle ? <EventNavigation /> : ""}</div> */}
        <div> {this.state.subNavigationToggle && <EventNavigation />}</div>
      </div>
    );
  }
}

export default Navigation;

const FullNavBar = styled.div`
  height: 176px;
  display: flex;
  position: relative;
  justify-content: center;
  border-bottom: 1px solid #ebebeb;
  z-index: 600;
  background-color: #fff;

  .topMax {
    width: 1700px;
    background-color: rgb(244, 244, 244);

    .upNavigation {
      margin: 0 auto;
      max-width: 808px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 32px;
    }
    span {
      margin-right: 10px;
      color: rgb(119, 119, 119);
      font-size: 10px;
      line-height: 14px;
      letter-spacing: -0.3px;
    }
  }
  .midMax {
    width: 1700px;
    border-bottom: 1px solid #ebebeb;
    .middleNavigation {
      margin: 0 auto;
      max-width: 808px;
      height: 88px;
      display: flex;
      align-items: center;

      .imoBoxNav {
        width: 48px;
        height: 58px;
        cursor: pointer;
        font-size: 14px;
        text-align: center;
      }
      .explainImo {
        margin-top: 3px;
        font-size: 10px;
        line-height: 14px;
        letter-spacing: -0.3px;
        text-align: center;
        color: rgb(51, 51, 51);
      }

      .mainLogo {
        margin-left: 20px;
        width: 68px;
        height: 24px;
      }
    }
  }
`;

const BottomMax = styled.div`
  width: 1700px;
  .bottomCategory {
    max-width: 808px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 56px;
    color: rgb(170, 170, 170);
    font-weight: bold;
    cursor: pointer;

    div {
      &:hover {
        color: rgb(51, 51, 51);
        font-weight: bold;
      }
    }
  }
`;

const SearchBoxInNav = styled.div`
  display: flex;
  input {
    margin-left: 10px;
    width: 440px;
    height: 38px;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0px 12px;
    padding-left: 60px;
    border-radius: 19px;
    background-color: rgb(244, 244, 244);
    border: none;

    &:focus {
      outline: none;
      border: 1px solid blue;
    }
  }
  img {
    width: 20px;
    height: 20px;
    position: absolute;
    margin: 10px 0 0 25px;
    font-size: 100px;
  }
`;

const CategoryImoBox = styled.span`
  width: 70px;
  height: 50px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;

  img {
    margin-top: 10px;
    width: 24px;
    height: 24px;
  }
`;
