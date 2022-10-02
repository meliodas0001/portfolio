import styled from "styled-components";
import { PrincipalTextColor } from "../../../styles/Variables";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  @media (max-width: 1100px) {
    margin-top: 50px;
    margin-left: 0px;
    width: 400px;
  }
`;

export const Main = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 64px;
  color: ${PrincipalTextColor};
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 80px;
`;

export const TitleWithout = styled.h1`
  font-weight: 600;
  font-size: 64px;
  color: transparent;
  -webkit-text-stroke: 1px ${PrincipalTextColor};
`;

export const MinSpan = styled.span`
  font-size: 36px;
  font-weight: 600;
  color: ${PrincipalTextColor};
`;
