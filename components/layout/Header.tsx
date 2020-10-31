import React from 'react'
import styled from 'styled-components';

export default function Header() {
    return (
        <Container>
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 80px; 
    background-color: ${ ({theme}) => theme.colors.SecundaryBackgroundColor }
`;