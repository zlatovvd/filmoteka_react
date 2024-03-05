import { Container } from "../Container/Container";
import { Navigation } from "../Navigation/Navigation";
import { SearchForm } from "../SearchForm/SearchForm";

const Header = () => {
  return (
      <Container>
        <Navigation />
        {/* <SearchForm setSearch={props.setSearch}/> */}
      </Container>
  );
};

export default Header;