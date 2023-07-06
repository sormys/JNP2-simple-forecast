import styled from 'styled-components';
import { Audio } from 'react-loader-spinner';

const Loader = styled(Audio)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default Loader;