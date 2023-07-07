import styled from 'styled-components';
import { Circles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

const StyledCircles = styled(Circles)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LoaderContainer = styled.div`
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Loader = () => {
    const color = useSelector(state => state.theme.secondary);
    return (
        <LoaderContainer>
        <StyledCircles 
            color={color}
        />
        </LoaderContainer>
    );
}



export default Loader;