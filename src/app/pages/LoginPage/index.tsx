import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { LanguageSwitch } from './Feature/LanguageSwitch';
import { messages } from './messages';

const Container = styled.div`
  background: linear-gradient(
    90deg,
    rgba(240, 240, 242, 1) 0%,
    rgba(207, 232, 240, 1) 47%,
    rgba(208, 232, 240, 1) 52%,
    rgba(240, 240, 242, 1) 100%
  );
  /* background: white; */
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;

const Wrapper = styled.div`
  padding: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;
`;

const LoginWrapper = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 100vh;
  padding: 30px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;

const LoginContainer = styled.div`
  position: relative;
  z-index: 2;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  max-width: 960px;
`;

const LoginIntroduce = styled.div`
  flex-shrink: 0;
  width: 330px;
  margin-right: auto;
  justify-content: center;
  text-align: center;
`;

const LoginForm = styled.div`
  position: relative;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 464px;
  padding: 48px 48px 64px;
  border-radius: 40px;
  background: #ffffff;
`;

const LoginTitle = styled.div`
  font-size: 40px;
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: -1px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
`;

const LoginField = styled.div`
  margin-bottom: 24px;
`;

const LoginFieldInput = styled.input`
  height: 56px;
  padding: 0 22px;
  width: 100%;
  border-radius: 8px;
  background: rgba(228, 228, 228, 0.3);
  /* background: #e8eef4; */
  border: 2px solid transparent;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #11142d;
  -webkit-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;
`;

const LoginFieldLabel = styled.div`
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 1.33333;
  font-weight: 500;
  color: #808191;
  display: none;
`;

const LoginButton = styled.button`
  min-width: 100%;
  background: #4460ef;
  color: #ffffff;
  height: 56px;
  padding: 0 20px;
  border-radius: 16px/16px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.42857;
  font-weight: 700;
  -webkit-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
  box-sizing: inherit;
  margin: 0;
  border: 0;
  cursor: pointer;
  :hover {
    opacity: 90%;
  }
`;

const LoginLogo = styled.img``;
export function LoginPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(messages.title())}</title>
        <meta name="description" content="Anti Cheating Test" />
      </Helmet>

      <Container>
        <Wrapper>
          <LoginWrapper>
            <LoginContainer>
              <LoginIntroduce>
                <LoginLogo
                  src="https://www.hutech.edu.vn/imgnews/homepage/stories/hinh34/logo%20CMYK-03.png"
                  width="100%"
                />
                <h2>{t(messages.slogan())}</h2>
                <LanguageSwitch />
              </LoginIntroduce>
              <LoginForm>
                <LoginTitle>{t(messages.signIn())}</LoginTitle>
                <LoginField>
                  <LoginFieldLabel>
                    {t(messages.labelUsername())}
                  </LoginFieldLabel>
                  <div>
                    <LoginFieldInput
                      placeholder={t(messages.placeholderUsername())}
                      type="email"
                    />
                  </div>
                </LoginField>
                <LoginField>
                  <LoginFieldLabel>{t(messages.labelPwd())}</LoginFieldLabel>
                  <div>
                    <LoginFieldInput
                      placeholder={t(messages.placeholderPwd())}
                      type="password"
                    />
                  </div>
                </LoginField>
                <LoginButton>{t(messages.continue())}</LoginButton>
              </LoginForm>
            </LoginContainer>
          </LoginWrapper>
        </Wrapper>
      </Container>
    </>
  );
}
