import {
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  Collapse,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

const ListSubheaderStyled = styled(ListSubheader)`
  color: #212b36;
  font-size: 0.75rem;
  margin-top: 24px;
  font-family: Be Vietnam, sans-serif;
  font-weight: 700;
  line-height: 1.5;
  padding-left: 40px;
  margin-bottom: 16px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

const ListItemStyled = styled(ListItem)<{ isOpen?: boolean }>`
  color: ${props => (props.isOpen ? '#00AB55' : '#637381')};
  height: 48px;
  font-size: 0.55rem;
  font-family: Be Vietnam, sans-serif;
  font-weight: 500;
  line-height: 1.5714285714285714;
  padding-left: 45px;
  padding-right: 20px;
  text-transform: capitalize;
  background-color: ${props => (props.isOpen ? '#DEF2E4' : 'none')};
  span {
    font-size: 14px;
  }
`;

const ListItemIconStyled = styled(ListItemIcon)`
  flex-shrink: 0;
  display: inline-flex;
  color: inherit;
  min-width: auto;
  margin-right: 16px;
  margin-top: 4px;
  padding: 10px;
  border-radius: 30%;
`;

const ListWrapper = styled(List)`
  list-style: none;
  margin: 0px;
  padding: 0px;
  position: relative;
`;

const ListIconSvg = styled(SvgIcon)`
  height: 100%;
  width: 24px;
`;

const ListItemChild = styled(ListItem)`
  padding-left: 50px;
  color: #637381;
  span {
    font-size: 14px;
  }
`;

const PointSpan = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  :before {
    width: 4px;
    height: 4px;
    content: '';
    display: block;
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;
    background-color: #919eab;
  }
`;

const ListItemCanExpand = (props: { text: string; listMenu: string[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <ListWrapper>
      <ListItemStyled button onClick={() => setOpen(!open)} isOpen={open}>
        <ListItemIconStyled>
          <div>
            <ListIconSvg alignmentBaseline="middle">
              <path d="M18.38,4.57 L17.15,6.42 C18.3549,8.82314304 18.2722508,11.6707848 16.93,14 L3.07,14 C1.30649669,10.940691 1.75738399,7.08701405 4.17947843,4.51742765 C6.60157287,1.94784125 10.4219047,1.27020578 13.58,2.85 L15.43,1.62 C11.5538078,-0.865563173 6.48139483,-0.382943466 3.14349274,2.78901179 C-0.194409356,5.96096705 -0.934842382,11.0022024 1.35,15 C1.70510459,15.6150891 2.35977788,15.9957131 3.07,16.0000158 L16.92,16.0000158 C17.6373695,16.002848 18.3013181,15.6212684 18.66,15 C20.5386438,11.74567 20.4343473,7.71287333 18.39,4.56 L18.38,4.57 Z"></path>
              <path
                d="M8.59,11.41 C8.96513651,11.7855541 9.4741815,11.9965733 10.005,11.9965733 C10.5358185,11.9965733 11.0448635,11.7855541 11.42,11.41 L17.08,2.92 L8.59,8.58 C8.21444591,8.95513651 8.00342669,9.4641815 8.00342669,9.995 C8.00342669,10.5258185 8.21444591,11.0348635 8.59,11.41 L8.59,11.41 Z"
                opacity=".48"
              ></path>
            </ListIconSvg>
          </div>
        </ListItemIconStyled>
        <ListItemText primary={props.text} />
        {open ? (
          <ExpandLess style={{ fontSize: 18 }} />
        ) : (
          <ExpandMore style={{ fontSize: 18 }} />
        )}
      </ListItemStyled>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.listMenu.map((text, index) => (
            <ListItemChild button>
              <ListItemIcon style={{ paddingLeft: '15px' }}>
                <PointSpan />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemChild>
          ))}
        </List>
      </Collapse>
    </ListWrapper>
  );
};

interface Props {
  listMenu: string[];
  name: string;
}

function ListContainChild({ listMenu, name }: Props): ReactElement {
  return (
    <List
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheaderStyled id="nested-list-subheader">
          {name}
        </ListSubheaderStyled>
      }
      // className={classes.root}
    >
      {listMenu.map((text, item) => (
        <ListItemCanExpand
          listMenu={['Dashboard', 'And', 'Something else']}
          text={text}
        />
      ))}
    </List>
  );
}

export default ListContainChild;
