import React, { FC } from "react";
import Header from "@/components/common/header";
import LinkToOtherSections from "./link-to-other-sections";

const Homepage: FC = () => {
  return (
    <main>
      <title>5tupidmuffin</title>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://avatars.githubusercontent.com/u/43025025?v=4" // github pfp
      ></link>
      <Header />
      <LinkToOtherSections />
    </main>
  );
};

export default Homepage;
