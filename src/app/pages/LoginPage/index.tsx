import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from './Feature/LanguageSwitch';

import {
  Container,
  LoginButton,
  LoginContainer,
  LoginField,
  LoginFieldInput,
  LoginFieldLabel,
  LoginForm,
  LoginIntroduce,
  LoginTitle,
  LoginWrapper,
  Wrapper,
  LoginLogo,
} from './components';
import Webcam from 'react-webcam';

export function LoginPage() {
  const { t } = useTranslation();
  const webcamRef = React.useRef<any>(null);
  const [imgSrc, setImgSrc] = React.useState('null');

  const handleLoginButton = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Anti Cheating Test" />
      </Helmet>

      <Container>
        <Wrapper>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            style={{ visibility: 'hidden', position: 'absolute' }}
          />

          <LoginWrapper>
            <LoginContainer>
              <LoginIntroduce>
                <LoginLogo
                  src="https://www.hutech.edu.vn/imgnews/homepage/stories/hinh34/logo%20CMYK-03.png"
                  width="100%"
                />
                <h2>Solgan</h2>
                <LanguageSwitch />
              </LoginIntroduce>
              <LoginForm>
                <LoginTitle>Sign in</LoginTitle>
                <LoginField>
                  <LoginFieldLabel>Username</LoginFieldLabel>
                  <div>
                    <LoginFieldInput
                      placeholder="Enter your username"
                      type="email"
                    />
                  </div>
                </LoginField>
                <LoginField>
                  <LoginFieldLabel>Password</LoginFieldLabel>
                  <div>
                    <LoginFieldInput placeholder="Password" type="password" />
                  </div>
                </LoginField>
                <LoginButton onClick={handleLoginButton}>Continue</LoginButton>
              </LoginForm>
            </LoginContainer>
          </LoginWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
