import styled from 'styled-components';

export const SearchInput = styled.input`
    background-color: ${props => props.theme.color_b};
    color: ${props => props.theme.color_e};
    border: none;
    border-radius: 3px;
    font-size: 25px;
    flex: 3 1 auto;
    min-width: 320px;
    padding: 10px;
`;

export default SearchInput;
