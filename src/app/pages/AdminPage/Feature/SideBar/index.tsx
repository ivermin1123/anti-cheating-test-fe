import React from 'react';
import styled from 'styled-components';
import { Avatar, Drawer, Link, Typography } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { EClassNameSideBar } from '../../constants';
import ListContainChild from './ListContainChild';

interface Props {
  classes: ClassNameMap<EClassNameSideBar>;
}

const LogoImage = styled.img`
  height: 40px;
  content: url('https://minimals.cc/static/brand/logo_single.svg');
`;

const AccountLink = styled(Link)`
  margin: 0px;
  color: rgb(0, 171, 85);
  text-decoration: none;
  margin-bottom: 20px;
`;
const AccountWrapper = styled.div`
  margin: 8px 20px 0px;
  display: flex;
  padding: 16px 20px;
  background: #f4f6f8;
  align-items: center;
  border-radius: 12px;
`;

const AccountInfoContainer = styled.div`
  margin-left: 16px;
`;

const AccountTypography = styled(Typography)<{ isP?: boolean }>`
  margin: 0px;
  font-family: 'Be Vietnam', sans-serif;
  font-weight: ${props => (props.isP ? 500 : 600)};
  font-size: 0.875rem;
  line-height: 1.57143;
  color: ${props => (!props.isP ? 'rgb(33, 43, 54)' : 'rgb(99, 115, 129)')};
`;

function SideBar({ classes }: Props) {
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.logo}>
        <a>
          <LogoImage />
        </a>
      </div>
      <AccountLink href="#" variant="inherit" underline="none">
        <AccountWrapper>
          <Avatar src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg" />
          <AccountInfoContainer>
            <AccountTypography variant="subtitle2">Hoang Le</AccountTypography>
            <AccountTypography isP variant="body2">
              Super Admin
            </AccountTypography>
          </AccountInfoContainer>
        </AccountWrapper>
      </AccountLink>
      <ListContainChild listMenu={['Dashboard', 'ViP']} name="General" />
      <ListContainChild listMenu={['Yo', 'Mosh']} name="Menu 2" />
    </Drawer>
  );
}

export default SideBar;
