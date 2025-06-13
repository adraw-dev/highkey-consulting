import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import FeaturedOpportunities from "./featured-opportunities";
import JenniferInActionSection from "./JenniferInActionSection";
import Experiences from "./Experiences";

const MediaPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>highkey consulting</title>
        <link rel="icon" href="/hk.png" sizes="48x48" />
      </Head>
      <Header title="Media" />

      <FeaturedOpportunities />

      <JenniferInActionSection />

      <Experiences />
    </>
  );
};

export default MediaPage;
