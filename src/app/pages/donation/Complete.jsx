import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/layout/PageWrapper';
import Description from '../../components/typography/Description';
import Title from '../../components/typography/Title';

const CompleteDonation = () => {
  const navigate = useNavigate();

  function onBackHandler() {
    navigate('/');
  }

  return (
    <PageWrapper>
      <Title onBack={onBackHandler}>You are awesome</Title>
      <Description>
        Your donation is very prized and will forever be held in high regard in my memory. For this, I thank you and
        greatly appreciate your support. Also I respect and admire your decision to donate so selflessly.
      </Description>
    </PageWrapper>
  );
};

export default CompleteDonation;
