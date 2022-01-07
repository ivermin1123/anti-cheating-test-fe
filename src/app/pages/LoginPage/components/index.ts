import styled from 'styled-components';

export const Container = styled.div`
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

export const Wrapper = styled.div`
  padding: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;
`;

export const LoginWrapper = styled.div`
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

export const LoginContainer = styled.div`
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

export const LoginIntroduce = styled.div`
  flex-shrink: 0;
  width: 330px;
  margin-right: auto;
  justify-content: center;
  text-align: center;
`;

export const LoginForm = styled.div`
  position: relative;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 464px;
  padding: 48px 48px 64px;
  border-radius: 40px;
  background: #ffffff;
`;

export const LoginTitle = styled.div`
  font-size: 40px;
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: -1px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
`;

export const LoginField = styled.div`
  margin-bottom: 24px;
`;

export const LoginFieldInput = styled.input`
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

export const LoginFieldLabel = styled.div`
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 1.33333;
  font-weight: 500;
  color: #808191;
  display: none;
`;

export const LoginButton = styled.button`
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

export const LoginLogo = styled.img``;
