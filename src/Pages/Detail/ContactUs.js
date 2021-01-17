import React from "react";
import styled from "styled-components";

function ContactUs(title) {
  return (
    <Contact>
      <ul className="menu">
        <li>
          <input type="checkbox" />
          <div className="title">
            <label htmlFor="menuBtn" className="labelBtn">
              {title.title}
            </label>
            <label htmlFor="menuBtn" className="labelBtn">
              <img src="/images/다운로드 (13).svg" alt="arrow" />
            </label>
          </div>
          <ul className="subMenu">
            <li>👑 신청한 프립은 어디서 확인하나요?</li>
            <li> - 갓원희 만만세</li>
            <li>👑 환불 신청했는데 언제 환불되나요?</li>
            <li> - 갓현주 만만세</li>
            <li>👑 두 명 신청하고 싶은데 어떻게 하나요?</li>
            <li>- 갓준희 만만세</li>
            <li>👑 인원 증원은 안되나요?</li>
            <li>- 갓영재 만만세</li>
            <li>👑 대기신청했을 경우 따로 연락을 주시나요?</li>
            <li>- 갓규빈 만만세</li>
          </ul>
        </li>
      </ul>
    </Contact>
  );
}

export default ContactUs;

const Contact = styled.div`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  max-width: 828px;

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 800;
    padding-top: 2px;
    margin: 0px 10px;
    height: 63px;
    font-size: 18px;
  }

  input {
    width: 828px;
    height: 60px;
    position: absolute;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
  }

  .subMenu {
    margin-top: 30px;

    li {
      margin-bottom: 15px;
    }
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .menu .subMenu {
    padding: 0;
    margin: 0;
    height: 0px;
    transform: scaleY(0);
    transform-origin: top;
    transition: all 0.5s;
  }

  .subMenu {
    display: block;
    height: 200px;
  }

  input:checked ~ .subMenu {
    transform: scaleY(1);
    display: block;
    height: 300px;
  }
`;
