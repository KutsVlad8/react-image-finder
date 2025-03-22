import { Btn } from './Button.styled';

const LoadMore = ({ onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      Load more
    </Btn>
  );
};

export default LoadMore;
