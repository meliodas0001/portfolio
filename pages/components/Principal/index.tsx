import { Container, Image, Main, MinSpan, Title, TitleWithout } from "./styles";

export function Principal() {
  return (
    <Container>
      <Main>
        <Title>
          WELCOME TO MY
          <TitleWithout>PORTFOLIO</TitleWithout>
          JUNIOR FULL STACK <TitleWithout>DEVELOPER</TitleWithout>
        </Title>
      </Main>
      <Image src="./principal.svg" />
    </Container>
  );
}
