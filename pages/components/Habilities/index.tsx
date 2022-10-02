import {
  Container,
  Content,
  Description,
  IconEfficiency,
  IconSecurity,
  IconVisualIdentity,
  Title,
} from "./styles";

export function Habilities() {
  return (
    <Container>
      <Content>
        <IconSecurity src="./security.svg" />
        <Title>SECURITY</Title>
        <Description>
          SECURITY IS VERY IMPORTANT, SO MY HIGHEST PRIORITY IS TO ENSURE
          PROJECT IN SAFETY.
        </Description>
      </Content>
      <Content>
        <IconVisualIdentity src="./visual.svg" />
        <Title>VISUAL IDENTITY</Title>
        <Description>
          VISUAL IDENTITY IS VERY IMPORTANT, THE PRIORITY IS TO MAKE THE PAGE
          EXACTLY AS REQUESTED, AND OPTIMIZED
        </Description>
      </Content>
      <Content>
        <IconEfficiency src="./clock.svg" />
        <Title>EFFICIENCY</Title>
        <Description>
          I SEEK TO DO THE PROJECT WITHINTHE DESIRED DEADLINE WITH EFFICIENCY
        </Description>
      </Content>
    </Container>
  );
}
