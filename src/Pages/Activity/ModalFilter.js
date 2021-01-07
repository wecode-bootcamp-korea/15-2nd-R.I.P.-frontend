import React from "react";
import styled from "styled-components";
import { useState } from "react";

function ModalFilter({
  togglingModal,
  eveyModalQueryString,
  userOrder,
  setUserOrder,
}) {
  const [boxCheck, setBoxCheck] = useState(false);

  const onlyOneCheckBox = (targetObj, lnObj) => {
    let len = targetObj.length;

    if (len > 1) {
      for (let i = 0; i < len; i++) {
        if (targetObj[i] !== lnObj) targetObj[i].checked = false;
      }
    }
  };

  const filterUserOrder = e => {
    setUserOrder(e.target.name);
  };

  return (
    <FullActivityModal>
      <FullModalFilter>
        <ModalHead>
          <span>필터</span>
          <span>초기화</span>
          <span className="XbuttonInModal" onClick={togglingModal}>
            X
          </span>
        </ModalHead>

        <ModalMid>
          <p>정렬</p>
          {BUTTON_CONTENT.CONTENT_ARRAY.map((element, index) => {
            return (
              <ModalMainContent>
                <span key={index}>{element.category}</span>
                <input
                  onClick={filterUserOrder}
                  name={element.order}
                  type="checkbox"
                ></input>
              </ModalMainContent>
            );
          })}
        </ModalMid>
        <ModalBottom>
          <span className="titlePrice">가격</span>
          <span className="moneyGageBar">전체</span>
          <input type="range"></input>
          <PriceZeroTop>
            <span>0</span>
            <span>300.000</span>
          </PriceZeroTop>
        </ModalBottom>
        <ApplyButton>
          <button>적용하기</button>
        </ApplyButton>
      </FullModalFilter>
    </FullActivityModal>
  );
}

const BUTTON_CONTENT = {
  CONTENT_ARRAY: [
    { category: "인기순", order: "hit_count" },
    { category: "등록일순", order: "created_at" },
    { category: "평점순", order: "star_rating" },
    { category: "가격 높은순", order: "price" },
    { category: "가격 낮은순", order: "-price" },
    { category: "당일 사용 가능한", order: "-sales_rate" },
    { category: "슈퍼 호스트만", order: "five_star_count" },
  ],
};

export default ModalFilter;

const FullActivityModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;

const FullModalFilter = styled.div`
  height: 596px;
  width: 360px;
  margin: 100px auto;
  border: 1px solid #ebebeb;
  background-color: #fff;
  z-index: 2000;
  border-radius: 4px;
`;

const ModalHead = styled.section`
  height: 60px;
  width: 280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(238, 238, 238);

  .XbuttonInModal {
    cursor: pointer;
  }
`;

const ModalMid = styled.section`
  height: 400px;
  width: 280px;
  margin: 0 auto;
  justify-content: space-between;
  /* border-bottom: 1px solid rgb(238, 238, 238); */

  p {
    height: 41px;
    font-weight: bold;
    display: flex;
    font-size: 14px;
    color: black;
    word-break: normal;
    overflow-wrap: break-word;
    align-items: center;
  }
`;

const ModalMainContent = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 13px;
    color: black;
    word-break: normal;
    overflow-wrap: break-word;
  }
  input {
    width: 18px;
    height: 18px;
  }
`;

const ModalBottom = styled.div`
  width: 280px;
  height: 80px;
  margin: 0 auto;

  .titlePrice {
    font-weight: bold;
    font-size: 16px;
    color: black;
  }
  .moneyGageBar {
    color: rgb(51, 151, 255);
    font-weight: normal;
    margin-left: 15px;
  }
  input {
    margin-top: 15px;
    width: 270px;
  }
`;

const PriceZeroTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ApplyButton = styled.div`
  width: 280px;
  margin: 0 auto;
  button {
    width: 280px;
    height: 50px;
    line-height: 13px;
    padding: 20px 0px;
    background-color: rgb(51, 151, 255);
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    color: white;
    font-size: 13px;
    font-weight: bold;
    border: 1px solid rgb(51, 151, 255);
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
  &:focus {
    outline: none;
  }
`;
