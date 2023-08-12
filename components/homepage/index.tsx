import React, { FC } from "react";
import Header from "@/components/common/header";
import LinkToOtherSections from "./link-to-other-sections";

const Homepage: FC = () => {
  return (
    <main>
      <Header />
      <LinkToOtherSections />
    </main>
  );
};

export default Homepage;
