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
          <Description>
            MY NAME IS <DescriptionWithout>RIQUE</DescriptionWithout> AND I BE
            18 YEARS OLD I LOVE{" "}
            <DescriptionWithout>TECHNOLOGY</DescriptionWithout>
            AND <DescriptionWithout>PROGRAMMING</DescriptionWithout> IFYOU’RE
            LOOKING FOR A WEB DEVELOPER IT’S THERIGHT PLACE.{" "}
            <DescriptionWithoutBlue>MY GITHUB</DescriptionWithoutBlue>
          </Description>
        </DescriptionContainer>
        <Image src="./aboutme.svg" />
      </Container>
    </>
  );
}
