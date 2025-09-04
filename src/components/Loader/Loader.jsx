import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => (
  <LoaderContainer>
    <RotatingLines strokeColor="#3f51b5" />
  </LoaderContainer>
);

export default Loader;
