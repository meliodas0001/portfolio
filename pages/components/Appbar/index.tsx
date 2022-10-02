import Image from "next/image";
import { Anchors, Container } from "./styled";

export function Appbar() {
  return (
    <Container>
      <Anchors>ABOUT ME</Anchors>
      <Anchors>EXPERIENCE</Anchors>
      <Anchors>TECHNOLOGIES</Anchors>
      <Anchors>CONTACT</Anchors>
    </Container>
  );
}
