import React from "react";
import styled from "styled-components";
import MainCategory from "./MainCategory";
import Frip from "./Frip";
import OptionSlide from "./OptionSlide";
import MainTitle from "./MainTitle";
import banner1 from "./images/Web_banner1.jpeg";
import banner2 from "./images/Web_banner2.jpeg";
import banner3 from "./images/Web_banner3.jpeg";
import poster1 from "./images/Web_메인_1860x744_1608529003299.jpeg";
import poster2 from "./images/Web_기획전_1860x744_1608770219664.jpeg";
import poster3 from "./images/Web_기획전_1860x744_1608174788243.jpeg";
import main1 from "./images/Web_main1.jpeg";
import main2 from "./images/Web_main2.jpeg";
import main3 from "./images/Web_main3.jpeg";

function Main() {
  return (
    <MainContainer>
      <Center>
        <ImgBox>
          <OptionSlide img1={main2} img2={main1} img3={main3} count="2" />
        </ImgBox>
        <MainCategory />
        <MainTitle h2="월간 가장 인기 있는 프립" span="전체보기" />
        <Frip />
        <OptionSlide
          primary
          height="100px"
          img1={banner1}
          img2={banner2}
          img3={banner3}
          count="2"
        />
        <MainTitle h2="MD 추천 프립 ✨" span="전체보기" />
        <Frip />
        <MainTitle h2="기획전" span="전체보기" />
        <OptionSlide img1={poster1} img2={poster2} img3={poster3} count="2" />
      </Center>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  width: 100%;
`;

const Center = styled.div`
  margin: 0 auto;
  width: 808px;
`;
const ImgBox = styled.div`
  display: flex;
`;
