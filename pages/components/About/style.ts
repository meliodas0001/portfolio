import styled from "styled-components";
import { TextColor, TextColorHover } from "../../../styles/Variables";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 500px;
`;

export const Title = styled.h1`
  display: inline-flex;
  font-weight: 600;
  font-size: 64px;
  color: ${TextColor};
  margin-bottom: 20px;
  margin-top: 348px;
  @media (max-width: 1100px) {
    margin-top: 0px;
  }
`;

export const TitleWithout = styled.h1`
  font-weight: 600;
  font-size: 64px;
  color: transparent;
  -webkit-text-stroke: 1px ${TextColor};
`;

export const DescriptionContainer = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const DescriptionTrace = styled.div`
  width: 16px;
  height: 350px;
  background: ${TextColor};
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Description = styled.span`
  font-weight: 600;
  font-size: 40px;
  color: ${TextColor};
  margin-left: 30px;
  @media (max-width: 1100px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 30px;
    padding: 0 50px;
    width: 74%;
    text-align: center;
  }
`;

export const DescriptionWithout = styled.span`
  font-weight: 600;
  font-size: 40px;
  color: transparent;
  -webkit-text-stroke: 1px ${TextColor};
  @media (max-width: 1100px) {
    font-size: 30px;
  }
`;

export const DescriptionWithoutBlue = styled.span`
  font-weight: 600;
  font-size: 40px;
  color: transparent;
  -webkit-text-stroke: 2px ${TextColorHover};
`;
