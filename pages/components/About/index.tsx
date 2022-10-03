import {
  Container,
  DescriptionContainer,
  DescriptionTrace,
  Description,
  Image,
  Title,
  DescriptionWithout,
  DescriptionWithoutBlue,
} from "./style";

export function About() {
  return (
    <>
      <Title>ABOUT ME</Title>
      <Container>
        <DescriptionContainer>
          <DescriptionTrace />
          <Description id="about">
            MY NAME IS <DescriptionWithout>RIQUE</DescriptionWithout> AND I BE
            18 YEARS OLD I LOVE{" "}
            <DescriptionWithout>TECHNOLOGY</DescriptionWithout> AND
            <DescriptionWithout>PROGRAMMING</DescriptionWithout> IF YOU’RE
            LOOKING FOR A WEB DEVELOPER IT’S THE RIGHT PLACE.{" "}
            <DescriptionWithoutBlue>MY GITHUB</DescriptionWithoutBlue>
          </Description>
        </DescriptionContainer>
        <Image src="./aboutme.svg" />
      </Container>
    </>
  );
}
