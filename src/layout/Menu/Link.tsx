import * as React from 'react';
import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';

import paper from '../../images/paper.webp';

const ratio = 583 / 800;
const width = 170;
const height = width * ratio;
const label = 45;

const NavLink = styled(GatsbyLink)`
    background-image: url(${paper});
    background-size: cover;
    width: ${width}px;
    height: ${height}px;
    display: inline-block;
    color: #000000;
    position: relative;
    transition: top .1s;

    &:not(.active) {
        top: ${(label + 25) - height}px;
    }

    &.active {
        top: -25px;
    }

    &:hover:not(.active) {
        top: -25px;
    }
`;

const Label = styled.p`
    width: 100%;
    height: ${label}px;

    font-size: 1.1rem;
    text-align: center;
    vertical-align: middle;
    line-height: ${label}px;

    position: absolute;
    bottom: 0;
`;

const Link: React.FC<{
    href: string;
    children: string;
}> = ({ children, href }) => {
    return (
        <NavLink to={href} activeClassName="active">
            <Label>{children}</Label>
        </NavLink>
    );
}

export default Link;
