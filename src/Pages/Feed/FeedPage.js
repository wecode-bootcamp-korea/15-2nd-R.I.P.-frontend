import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Feed from "./Feed";

const FeedPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/feed.json")
      .then(res => res.json())
      .then(res => setData(res.data));
  }, []);

  return (
    <>
      <FeedHeaderTitle>R.I.P FEED</FeedHeaderTitle>
      <FeedPageFullContainer>
        {data.map(card => {
          return (
            <Feed
              // id={card.id}
              userName={card.userName}
              uplodadTime={card.uplodadTime}
              imgTitle={card.imgTitle}
              comment={card.comment}
              likes={card.likes}
              addComment={card.addComment}
            />
          );
        })}
      </FeedPageFullContainer>
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
