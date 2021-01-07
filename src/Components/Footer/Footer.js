import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <List>
          <li>호스트 지원</li>
          <li>단체신청</li>
          <li>기업복지 신청</li>
          <li>인재채용</li>
        </List>
        <Info>
          <h2>고객센터</h2>
          <InfoSub>
            <span>이메일 : cs@wocode.com</span>
            <span>고객센터 : 02-512-2232</span>
            <span>업무시간 평일 : 10:00- 24:00(점심: 12:00 - 14:00)</span>
          </InfoSub>
        </Info>
        <Info>
          <h2>WECODE</h2>
          <ul>
            <li>㈜위코두 | 사업자 등록번호 : 111-11-11111</li>
            <li>통신판매업신고번호 : 1111-1111-11111</li>
            <li>대표 : 위코두 | 개인정보 관리 책임자 : 김원희</li>

            <li>서울시 강남구 테헤란로 위워크타워 선릉 2호점 10층</li>
            <li>
              ㈜위코두두 학원로서 거래당사자가 아니며, 호스트가 등록한 상품정보
              및 거래에 대해 ㈜프렌트립은 일체의 책임을 지지 않습니다.
            </li>
            <li>
              NICEDAY 안전거래 서비스 : 고객님의 안전거래를 위해 현금 결제 시,
              저희 사이트에서 가입한 구매안전 서비스를 이용할 수 있습니다.
            </li>
          </ul>
          <button>앱 다운로드</button>
        </Info>
        <Icon>
          <li>
            <img src="/images/다운로드 (6).svg" alt="img" />
          </li>
          <li>
            <img src="/images/다운로드 (7).svg" alt="img" />
          </li>
          <li>
            <img src="/images/다운로드 (8).svg" alt="img" />
          </li>
          <li>
            <img src="/images/다운로드 (9).svg" alt="img" />
          </li>
          <li>
            <img src="/images/다운로드 (10).svg" alt="img" />
          </li>
          <li>
            <img src="/images/다운로드 (11).svg" alt="img" />
          </li>
        </Icon>
      </Container>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  height: 640px;
  padding: 40px 20px 69px;
  font-size: 12px;
  bottom: 0;
`;

const Container = styled.div`
  max-width: 808px;
  margin: 0 auto;

  h2 {
    font-size: 16px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  font-size: 15px;

  li {
    margin-right: 30px;
  }
`;

const Info = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #ddd;

  ul {
    margin-bottom: 20px;
  }

  li {
    margin-top: 15px;
    color: rgb(153, 153, 153);
  }

  h2 {
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 20px;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(51, 51, 51);
    height: 45px;
    color: white;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: -0.3px;
    margin-top: 40px;
  }

  h2 {
    font-size: 16px;
    font-weight: 600;
  }
`;

const Icon = styled.ul`
  width: 100%;
  height: 45px;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  li {
    margin: 30px;
  }
`;

const InfoSub = styled.div`
  display: flex;
  flex-direction: column;

  span {
    padding-bottom: 20px;
  }
`;
