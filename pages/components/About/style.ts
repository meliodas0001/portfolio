import styled from "styled-components";
import { TextColor, TextColorHover } from "../../../styles/Variables";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
`;

export const TitleWithout = styled.h1`
  font-weight: 600;
  font-size: 64px;
  color: transparent;
  -webkit-text-stroke: 1px ${TextColor};
`;

export const DescriptionContainer = styled.div`
  width: 961px;
  display: flex;
  align-items: center;
  z-index: 2;
`;

export const DescriptionTrace = styled.div`
  width: 16px;
  height: 180px;
  background: ${TextColor};
`;

export const Description = styled.span`
  font-weight: 600;
  font-size: 40px;
  color: ${TextColor};
  flex-wrap: wrap;
  margin-left: 30px;
`;

export const DescriptionWithout = styled.span`
  font-weight: 600;
  font-size: 40px;
  color: transparent;
  -webkit-text-stroke: 1px ${TextColor};
`;

export const DescriptionWithoutBlue = styled.span`
  font-weight: 600;
  font-size: 40px;
  color: transparent;
  -webkit-text-stroke: 2px ${TextColorHover};
`;
