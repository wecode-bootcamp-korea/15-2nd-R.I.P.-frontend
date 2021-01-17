import React, { useState } from "react";
import styled from "styled-components";
import { flexColumnAlign, flexrowAlign } from "../../Styles/theme";
import DetailNextProcessOptionSelect from "./DetailNextProcessOptionSelect";
import { Link } from "react-router-dom";

function DetailNextProcess({ detailFripData, select, setSelect }) {
  const [showProcessModal, setShowProcessModal] = useState(false);

  const toggleModal = () => {
    setShowProcessModal(!showProcessModal);
    window.scroll(0, 0);
  };

  return (
    <>
      <DuckBar>
        <DuckContainer>
          {showProcessModal ? (
            <>
              <Link
                to={{
                  pathname: "/purchases",
                  state: { detailFripData, select },
                }}
                className="process"
              >
                <button className="process">
                  <div>다음</div>
                </button>
              </Link>
            </>
          ) : (
            <>
              <button className="bookmark">
                <img src="/images/bookmark.png" alt="bookmark" />
                <span>5,555</span>
              </button>
              <button className="process" onClick={() => toggleModal()}>
                <div>참여하기</div>
              </button>
            </>
          )}
        </DuckContainer>
      </DuckBar>
      {showProcessModal && (
        <DetailNextProcessOptionSelect
          title="옵션 선택"
          showProcessModal={showProcessModal}
          setShowProcessModal={setShowProcessModal}
          select={select}
          setSelect={setSelect}
          detailFripData={detailFripData}
        />
      )}
      }
    </>
  );
}

export default DetailNextProcess;

const DuckBar = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.08) 0px -10px 30px -10px;
  background-color: white;
  z-index: 20;
  z-index: 101;
`;

const DuckContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px auto;
  max-width: 828px;
  padding: 20px 30px;
  overflow: hidden;

  button {
    ${flexrowAlign}
    padding: 0px;
    margin-right: 20px;
    height: 48px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
  }

  .bookmark {
    ${flexColumnAlign}
    justify-content: center;
    padding-top: 10px;

    img {
      width: 30px;
      height: 30px;
    }

    span {
      font-size: 10px;
      color: rgb(51, 51, 51);
      margin-top: 4px;
    }
  }

  .process {
    width: 100%;
    height: 56px;
    line-height: 24px;
    padding: 0px 13px;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    margin: 0px;
    text-decoration: none;
    background-color: rgb(0, 117, 239);
    cursor: pointer;

    div {
      margin: 0 auto;
    }
  }
`;
