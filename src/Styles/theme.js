import { css } from "styled-components";

const theme = {
  activityBg: "#F6F8F2",
  learningBg: "#F2F8F6",
  beautyBg: "#9DC2E6",
  meetingBg: "#F3F2F7",
  jejuBg: "#F7F1F8",
  koreaBg: "#9FC0E5",
};

// export const LoadingChang = styled.div`
//   display: inline-block;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 350px auto;
//   width: 80px;
//   height: 80px;

//   :after {
//     content: " ";
//     display: block;
//     border-radius: 50%;
//     width: 0;
//     height: 0;
//     margin: 8px;
//     box-sizing: border-box;
//     border: 32px solid #3356f2;
//     border-color: #3356f2 transparent #3356f2 transparent;
//     animation: lds-hourglass 1.2s infinite;
//   }
//   @keyframes lds-hourglass {
//     0% {
//       transform: rotate(0);
//       animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
//     }
//     50% {
//       transform: rotate(900deg);
//       animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
//     }
//     100% {
//       transform: rotate(1800deg);
//     }
//   }
// `;

export default theme;

export const flexColumnAlign = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const flexrowAlign = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
