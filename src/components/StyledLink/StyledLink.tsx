import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
    &.active::after {
      display: block;
      content: "";
      width: 100%;
      height: 3px;
      background: #ff001b;
    }
  `;