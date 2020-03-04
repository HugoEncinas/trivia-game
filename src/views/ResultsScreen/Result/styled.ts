import styled from 'styled-components';

export const ListItem = styled.li<any>`
  margin-bottom: 16px;
  color: ${(props: any) => (props.result == 'true' ? 'green' : 'red')};
  &:before {
    margin-right: 4px;
    content: '${(props: any) => (props.result == 'true' ? '✓' : 'X')}';
  }
`;
