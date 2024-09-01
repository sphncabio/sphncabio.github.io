import * as React from 'react';
import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';

import Link from './Link';
import BaseLogo from './Logo';

const Wrapper = styled.nav`
    font-family: Ananias;
    position: absolute;
    top: 0;
    left: 0;
    text-transform: uppercase;
    height: 70px;
    width: 100%;

    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
`;

const Logo = styled(BaseLogo)`
    fill: #e5ddd1;
    margin: 10px 0;
    height: 70px;

    &:hover {
        filter: brightness(.9);
    }
`;

const Menu: React.FC = () => {
    return (
        <Wrapper>
            <Link href="/enebio">ENEBio</Link>
            <Link href="/ca-lendario">Calendario</Link>
            <Link href="/tamanduas">Gestao</Link>

            <GatsbyLink to="/">
                <Logo></Logo>
            </GatsbyLink>

            <Link href="/RNAm">Jornal</Link>
            <Link href="/entidades">Entidades</Link>
            <Link href="/rds">RDs</Link>
        </Wrapper>
    );
}

export default Menu;
