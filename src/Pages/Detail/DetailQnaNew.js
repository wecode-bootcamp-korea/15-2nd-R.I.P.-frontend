import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { flexrowAlign } from "../../Styles/theme";
import axios from "axios";

function DetailQnaNew(id) {
  const [secret, setSecret] = useState(false);
  const [writeQna, setWriteQna] = useState("");
  const history = useHistory();

  const pushWriteContent = () => {
    axios({
      method: "post",
      url: "Api주소",
      data: {
        secret: secret,
        writeQna: writeQna,
      },
    });
    history.push(`/detail/${id.location.state.id}`);
  };
  console.log(id);
  const handleInput = event => {
    const {
      target: { value },
    } = event;
    setWriteQna(value);
  };
  const onToggleSecret = () => {
    setSecret(!secret);
  };

  return (
    <QnaContainer>
      <QnaHeader>
        <h2>문의작성</h2>
        <div>
          <input type="checkbox" onClick={() => onToggleSecret()} />
          <span>비밀글</span>
        </div>
      </QnaHeader>
      <QnaContent>
        <textarea
          onChange={handleInput}
          placeholder="문의하실때는 개인 연락처를 남기거나 요청할 수 없으며,
                    연락처를 포함한 문의/답변은 동의없이 삭제될 수 있습니다.
                    결제, 환불, 쿠폰, 에너지 관련 문의는 고객센터로 문의해주세요."
        ></textarea>
        <button className={writeQna && "on"} onClick={pushWriteContent}>
          등록하기
        </button>
      </QnaContent>
    </QnaContainer>
  );
}

export default DetailQnaNew;
const QnaContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 768px;
    height: 50px;
    line-height: normal;
    padding: 0px 13px;
    background-color: rgb(221, 221, 221);
    border-radius: 5px;
    color: white;
    font-size: 12px;
    padding: 20px;
    border: none;
    cursor: not-allowed;
  }
  .on {
    background-color: rgb(51, 151, 255);
    color: white;
    cursor: pointer;
  }

  textarea {
    width: 100%;
    height: 275px;
    outline: none;
    border: none;
    margin-top: 40px;
    ::placeholder {
      font-size: 12px;
      color: #bbb;
    }
  }
`;

const QnaContainer = styled.div`
  width: 828px;
  margin: 0 auto;
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
