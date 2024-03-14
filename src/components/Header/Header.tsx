import { Container } from "../Container/Container";
import { Navigation } from "../Navigation/Navigation";
import { SearchForm } from "../SearchForm/SearchForm";

const Header = (props:{setQuery: (search:string)=>void}) => {
  return (
      <Container>
        <Navigation />
        <SearchForm setQuery={props.setQuery}/>
      </Container>
  );
};

export default Header;