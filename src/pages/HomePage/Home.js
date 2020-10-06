import React from "react";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "./Data";
import {
  InfoSection,
  InfoSection1,
  InfoSection2,
  InfoSection3,
  InfoSection0,
  Navbar,
  Footer,
} from "../../components";
import Companies from "../../components/people";


function Home() {
  return (
    <>
      <Navbar />
      <InfoSection1 {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection3 {...homeObjFive} />
      <InfoSection0 {...homeObjOne} />
      <InfoSection2 {...homeObjFour} />
      <Companies />
      <Footer />
    </>
  );
}

export default Home;
