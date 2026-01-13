import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tech Stack & Tools</SectionTitle>
    <SectionText>
      I work with a wide range of technologies for building high-performance
      Web Scraping APIs, scalable backend systems, and automated pipelines.
      From frontend to backend, containerization, and CI/CD.
    </SectionText>
    <List>
     
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End & APIs</ListTitle>
          <ListParagraph>
            Node.js, Express.js, GraphQL, Nest.js
            <br />
            TypeScript, Microservices, Web Scraping
            <br />
            MongoDB, MySQL, PostgreSQL
            <br />
            Docker, Docker Compose, RabbitMQ, PubSub
            <br />
            CI/CD with GitHub Actions
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        
        
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
