import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import _AddIcon from '../../components/icons/Add';
import _InfoIcon from '../../components/icons/Info';
import _ResetIcon from '../../components/icons/Reset';
import Sheep from '../../components/sheep';

const Grass = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(45, 208, 31, 1) 0%, rgba(18, 152, 14, 0.83) 100%);
  height: ${({ theme: { sizes } }) => sizes.grassHeight};
`;

const Number = styled.span`
  cursor: default;
  display: inline-block;
  pointer-events: none;
  font-size: ${({ theme: { fontSize } }) => fontSize.xlarge};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  margin: ${({ theme: { spacing } }) => spacing.normal};
`;

const IconWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;
`;

const InfoIcon = styled(_InfoIcon)`
  width: ${({ theme: { fontSize } }) => fontSize.xlarge};
`;

const ResetIcon = styled(_ResetIcon)`
  width: ${({ theme: { fontSize } }) => fontSize.xlarge};
`;

const AddIcon = styled(_AddIcon)`
  width: ${({ theme: { fontSize } }) => fontSize.xlarge};
`;

const Home = () => {
  const navigate = useNavigate();
  const [numberOfSheep, setNumberOfSheep] = useState(0);

  function refreshPage() {
    window.location.reload();
  }

  function addOneSheep() {
    setNumberOfSheep((prevNumberOfSheep) => prevNumberOfSheep + 1);
  }

  function goToAboutPage() {
    navigate('/about');
  }

  return (
    <>
      <Number>{numberOfSheep}</Number>
      <Sheep />
      <Grass>
        <IconWrapper onClick={addOneSheep}>
          <AddIcon />
        </IconWrapper>
        <IconWrapper onClick={refreshPage}>
          <ResetIcon />
        </IconWrapper>
        <IconWrapper onClick={goToAboutPage}>
          <InfoIcon />
        </IconWrapper>
      </Grass>
    </>
  );
};

export default Home;
