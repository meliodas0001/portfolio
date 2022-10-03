import styled from "styled-components";
import { TextColor } from "../../../styles/Variables";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 302px;
  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 32px;
    margin-top: 100px;
  }
`;

export const IconSecurity = styled.img`
  width: 85px;
  height: 103px;
`;

export const IconVisualIdentity = styled.img`
  width: 119px;
  height: 119px;
`;

export const IconEfficiency = styled.img`
  width: 150px;
  height: 100px;
`;

export const Content = styled.div`
  width: 357px;
  height: 265px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 1px ${TextColor};
  overflow-y: hidden;
`;

export const Description = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: ${TextColor};
  flex-wrap: wrap;
  text-align: center;
  overflow-y: hidden;
`;
