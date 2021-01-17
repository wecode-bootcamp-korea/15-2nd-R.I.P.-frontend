import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { flexrowAlign } from "../../Styles/theme";

function Review({ reviewcount, id }) {
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(id);
  useEffect(() => {
    getLoadReviewData();
  }, [setReviewData]);
  console.log(reviewData);
  console.log(useEffect);
  const getLoadReviewData = async () => {
    const result = await axios.get(
      `http://13.209.17.252:8000/board/feed_list?product_id=${id}`
    );
    setReviewData(result.data.feed_list);
    setIsLoading(false);
  };

  return (
    <>
      <ReviewContainer>
        {!isLoading &&
          reviewData.map((el, index) => (
            <ReviewCardContainer key={index}>
              <div className="center">
                <div className="userReview">
                  <img src={el.feed_image[0].url} alt="reviewImg" />
                  <div className="userInfo">
                    <div className="users">
                      <img src={el.feed_image[0].url} alt="guest" />
                      <span>{el.nickname}</span>
                    </div>
                    <span className="priceInfo">1인권</span>
                    <div className="userDetailReview">{el.contents}</div>
                    <button>👍 {el.feed_like_count}</button>
                  </div>
                </div>
              </div>
            </ReviewCardContainer>
          ))}
      </ReviewContainer>
      <ReviewButton> {reviewcount}개 후기</ReviewButton>
    </>
  );
}

export default Review;
const ReviewButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 117, 239);
  height: 56px;
  border: none;
  border-top: 1px solid rgb(219, 237, 255);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.48px;
  width: 100%;
  background-color: rgb(244, 250, 255);
  outline: none;
  cursor: pointer;
`;

const ReviewContainer = styled.div`
  border-top: 1px solid rgb(219, 237, 255);
  overflow: hidden;
  height: 581px;
  border-bottom: 0px;
  background-color: rgb(244, 250, 255);
  overflow: hidden;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  overflow-x: visible;
`;

const ReviewCardContainer = styled.div`
  .center {
    padding: 0 15px;
    width: 232px;

    .userReview {
      display: flex;
      flex-direction: column;
      margin-top: 20px;

      > img {
        width: 232px;
        height: 232px;
      }

      .userInfo {
        margin-top: 15px;

        img {
          width: 40px;
          height: 40px;
        }

        .priceInfo {
          color: rgb(170, 170, 170);
          font-size: 12px;
          line-height: 46px;
          letter-spacing: -0.36px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-top: 40px;
        }

        .users {
          ${flexrowAlign}

          span {
            margin-left: 9px;
            color: rgb(51, 51, 51);
            font-size: 14px;
            line-height: 22px;
            letter-spacing: -0.42px;
            font-weight: bold;
            margin-bottom: 1px;
          }

          img {
            border-radius: 50%;
          }
        }

        .userDetailReview {
          letter-spacing: -0.42px;
          margin-bottom: 22px;
          word-break: break-all;
          font-size: 14px;
          line-height: 22px;
          height: 66px;
          color: rgb(51, 51, 51);
        }

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 36px;
          padding: 7px 15px;
          border-radius: 20px;
          background-color: rgb(255, 255, 255);
          font-size: 14px;
          line-height: 22px;
          letter-spacing: -0.42px;
          color: rgb(51, 51, 51);
          border: 1px solid rgb(221, 221, 221);
          margin-top: 40px;
        }
      }
    }
  }
`;
