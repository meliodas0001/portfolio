import styled from "styled-components";
import {
  AppbarColor,
  BackgroundColor,
  TextColor,
  TextColorHover,
} from "../../../styles/Variables";

export const Container = styled.div`
  width: 100%;
  height: 123px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${AppbarColor};
  font-family: "Inter", sans-serif;
  color: ${TextColor};
  font-weight: 700;
  gap: 16px;
`;

export const Anchors = styled.a`
  font-size: 20px;
  text-decoration: none;
  :hover {
    color: ${TextColorHover};
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;
