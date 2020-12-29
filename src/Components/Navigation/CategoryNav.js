import React from "react";
import styled from "styled-components";

const CategoryNav = props => {
  return (
    <FullContent>
      <div>
        <p>🐯액티비티</p>
        {CATEGORY.ACTIVITY.map(element => {
          return <button className="act">{element}</button>;
        })}
      </div>
      <div>
        <p>🙈배움</p>
        {CATEGORY.LEARNING.map(element => {
          return <button className="bae">{element}</button>;
        })}
      </div>
      <div>
        <p>🦁건강 뷰티</p>
        {CATEGORY.HEALTH.map(element => {
          return <button className="heal">{element}</button>;
        })}
      </div>
      <div>
        <p>🐶모임</p>
        {CATEGORY.MOIM.map(element => {
          return <button className="together">{element}</button>;
        })}
      </div>
      <div>
        <p>🐙제주여행</p>
        {CATEGORY.JEJU.map(element => {
          return <button className="je">{element}</button>;
        })}
      </div>
      <div>
        <p>🐣내륙여행</p>
        {CATEGORY.TRIP.map(element => {
          return <button className="nae">{element}</button>;
        })}
      </div>
    </FullContent>
  );
};

const CATEGORY = {
  ACTIVITY: [
    "아웃도어",
    "서핑",
    "스포츠",
    "수상레져",
    "테마파크",
    "워터파크",
    "투어 관람",
    "공연 전시",
    "실내 체험",
  ],
  LEARNING: [
    "공예",
    "댄스",
    "요리",
    "음료",
    "언택트",
    "음악",
    "스포츠",
    "어학",
    "사진 영상",
    "미술",
    "재테크",
    "투잡",
    "실무",
    "취업 이직",
    "교양 강좌",
  ],
  HEALTH: ["피트니스", "요가", "필라테스", "뷰티", "스파 마사지", "심리 상담"],
  MOIM: ["클럽", "스터디", "토크", "게임", "파티", "술", "기타"],
  JEJU: ["제주살기", "프립", "제주시", "서부", "남부", "동부", "직배송"],
  TRIP: ["강릉", "부산", "서울근교", "강원도", "경상도", "전라도", "충청도"],
};

export default CategoryNav;

const FullContent = styled.div`
  max-width: 808px;
  margin: 0 auto;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  p {
    color: rgb(51, 51, 51);
    font-size: 20px;
    font-weight: bold;
    line-height: 28px;
    letter-spacing: -0.6px;
    margin-bottom: 15px;
  }

  button {
    color: rgb(51, 51, 51);
    border: none;
    position: relative;
    transition: 800ms ease all;

    width: 180px;
    height: 50px;
    margin-bottom: 5px;
    padding: 15px 20px;
    border-radius: 5px;
    color: rgb(51, 51, 51);
    letter-spacing: -0.42px;
    line-height: 20px;
    margin-right: 15px;
    margin-bottom: 15px;
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
    content: "";
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

  .act {
    background-color: #f6f8f2;
    border: 1px solid #f6f8f2;
  }
  .bae {
    background-color: #f2f8f6;
    border: 1px solid #f2f8f6;
  }
  .heal {
    background-color: #e9ecf7;
    border: 1px solid #e9ecf7;
  }
  .together {
    background-color: #f3f2f7;
    border: 1px solid #f3f2f7;
  }
  .je {
    background-color: #f7f1f8;
    border: 1px solid #f7f1f8;
  }
  .nae {
    background-color: #faf5fa;
    border: 1px solid #faf5fa;
  }
`;
