import { AppBar, IconButton, Input, Toolbar } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { Search } from '@material-ui/icons';
import ButtonAmazing from 'app/components/Button';
import useOnClickOutside from 'app/hooks/useOnClickOutSide';
import React, { ReactElement, useRef, useState } from 'react';
import styled from 'styled-components';

import { EClassNameSideBar } from '../../constants';

const TopBarWrapper = styled(AppBar)`
  box-shadow: none;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.72);
`;

const ToolbarStyled = styled(Toolbar)`
  min-height: 64px;

  @media (min-width: 0px) and (orientation: landscape) {
    min-height: 48px;
  }
  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 960px) {
    padding: 0px 40px;
  }
  @media (min-width: 1280px) {
    min-height: 92px;
  }
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  min-height: 56px;
`;

const SearchButton = styled.div`
  display: inline-flex;
  transform: none;
`;

const SearchSectionWrapper = styled.div<{ openSearch: boolean }>`
  /* transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms; */
  /* transform: translateY(-92px); */
  transform: ${props =>
    !props.openSearch ? 'translateY(-92px)' : 'translateY(0)'};
  transition: transform 0.3s ease;
  @media (min-width: 960px) {
    height: 92px;
    padding: 0px 40px;
  }
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  /* display: ${props => (props.openSearch ? 'flex' : 'none')}; */
  padding: 0px 24px;
  z-index: 99;
  position: absolute;
  box-shadow: 0 8px 16px 0 rgb(145 158 171 / 24%);
  align-items: center;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.72);
`;

const SearchInput = styled(Input)``;

interface Props {
  classes: ClassNameMap<EClassNameSideBar>;
}

function TopBar({ classes }: Props): ReactElement {
  const [openSearch, setOpenSearch] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = () => {
    // Your custom logic here
    setOpenSearch(false);
    console.log('clicked outside');
  };

  const handleClickInside = () => {
    // Your custom logic here
    console.log('clicked inside');
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <TopBarWrapper position="fixed" className={classes.appBar}>
      <ToolbarStyled variant="regular">
        <div>
          <SearchButton
            style={openSearch ? { display: 'none' } : {}}
            onClick={() => setOpenSearch(true)}
          >
            <IconButton>
              <Search />
            </IconButton>
          </SearchButton>
          <SearchSectionWrapper
            ref={ref}
            onClick={handleClickInside}
            openSearch={openSearch}
          >
            <div style={{ display: 'flex', padding: '15px 24px' }}>
              <SearchInput placeholder="Search..." />
              <ButtonAmazing text="Search" type="primary" />
            </div>
          </SearchSectionWrapper>
        </div>
      </ToolbarStyled>
    </TopBarWrapper>
  );
}

export default TopBar;
