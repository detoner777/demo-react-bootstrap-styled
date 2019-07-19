import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import mountImage from '../assets/mount.jpg';

const Styles = styled.div`
.jumbo {
    background: url(${mountImage}) no-repeat fixed bottom;
    backround-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
}
.overlay {
    backround-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className='jumbo'>
            <div className="overlay"></div>
            <Container>
                <h1>Welcome</h1>
                <p>Lets go Deep</p>
            </Container>
        </Jumbo>
        </Styles>

)

export default Jumbotron;