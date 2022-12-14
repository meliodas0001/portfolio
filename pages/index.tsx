import type { NextPage } from "next";
import Head from "next/head";
import { GlobalStyle } from "../styles/Global";
import { Container } from "../styles/MainPage";
import { AboutAn } from "./components/Animations/About";
import { Appbar } from "./components/Appbar";
import { PrincipalAn } from "./components/Animations/Principal";
import { HabilitiesAn } from "./components/Animations/Habilities";

function Home() {
  return (
    <Container>
      <Head>
        <title>Rique Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Appbar />
      <PrincipalAn />
      <HabilitiesAn />
      <AboutAn />

      <GlobalStyle />
    </Container>
  );
}

export default Home;
