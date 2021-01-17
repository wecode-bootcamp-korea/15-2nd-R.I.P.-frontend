import React, { useState } from "react";
import styled from "styled-components";
import { flexrowAlign } from "../../Styles/theme";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { SERVER } from "../../config";
const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6ImhvbWVyMkBob21lci5jb20iLCJleHAiOjE2MTExOTgxMjh9.omQCnvFmPd8UQAkRzMFaprktPD1_xbOXPl5DTKQjiHCeUZjlsV5B4m4Pes4H83hntN8DVqaRrYK-jdTEIP3fSQ";
function DetailReview(props) {
  const [img, setImage] = useState(null);
  const [imgBase64, setImgBase64] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const handleTextArea = e => {
    const {
      target: { value },
    } = e;
    setReviewText(value);
  };
  // http -v POST 10.168.2.91:8000/board/review
  const pushReviewData = () => {
    const formData = new FormData();
    formData.append("file", img);
    formData.append("content", reviewText);
    formData.append("star_rating", 1);
    axios({
      method: "post",
      url: `http://13.209.17.252:8000/board/product/${props.location.state.detailFripData.id}/review`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: TOKEN,
      },
    })
      .then(
        res => res.statusText === "OK" && alert("등록이 완료됬습니다."),
        setIsLoading(false)
      )
      .then(history.push(`/detail/${props.location.state.detailFripData.id}`));
  };
  console.log(props);

  // const pushQanData = () => {
  //   const formData = new FormData();
  //   formData.append("file", img);
  //   formData.append("content", reviewText);
  //   formData.append("star_rating", 1);
  //   formData.append("user", localStorage.getItem("NICKNAME"));
  //   formData.append("order_id", props.location.state.detailFripData.id);
  //   axios({
  //     method: "post",
  //     url: "http://13.209.17.252:8000/board/review",
  //     data: formData,
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       Authorization: TOKEN,
  //     },
  //   })
  //     // .then(res => res.statusText === "OK" && alert("등록이 완료됬습니다."))
  //     .then(res => console.log(res))
  //     .then(history.push(`/detail/${props.location.state.detailFripData.id}`));
  // };

  const handleChangeFile = event => {
    let reader = new FileReader();
    setImage(event.target.files[0]);
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      setImage(event.target.files[0]);
    }
  };

  return (
    <QnaContainer>
      <QnaHeader
        onClick={() =>
          history.push(`/detail/${props.location.state.detailFripData.id}`)
        }
      >
        <span> 〈 </span>
        <h2> 후기 쓰기</h2>
      </QnaHeader>
      <Qnasection>
        <img
          src={props.location.state.detailFripData.image_urls[0].image_url}
          alt={props.location.state.detailFripData.title}
        />
        <h2>{props.location.state.detailFripData.title}</h2>
        <textarea
          placeholder="욕설 비속어가 포함된 후기는 사전 고지 없이 삭제 될 수 있습니다."
          onChange={handleTextArea}
        />
        <span className="length"> {reviewText.length}/ 1200</span>
        <button>
          사진 첨부하기
          <input
            type="file"
            accept="image/jpeg, image/jpg"
            onChange={handleChangeFile}
          />
        </button>
        <ImgPreview>
          {imgBase64 && <img src={imgBase64} alt="miribogi" />}
        </ImgPreview>
        <QnaFeedorReview>
          <h2>
            사진후기를 <br />
            립피드에 등록
          </h2>
          <span>
            RIP 피드는 대원들의 활동을 보여줄 수 있는 <br />
            공간입니다. 내 사진후기를 립피드에 업로드 해주세요.
          </span>
        </QnaFeedorReview>
      </Qnasection>
      <ButtonSection>
        <button onClick={pushReviewData}>후기, 피드 등록</button>
        {/* <button onClick={pushQanData}>후기만 등록</button> */}
        <button>후기만 등록</button>
      </ButtonSection>
    </QnaContainer>
  );
}

export default DetailReview;
const ImgPreview = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;
    box-shadow: 1px 1px 5px 0px rgba(50, 50, 50, 0.75);
  }
`;

const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  button {
    margin-top: 30px;
    width: 49%;
    height: 50px;
    background-color: #fff;
    border: 1px solid #f2f2f2;

    :hover {
      border: 1px solid #3497fe;
      box-shadow: 1px 1px 5px 0px rgba(50, 50, 50, 0.75);
    }
  }
`;
const QnaFeedorReview = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 60px;

  span {
    font-size: 14px;
    color: #bbb;
  }
`;
const Qnasection = styled.div`
  text-align: center;
  margin-top: 30px;

  > img {
    width: 50px;
    height: 50px;
    border-radius: 7px;
  }

  h2 {
    margin-bottom: 30px;
    font-size: 20px;
    margin-top: 20px;
    font-weight: 600;
  }

  textarea {
    width: 100%;
    height: 150px;
    padding: 20px;
    border: none;
    background-color: #f2f2f2;
    border-radius: 8px;
    outline: none;
  }

  .length {
    float: left;
    font-size: 12px;
    margin-top: 10px;
  }

  button {
    width: 868px;
    height: 50px;
    background-color: #fff;
    border: 1px solid #f2f2f2;
    border-radius: 5px;
    margin-top: 30px;
    position: relative;
    :hover {
      border: 1px solid #3497fe;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 868px;
      height: 50px;
      opacity: 0;
      overflow: hidden;
      z-index: 2;
      cursor: pointer;

      ::placeholder {
        width: 868px;
        height: 50px;
      }
    }
  }
`;
const QnaContainer = styled.div`
  width: 828px;
  margin: 0 auto;
`;

const QnaHeader = styled.div`
  ${flexrowAlign}
  justify-content:center;
  height: 90px;
  width: 100%;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  h2 {
    margin: 0px;
    line-height: 20px;
    font-size: 16px;
    font-weight: bold;
  }

  span {
    margin-right: 10px;
    font-size: 18px;
  }
`;
