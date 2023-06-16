import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    display: flex;
    justify-content: space-around;
    font-family: FCCT2;
    font-size: 3rem;
    border: 2px sold green; 
`;

export default function CharacterList (props) {
    const { character } = props;
    console.log(props);
    return(
    <WrapperDiv >
        <p>{character.name}</p>
        <p>{character.birth_year}</p>
    </WrapperDiv>
)}