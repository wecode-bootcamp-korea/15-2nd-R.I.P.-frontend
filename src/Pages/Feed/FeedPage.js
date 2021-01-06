import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Feed from "./Feed";

const FeedPage = () => {
  const [data, setData] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleShowBtn = e => {
    setShowCard(!showCard);
  };

  useEffect(() => {
    fetch("/data/feed.json")
      .then(res => res.json())
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <IsLoadingMode>
          <img className="logoLoading" src="/images/logo.png" alt="loading" />
        </IsLoadingMode>
      ) : (
        <FullWrapper>
          <FeedHeaderTitle> R.I.P FEED </FeedHeaderTitle>
          <FeedPageFullContainer>
            <>
              {showCard
                ? data.map(card => {
                    return (
                      <Feed
                        id={card.id}
                        userName={card.userName}
                        uplodadTime={card.uplodadTime}
                        imgTitle={card.imgTitle}
                        comment={card.comment}
                        likes={card.likes}
                        addComment={card.addComment}
                      />
                    );
                  })
                : data.slice(0, 10).map(card => {
                    return (
                      <Feed
                        id={card.id}
                        userName={card.userName}
                        uplodadTime={card.uplodadTime}
                        imgTitle={card.imgTitle}
                        comment={card.comment}
                        likes={card.likes}
                        addComment={card.addComment}
                      />
                    );
                  })}
            </>
          </FeedPageFullContainer>
          <div className="centerBtn">
            <button onClick={handleShowBtn}>더보기</button>
          </div>
        </FullWrapper>
      )}
    </>
  );
};

export default FeedPage;

const FeedPageFullContainer = styled.div`
  max-width: 808px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 50px;
  border-top: 1px solid #ebebeb;
`;

const FeedHeaderTitle = styled.div`
  max-width: 808px;
  margin: 0 auto;
  height: 77px;
  display: flex;
  align-items: center;
  color: rgb(51, 61, 75);
  font-weight: bold;
  font-size: 24px;
`;

const FullWrapper = styled.div`
  height: 100%;
  .centerBtn {
    margin: 0 auto;
    max-width: 303px;
  }
  button {
    margin-top: 70px;
    width: 300px;
    height: 50px;
    background-color: #35c5f0;
    border: 1px solid #35c5f0;
    border-radius: 10px;
    font-size: 17px;
    font-weight: bold;
    line-height: 1.41;
    cursor: pointer;
    color: #ffffff;
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

const IsLoadingMode = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 390px;
`;
