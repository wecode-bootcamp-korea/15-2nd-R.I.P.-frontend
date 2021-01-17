import React from "react";
import styled from "styled-components";
import { flexrowAlign } from "../../Styles/theme";
import DetailQnaConent from "./DetailQnaConent";
import { Link } from "react-router-dom";

function DetailQna(props) {
  console.log(props);
  return (
    <QnaContainer>
      <QnaHeader>
        <Link
          to={{
            pathname: `/detail/${props.location.state.detailFripData.id}`,
          }}
        >
          <h2> 〈 문의하기</h2>
        </Link>
        <Link
          to={{
            pathname: `/qna/new`,
            state: { id: props.location.state.detailFripData.id },
          }}
        >
          <button>문의 작성</button>
        </Link>
      </QnaHeader>

      <DetailQnaConent />
    </QnaContainer>
  );
}

export default DetailQna;

const QnaContainer = styled.div`
  width: 828px;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: #000;
  }
`;

const QnaHeader = styled.div`
  ${flexrowAlign}
  justify-content:space-between;
  height: 90px;
  width: 100%;
  border-bottom: 1px solid #ddd;

  h2 {
    margin: 0px;
    line-height: 20px;
    font-size: 20px;
    font-weight: bold;
  }

  button {
    width: 210px;
    height: 50px;
    line-height: normal;
    padding: 0px;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    border: 1px solid rgb(238, 238, 238);
    border-radius: 5px;
    font-size: 14px;
    outline: none;
  }
`;
