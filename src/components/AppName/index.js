import styled from 'styled-components'

const AppName = styled.h1`
  font-family: 'Caveat Brush', cursive;
  margin-top: 0;
  font-size: ${({fontSize}) => fontSize ? fontSize : '3rem'};
  font-weight: normal;
  color: white;
  text-align: center;
  text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
`;

export default AppName