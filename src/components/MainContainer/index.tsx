import * as Styled from './styled';

export type MainContainerProps = {
  children: JSX.Element;
};

export const MainContainer = ({ children }: MainContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
