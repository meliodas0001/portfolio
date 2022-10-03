import Image from "next/image";
import { Anchors, Container } from "./styled";

export function Appbar() {
  return (
    <Container>
      <Anchors href="#about">ABOUT ME</Anchors>
      <Anchors href="#">EXPERIENCE</Anchors>
      <Anchors href="#">TECHNOLOGIES</Anchors>
      <Anchors href="#">CONTACT</Anchors>
    </Container>
  );
}
