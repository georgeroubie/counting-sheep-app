import styled from 'styled-components';
import PageWrapper from '../../components/layout/PageWrapper';
import Description from '../../components/typography/Description';
import Subtitle from '../../components/typography/Subtitle';
import Title from '../../components/typography/Title';

const Hyperlink = styled.a`
  text-decoration: underline;
`;

const About = () => {
  return (
    <PageWrapper>
      <Title>About</Title>
      <Subtitle>Info</Subtitle>
      <Description>
        A counting sheep app that will help you fall asleep. The application is created by George Roubie (me). You can
        find the code of this web application on my GitHub page. If you like it give the repository a star on&nbsp;
        <Hyperlink href="https://github.com/georgeroubie/counting-sheep-app" target="_blank" rel="noreferrer">
          GitHub
        </Hyperlink>
        &nbsp;and follow me on&nbsp;
        <Hyperlink href="https://www.linkedin.com/in/georgeroubie" target="_blank" rel="noreferrer">
          LinkedIn
        </Hyperlink>
        &nbsp;and&nbsp;
        <Hyperlink href="https://george-roubie.medium.com" target="_blank" rel="noreferrer">
          Medium
        </Hyperlink>
        . Thank you for using it, have fun!
      </Description>
      <Subtitle>Data and Privacy</Subtitle>
      <Description>
        Counting sheep web application does not use any kind of cookies or tracking. All the data are saved on your
        device.
      </Description>
    </PageWrapper>
  );
};

export default About;
