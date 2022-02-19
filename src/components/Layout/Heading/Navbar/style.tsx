import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "../../../../assets/colors";

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.5rem;
`;

export const StyledList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 33%;
`;

export const PageLink = styled(Link)`
	font-weight: 700;
	&::after {
		display: block;
		content: "";
		border-bottom: 2px solid ${colors.blue400};
		transform: scaleX(0);
		transition: all 300ms ease-in-out;
	}
	&:hover {
		color: ${colors.blue400};
	}
	&:hover::after {
		transform: scaleX(1);
	}
`;
