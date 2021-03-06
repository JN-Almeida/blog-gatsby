import React from 'react';

import { Home } from "styled-icons/boxicons-solid/Home";
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2";
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt";
import { LightBulb as Light } from "styled-icons/entypo/LightBulb";
import { Grid } from "styled-icons/boxicons-solid/Grid";

import * as S from './styled'

const MenuBar = () => (
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenuBarLink to='/' title='Ir para home'>
                <S.MenuBarItem> <Home /> </S.MenuBarItem>
            </S.MenuBarLink>
            <S.MenuBarLink to='search' title='Pesquisar'>
                <S.MenuBarItem> <Search /> </S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>

        <S.MenuBarGroup>
            <S.MenuBarItem title='Mudar tema'>
                <Light />
            </S.MenuBarItem>
            <S.MenuBarItem title='Mudar Visualização'>
                <Grid />
            </S.MenuBarItem>
            <S.MenuBarItem title='Ir para o Topo'>
                <Arrow />
            </S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
)

export default MenuBar 