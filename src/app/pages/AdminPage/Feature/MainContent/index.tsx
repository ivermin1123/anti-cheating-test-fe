import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const MainContentWrapper = styled.div`
  @media (min-width: 1280px) {
    padding-top: 132px;
    padding-left: 16px;
    padding-right: 16px;
  }
  overflow: auto;
  flex-grow: 1;
  min-height: 100%;
  padding-top: 104px;
  padding-bottom: 80px;
  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
`;

function MainContent() {
  return (
    <MainContentWrapper>
      <CssBaseline />
      <Container
        style={{
          width: '100%',
          marginLeft: 'auto',
          boxSizing: 'border-box',
          marginRight: 'auto',
          display: 'block',
        }}
      >
        <Typography
          component="div"
          style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
        >
          Main content here
        </Typography>
      </Container>
    </MainContentWrapper>
  );
}

export default MainContent;
