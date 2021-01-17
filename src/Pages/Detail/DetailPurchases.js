import React from "react";
import styled from "styled-components";

function DetailPurchases(props) {
  return (
    <Purchases>
      <PurchasesCenter>
        <h2>결제</h2>
        <OptionTab>
          <div>선택한 프립</div>
          <div> ＞ </div>
        </OptionTab>
        <Product>
          <div className="productInfo">
            <img
              src={props.location.state.detailFripData.image_urls[0].image_url}
              alt="img"
            />
            <div>
              <span>{props.location.state.detailFripData.subtitle}</span>
              <span>{props.location.state.detailFripData.title}</span>
            </div>
          </div>
          <div className="optionInfo">
            <div>
              <span>{props.location.state.select}</span>
              <span>참가비 (1인) x 1개</span>
            </div>
            <span>
              {Math.floor(
                props.location.state.detailFripData.price
              ).toLocaleString()}
              원
            </span>
          </div>
        </Product>
        <OptionTab>
          <div>상품금액</div>
          <div>
            {Math.floor(
              props.location.state.detailFripData.price
            ).toLocaleString()}
            원
          </div>
        </OptionTab>
        <OptionTab>
          <div>쿠폰 / 할인 코드</div>
          <div>
            <span>0원</span>
            <button>선택</button>
          </div>
        </OptionTab>
        <OptionTab>
          <div>에너지</div>
          <div>
            <span>0 E</span>
            <button>전체 사용</button>
          </div>
        </OptionTab>
        <PurchasesNotice>
          <li>
            에너지는 1,000E부터 사용 가능하며, 결제 금액의 일부가 적립됩니다.
          </li>
          <li>
            쿠폰/할인코드/에너지 사용하여 결제시 개별 취소를 할 수 없습니다.
          </li>
        </PurchasesNotice>
        <PurchasePayment>
          <div>
            <span>할인 금액</span>
            <span className="howmuch">- 0원</span>
          </div>
          <div>
            <span>최종 결제 금액</span>
            <span className="howmuch">
              {Math.floor(
                props.location.state.detailFripData.price
              ).toLocaleString()}
              원
            </span>
          </div>
        </PurchasePayment>
        <h2>결제수단</h2>
        <PurchasePaymentMethod>
          <button>신용/체크카드</button>
          <button>핸드폰 결제</button>
          <button>실시간 계좌이체</button>
          <button>PAYCO</button>
          <button>TOSS</button>
        </PurchasePaymentMethod>
        <Agreement>
          <input type="checkbox" />
          <span>
            개인정보 제 3자 제공 동의, 결제 대행 서비스 이용 약관 등 모든 약관에
            동의합니다.
          </span>
        </Agreement>
        <PurchaseButton>
          <button>
            {Math.floor(
              props.location.state.detailFripData.price
            ).toLocaleString()}
            원 결제하기
          </button>
        </PurchaseButton>
      </PurchasesCenter>
    </Purchases>
  );
}

export default DetailPurchases;

const Purchases = styled.div`
  background-color: #fff;
`;

const PurchasesCenter = styled.div`
  width: 828px;
  margin: 0 auto;

  h2 {
    height: 120px;
    border-bottom: 1px solid black;
    padding: 20px 0px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: flex-end;
  }
`;

const OptionTab = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgb(238, 238, 238);
  border-bottom: 1px solid rgb(238, 238, 238);

  button {
    width: 90px;
    height: 38px;
    line-height: normal;
    padding: 0px 13px;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    border: 1px solid rgb(187, 187, 187);
    border-radius: 5px;
    font-size: 14px;
    margin-left: 20px;
  }

  div:nth-child(2) {
    font-weight: bold;
  }
`;

const PurchasesNotice = styled.ul`
  margin: 0px;
  border-top: 1px solid rgb(238, 238, 238);
  padding: 20px 0px 30px;
  list-style-position: inside;

  li {
    line-height: 18px;
    color: rgb(51, 151, 255);
    font-size: 11px;
  }
`;

const PurchasePayment = styled.div`
  width: 787px;
  height: 94px;
  margin: 0 auto;
  padding: 0px 20px;
  background-image: linear-gradient(
    277deg,
    rgb(98, 201, 255),
    rgb(51, 151, 255)
  );
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .howmuch {
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

const PurchasePaymentMethod = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0px 30px;

  button {
    width: 100px;
    height: 50px;
    line-height: 13px;
    padding: 0px 13px;
    background-color: transparent;
    text-align: center;
    border: 1px solid rgb(238, 238, 238);
    border-radius: 5px;
    font-size: 13px;
    word-break: keep-all;
    margin-right: 10px;
    font-size: 13px;
    cursor: pointer;
  }
`;

const Agreement = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 12px;
  line-height: 18px;
  margin-top: 30px;

  input {
    border: 1px solid rgb(238, 238, 238);
  }

  span {
    margin-left: 10px;
    line-height: 18px;
    cursor: pointer;
  }
`;

const PurchaseButton = styled.div`
  padding-top: 30px;
  padding-bottom: 185px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 290px;
    height: 50px;
    padding: 0px 13px;
    background-color: rgb(51, 151, 255);
    text-align: center;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgb(238, 238, 238);
  padding-bottom: 25px;
  padding: 20px 0;

  .productInfo {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;

    img {
      width: 130px;
      height: 130px;
      border-radius: 5px;
    }

    div {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      word-break: keep-all;
      padding: 20px;

      span:nth-child(1) {
        font-size: 12px;
        color: rgb(155, 155, 155);
      }

      span:nth-child(2) {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
      }
    }
  }

  .optionInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 0;

    div {
      display: flex;
      flex-direction: column;
      line-height: 2;
      font-size: 12px;
      color: rgb(155, 155, 155);
    }

    span {
      color: rgb(155, 155, 155);
    }
  }
`;
