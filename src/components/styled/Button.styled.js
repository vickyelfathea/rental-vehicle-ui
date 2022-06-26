import styled from 'styled-components';

export const Btn = styled.button`
  background-color: ${({ clrbg }) => clrbg};
  color: ${({ clrfnt }) => clrfnt};
  width: ${({ wdth }) => wdth};
  border: none;
  border-radius: 10px;
  font-family: Nunito;
  font-weight: 900;
  height: 89px;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;
`;
