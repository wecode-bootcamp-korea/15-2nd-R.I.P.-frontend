import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { flexColumnAlign } from "../../Styles/theme";

function MainCategory() {
  const [mainCategoryData, setMainCategoryData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getFripCategory = async () => {
    const result = await axios("/data/category.json");
    setMainCategoryData(result.data.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getFripCategory();
  }, []);

  return (
    <MainCategorys>
      {!isLoading &&
        mainCategoryData.map((item, index) => (
          <CategoryContainer key={index}>
            <img src={item.img} alt={item.title} />
            <span>{item.title}</span>
          </CategoryContainer>
        ))}
    </MainCategorys>
  );
}

export default MainCategory;

const MainCategorys = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  float: left;
  font-weight: 500;

  cursor: pointer;
  margin-top: 30px;
  font-size: 12px;
  line-height: 16px;
  color: rgb(170, 170, 170);

  img {
    width: 60px;
    height: 60px;
  }

  span {
    margin-top: 10px;
  }
`;

const CategoryContainer = styled.div`
  width: 100%;
  ${flexColumnAlign}
  margin: 0 auto;
  margin-bottom: 40px;
`;
