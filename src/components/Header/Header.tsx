import { Container } from "../Container/Container";
import { Navigation } from "../Navigation/Navigation";
import { ReactNode } from 'react';

const Header = (props:{children:ReactNode} ) => {
  return (
      <Container>
        <Navigation />
        {props.children}
      </Container>
  );
};

export default Header;