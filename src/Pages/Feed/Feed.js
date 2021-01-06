import React, { useState } from "react";
import styled from "styled-components";

const Feed = props => {
  const [liked, setLiked] = useState(true);
  const [word, setWord] = useState(true);
  const [closed, setClosed] = useState(false);

  return (
    <FullFeed>
      <FeedTop>
        <img className="userImg" src="/images/boy.png" alt="user" />
        <span>
          <div className="userNick">{props.userName}</div>
          <div className="userAdmitTime">{`${props.uplodadTime}minutes`}</div>
        </span>
        <div>
          <img className="feedEtc" src="/images/menu.png" alt="etc" />
        </div>
      </FeedTop>

      <FeedMid>
        <img className="feedMainImg" src="/images/coding.png" alt="png" />
      </FeedMid>

      <FeedTBottom>
        <div className="titleOfImg">&nbsp;&nbsp;{props.imgTitle}</div>
        <div className="feedComment">
          {closed ? (
            <span>
              <span>{props.comment.slice(0, 100)}</span>
              <span className="showAnother" onClick={() => setClosed(false)}>
                ...숨기기
              </span>
            </span>
          ) : (
            <span>
              <span>{props.comment.slice(0, 5)}</span>
              <span className="showAnother" onClick={() => setClosed(true)}>
                ...더보기
              </span>
            </span>
          )}
        </div>
        <div className="feedImo">
          {liked ? (
            <>
              <img
                src="/images/whiteHeart.png"
                alt="liked"
                onClick={() => setLiked(false)}
              />
              <span>{props.likes}</span>
            </>
          ) : (
            <>
              <img
                src="/images/heart.png"
                alt="liked"
                onClick={() => setLiked(true)}
              />
              <span>{props.likes + 1}</span>
            </>
          )}

          {word ? (
            <>
              <img
                src="/images/whiteBubble.png"
                alt="말풍선"
                onClick={() => setWord(false)}
              />
              <span>{props.addComment}</span>
            </>
          ) : (
            <>
              <img
                src="/images/bubble.png"
                alt="말풍선"
                onClick={() => setWord(true)}
              />
              <span>{props.addComment + 1}</span>
            </>
          )}
        </div>
      </FeedTBottom>
    </FullFeed>
  );
};

export default Feed;

const FullFeed = styled.div`
  width: 345px;
  height: 585px;
  border: 1px solid #b1b1b1;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 0px 0px 1px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
    background-color: #fff;
    box-shadow: 1px 1px 20px #c4c4c4;
  }
`;

const FeedTop = styled.section`
  width: 345px;
  height: 45px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;

  img {
    border-radius: 50%;
    margin-left: 5px;
    width: 24px;
    height: 24px;
  }
  span {
    margin-left: 15px;

    .userNick {
      font-size: 14px;
      line-height: 14px;
      font-weight: 500;
      color: #4e5968;
    }

    .userAdmitTime {
      font-size: 12px;
      line-height: 12px;
      color: rgb(142, 151, 163);
    }
  }
  .feedEtc {
    width: 20px;
    height: 20px;
    margin-left: 215px;
  }
`;

const FeedMid = styled.section`
  .feedMainImg {
    width: 345px;
    height: 345px;
  }
`;

const FeedTBottom = styled.section`
  width: 325px;
  margin-left: 10px;
  .titleOfImg {
    height: 45px;
    width: 325px;
    display: flex;
    align-items: center;
    margin-top: 5px;
    border: 1px solid #b1b1b1;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    color: rgb(5, 116, 230);
  }

  .feedComment {
    width: 325px;
    height: 90px;
    display: flex;
    align-items: center;
  }

  .feedImo {
    margin-top: 20px;
    position: absolute;
    display: flex;
    align-items: center;

    img {
      width: 21px;
      height: 21px;
      margin-right: 10px;
    }

    span {
      margin-right: 10px;
    }
  }
  .showAnother {
    color: #c2c2c2;
  }
`;
