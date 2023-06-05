import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 48px;
  font-size: 36px;
  margin-bottom: 200px;
  font-weight: 300;
`;

export const floating = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-15px);
    }
    15%{
        transform: translateY(0px)
    }
    100% {
        opacity: 100;
        visibility: visible;
        
    }
`;

export const LogoBox = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 230px;
  font-weight: 700;
  margin-bottom: 250px;
  visibility: hidden;
  animation: ${floating} 2.5s ease-in-out 0.5s 1 forwards;
`;

export const SubTextBox = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin-bottom: 300px;
  visibility: hidden;
  font-weight: 300;

  .visible {
    animation: ${floating} 1.5s ease-in-out 0.5s 1 forwards;
    text-align: center;
  }

  .hidden {
    visibility: hidden;
  }
`;
