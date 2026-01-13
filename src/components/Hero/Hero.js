import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import { FiverUrl, ResumeUrl, UpworkUrl } from "../../constants/constants";
import LinkButton from "../../styles/GlobalComponents/LinkButton";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Zakaria <br />
          Backend & Web Scraping Engineer
        </SectionTitle>
        <SectionText>
          I build high-performance APIs & Web Scraping systems using Node.js,
          MongoDB, and Docker. Experienced in scalable backend architecture,
          task automation, CI/CD with GitHub Actions, and production-ready
          Docker Compose setups.
        </SectionText>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "0 0 80px",
          }}
        >
       
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
