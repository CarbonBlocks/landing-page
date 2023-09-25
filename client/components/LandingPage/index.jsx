import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import { HexOne, HexMain } from "../../public/images/HexSVGs";

import * as Style from "./Styles/LandingPageStyles";
import SignUp from "./SignUp";

const LandingPage = () => {
  return (
    <Style.PageWrapper>
      <Style.MainHex>
        <HexMain height="60vh" />
      </Style.MainHex>

      <Style.TopWrapper>
        <Style.PrimaryText>Building the carbon economy</Style.PrimaryText>

        <Style.SecondaryText>
          By employing existing cashback marketing, Carbon Blocks seamlessly
          allocates a portion of everyday transactions to help businesses
          achieve their net-zero emissions targets while empowering consumers to
          take meaningful action against climate change.
        </Style.SecondaryText>
      </Style.TopWrapper>

      <Style.BottomWrapper>
        <Style.LogoWrapper>
          <SignUp />
        </Style.LogoWrapper>
      </Style.BottomWrapper>
    </Style.PageWrapper>
  );
};

export default LandingPage;
