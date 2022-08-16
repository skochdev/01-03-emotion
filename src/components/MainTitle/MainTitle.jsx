import PropTypes from 'prop-types';
import { Heading } from './MainTitle.styled';

export const MainTitle = ({ text }) => {
  return <Heading>{text}</Heading>;
};

MainTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
