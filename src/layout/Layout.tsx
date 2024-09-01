import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

import background from "../images/background.png";

import Typography from '../fonts/Typography';
import Menu from './Menu/Menu';

const body = css`
    html {
        margin: 0;
    }

    body {
        margin: 0;
    }
`;

const Background = styled.div`
    background-image: url(${background});
    background-size: contain;

    position: fixed;
    z-index: -1;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
`;

const Layout: React.FC<{
    children: any;
}> = ({ children }) => {
    return (
        <div>
            <Global styles={body}/>
            <Background/>
            <Typography/>
            <Menu/>

            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;
