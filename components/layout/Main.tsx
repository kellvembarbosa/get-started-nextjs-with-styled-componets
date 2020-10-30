import React from 'react'
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

export default function Main({ children }) {
    return (
        <Container>
            <Header />
            { children }
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`;