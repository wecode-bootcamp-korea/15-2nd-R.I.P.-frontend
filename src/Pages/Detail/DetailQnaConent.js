import React, { useEffect, useState } from "react";
import axios from "axios";
import { flexrowAlign } from "../../Styles/theme";
import styled from "styled-components";
import { Link } from "react-router-dom";

function DetailQnaConent() {
  const [detailQnaData, setDetailQnaData] = useState([]);
  const [items, setItems] = useState(3);
  const [preItems, setPreItems] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getLoadDetailData();
    setIsLoading(true);
  }, [setItems]);

  const getLoadDetailData = async () => {
    const result = await axios.get("/data/detailqna.json");
    const res = result.data.data.slice(preItems, items);
    setDetailQnaData(res);
    setIsLoading(false);
  };

  const nextDetailData = e => {
    setPreItems(items);
    setItems(items + 3);
    getLoadDetailData();
  };
  return (
    <QnaConent>
      {!isLoading &&
        detailQnaData.map((el, index) => (
          <div key={index}>
            <ContentHeader>
              <div className="userInfo">
                <img src={el.img} alt="rockImg" />
                <div className="userNameTime">
                  <span className="nickName">{el.username}</span>
                  <span className="times">{el.date}</span>
                </div>
              </div>
              <div className="contentSection">{el.content}</div>
            </ContentHeader>
            <ContentAnswer>
              <div className="answerHeader">
                <img src={el.host.hostimg} alt="rockImg" />
                <div>
                  <span className="nickName">{el.host.hostname}</span>
                  <span className="times">{el.host.writedate}</span>
                </div>
              </div>
              <div className="contentSection">{el.host.answer}</div>
            </ContentAnswer>
          </div>
        ))}
      <QnaFooter>
        <PageButton>
          <img className="reverse" src="/images/Pagebutton.svg" alt="arrow" />
        </PageButton>
        <PageButton>
          <Link onClick={nextDetailData} name="0">
            1
          </Link>
        </PageButton>
        <PageButton>
          <Link onClick={nextDetailData} name="4">
            2
          </Link>
        </PageButton>
        <PageButton>
          <Link onClick={nextDetailData} name="8">
            3
          </Link>
        </PageButton>
        <PageButton>
          <Link onClick={nextDetailData} name="11">
            4
          </Link>
        </PageButton>
        <PageButton>
          <Link onClick={nextDetailData} name="14">
            5
          </Link>
        </PageButton>
        <PageButton>
          <img src="/images/Pagebutton.svg" alt="arrow" />
        </PageButton>
      </QnaFooter>
    </QnaConent>
  );
}

export default DetailQnaConent;
const PageButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  padding: 0px;
  background-color: white;
  text-align: center;
  cursor: pointer;
  color: black;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  .reverse {
    transform: rotate(180deg);
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

const QnaFooter = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  width: 100%;
  padding: 30px 0px;
  background-color: white;
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;

  img {
    flex: 0 0 auto;
    margin-right: 14px;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    overflow: hidden;
  }

  .userInfo {
    ${flexrowAlign}

    .userNameTime {
      display: flex;
      flex-direction: column;
    }

    .nickName {
      margin-bottom: 10px;
      line-height: 12px;
      font-size: 12px;
      font-weight: bold;
    }

    .times {
      line-height: 10px;
      color: rgb(155, 155, 155);
      font-size: 10px;
    }
  }

  .contentSection {
    margin-top: 22px;
    line-height: 22px;
    font-size: 12px;
    white-space: pre-wrap;
  }
`;

const ContentAnswer = styled(ContentHeader)`
  margin-top: 22px;
  width: 788px;
  line-height: 22px;
  border-radius: 5px;
  padding: 20px;
  font-size: 12px;
  background-color: rgb(249, 249, 249);
  transform: scale(0.95);

  .answerHeader {
    ${flexrowAlign}
    padding: 20px;
    margin-bottom: 28px;

    img {
      flex: 0 0 auto;
      margin-right: 14px;
      width: 48px;
      height: 48px;
      border-radius: 24px;
      overflow: hidden;
    }

    div {
      display: flex;
      flex-direction: column;

      .nickName {
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;
        font-weight: bold;
      }

      .times {
        line-height: 10px;
        color: rgb(155, 155, 155);
        font-size: 10px;
      }
    }
  }

  .contentSection {
    margin-left: 30px;
    margin-right: 30px;
  }
`;
const QnaConent = styled.div`
  padding: 30px 0px;
  border-bottom: 1px solid rgb(238, 238, 238);

  .contentSection {
    margin-bottom: 22px;
    line-height: 22px;
    font-size: 12px;
    white-space: pre-wrap;
  }

  .contentAnswer {
  }
`;
