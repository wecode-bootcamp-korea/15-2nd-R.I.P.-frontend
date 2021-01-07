import React from "react";
import styled from "styled-components";

const Modal = () => (
  <ModalFullWrapper>
    <FullModal>
      <ModalPage>
        <p>인기 검색어</p>
        {MODAL_BUTTON.BUTTON_NAME.map((element, index) => (
          <button key={index}>{element}</button>
        ))}
      </ModalPage>
    </FullModal>
  </ModalFullWrapper>
);

const MODAL_BUTTON = {
  BUTTON_NAME: ["밀키트", "배송", "제주", "부산", "베이킹"],
};

export default Modal;

const ModalFullWrapper = styled.div`
  position: fixed;
  top: 176px;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  z-index: 500;
`;

const FullModal = styled.div`
  height: 122px;
  background-color: #fff;
`;

const ModalPage = styled.div`
  max-width: 808px;
  margin: 0 auto;
  height: 122px;
  background-color: #fff;

  p {
    font-weight: bold;
    font-size: 14px;
    color: black;
    padding: 20px 0;
  }
  button {
    width: auto;
    height: 34px;
    line-height: normal;
    padding: 0px 16.5px;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid rgb(51, 151, 255);
    border-radius: 5px;
    color: rgb(51, 151, 255);
    font-size: 12px;
    font-weight: 500;
    margin: 0px 12px 6px 0px;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
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
    content: "";
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
