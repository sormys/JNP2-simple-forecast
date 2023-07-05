import styled from 'styled-components';
import { Audio } from 'react-loader-spinner';

const Loader = styled(Audio)`
  display: block;
  margin: 0 auto;
  color: ${props => props.secondary};
`;

export default Loader;