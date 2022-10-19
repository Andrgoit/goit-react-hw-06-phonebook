import styled from 'styled-components';

export const StyledMain = styled.main`
  background-color: ${p => p.theme.colors.bgMain};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px;

  background-color: ${p => p.theme.colors.bgContainer};
  border-radius: ${p => p.theme.radii.container};
`;
