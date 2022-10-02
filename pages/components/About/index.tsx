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
            MY NAME IS RIQUE AND I BE 18 YEARS OLD I LOVE TECHNOLOGY AND
            PROGRAMMING IF YOU’RE LOOKING FOR A WEB DEVELOPER IT’S THE RIGHT
            PLACE. <DescriptionWithoutBlue>MY GITHUB</DescriptionWithoutBlue>
          </Description>
        </DescriptionContainer>
        <Image src="./aboutme.svg" />
      </Container>
    </>
  );
}
