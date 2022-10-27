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
  return (
    <>
      <Sheep />
      <Grass>
        <AddIcon />
        <ResetIcon />
        <InfoIcon />
      </Grass>
    </>
  );
};

export default Home;
