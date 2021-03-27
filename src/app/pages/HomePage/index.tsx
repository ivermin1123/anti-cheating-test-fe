import { NavBar } from 'app/components/NavBar';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 256px;
  height: 100vh;
  padding: 96px 0 72px;
  overflow: hidden;
  background: #ffffff;
  -webkit-box-shadow: inset -1px 0 0 0 #e4e4e4;
  box-shadow: inset -1px 0 0 0 #e4e4e4;
  -webkit-transition: width 0.25s;
  -o-transition: width 0.25s;
  transition: width 0.25s;
`;

const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 96px;
`;
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Anti Cheating Test" />
      </Helmet>
      <span>HomePage container</span>
      <Wrapper>
        <TopBar></TopBar>
      </Wrapper>
    </>
  );
}
