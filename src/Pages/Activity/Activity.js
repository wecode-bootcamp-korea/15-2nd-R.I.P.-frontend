import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ActivityCard from "./ActivityCard";
import ModalFilter from "./ModalFilter";
const LIMIT = 20;

function Activity() {
  const [product, setProduct] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [btnModal, setBtnModal] = useState(false);
  const [userOrder, setUserOrder] = useState("created_at");
  const [offset, setOffset] = useState("0");
  useEffect(() => {
    fetch(
      `http://13.209.17.252:8000/product/list?order=${userOrder}&category=8&offset=${offset}&limit=${LIMIT}`
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setProduct(res.product_list);
        setIsLoading(false);
      });
  }, [offset, userOrder]);

  const fetchBackData = e => {
    setOffset(e?.target.dataset.idx);

    // fetch(
    //   `http://13.209.17.252:8000/product/list?order=created_at&category=8&offset=10&limit=20`
    // )
    //   .then(res => res.json())
    //   .then(res => {
    //     setProduct(res.product_list);
    //     setIsLoading(false);
    //   });
  };

  const togglingModal = () => {
    setBtnModal(!btnModal);
  };

  return (
    <>
      {!isLoading && (
        <MainContainer>
          {btnModal && (
            <ModalFilter
              togglingModal={togglingModal}
              userOrder={userOrder}
              setUserOrder={setUserOrder}
              btnModal={btnModal}
              setBtnModal={setBtnModal}
            />
          )}

          <AvtivityHeaderSection>
            <h2>액티비티 프립</h2>
            <button>언제</button>
            <button>어디서</button>
            <button>누구와</button>
            <button onClick={togglingModal}>필터</button>
          </AvtivityHeaderSection>
          <Center>
            {!isLoading && (
              <ActivityCard
                product={product && product}
                isLoading={isLoading}
              />
            )}
          </Center>
          <PageNation>
            {PAGENATTION_BTN.map((number, index) => {
              return (
                <button
                  key={index}
                  onClick={fetchBackData}
                  data-idx={number - 1}
                  className="pageNationBtnBox"
                >
                  {number}
                </button>
              );
            })}
          </PageNation>
        </MainContainer>
      )}
    </>
  );
}

const PAGENATTION_BTN = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export default Activity;

const MainContainer = styled.div`
  width: 100%;
`;
const AvtivityHeaderSection = styled.div`
  height: 120px;
  margin: 0 auto;
  width: 808px;
  margin-bottom: 50px;
  h2 {
    padding-top: 30px;
    margin-right: 4px;
    font-weight: bold;
    line-height: 18px;
    font-size: 18px;
  }
  button {
    margin-right: 15px;
    margin-top: 30px;
    width: auto;
    height: auto;
    line-height: 14px;
    padding: 11px 20px;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    border: 1px solid rgb(238, 238, 238);
    border-radius: 5px;
    color: initial;
    font-size: 14px;
    font-weight: 500;
    &:focus {
      outline: none;
    }
  }
`;

const Center = styled.div`
  margin: 0 auto;
  width: 808px;
  margin-bottom: 50px;
`;

const PageNation = styled.div`
  max-width: 808px;
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 40px;
    height: 40px;
    line-height: normal;
    padding: 0px;
    background-color: white;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    font-size: 18px;
    font-weight: bold;
    border: 1px solid #fff;

    &:hover {
      color: rgb(51, 151, 255);
    }
    &:focus {
      outline: none;
    }
  }
`;
