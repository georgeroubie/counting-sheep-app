import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/layout/PageWrapper';
import Description from '../../components/typography/Description';
import Hyperlink from '../../components/typography/Hyperlink';
import Subtitle from '../../components/typography/Subtitle';
import Title from '../../components/typography/Title';
import Donation from '../../components/ui/Donation';

const About = () => {
  const navigate = useNavigate();

  function onBackHandler() {
    navigate('/');
  }

  return (
    <PageWrapper>
      <Title onBack={onBackHandler}>About</Title>
      <Description>
        <Donation />
      </Description>

      <Subtitle>Info</Subtitle>
      <Description>
        A counting sheep app that will help you fall asleep. You can count them with your mind, which is very effective,
        or you can click on the sheep. Thank you for using it!
      </Description>
      <Subtitle>Insomnia</Subtitle>
      <Description>
        If you're having sleep problems, speak to your primary care doctor. This application is made for fun.
      </Description>
      <Subtitle>Privacy</Subtitle>
      <Description>Counting sheep web application does not use any kind of cookies or tracking.</Description>
      <Subtitle>Code</Subtitle>
      <Description>
        You can find the code of this web application on my GitHub page. If you like it give the repository a star
        on&nbsp;
        <Hyperlink href="https://github.com/georgeroubie/counting-sheep-app" target="_blank" rel="noreferrer">
          GitHub
        </Hyperlink>
        . You can find the code of the night sky&nbsp;
        <Hyperlink href="https://codepen.io/georgeroubie/pen/RwyYqWO" target="_blank" rel="noreferrer">
          here
        </Hyperlink>
        &nbsp;and the code of the sheep&nbsp;
        <Hyperlink href="https://codepen.io/georgeroubie/pen/abGxRXX" target="_blank" rel="noreferrer">
          here
        </Hyperlink>
        . If you like them add a heart in each pen.
      </Description>
      <Subtitle>Creator</Subtitle>
      <Description>
        My name is George Roubie and you can follow me on&nbsp;
        <Hyperlink href="https://www.linkedin.com/in/georgeroubie" target="_blank" rel="noreferrer">
          LinkedIn
        </Hyperlink>
        ,&nbsp;
        <Hyperlink href="https://george-roubie.medium.com" target="_blank" rel="noreferrer">
          Medium
        </Hyperlink>
        ,&nbsp;
        <Hyperlink href="https://codepen.io/georgeroubie" target="_blank" rel="noreferrer">
          Codepen
        </Hyperlink>
        &nbsp;and&nbsp;
        <Hyperlink href="https://github.com/georgeroubie" target="_blank" rel="noreferrer">
          GitHub
        </Hyperlink>
        .
      </Description>
    </PageWrapper>
  );
};

export default About;
