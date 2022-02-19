import React from "react";
import Logo from "../../../../assets/svg/logo.svg";
import { Nav, StyledList, PageLink } from "./style";

const Navbar: React.FunctionComponent = () => {
	return (
		<Nav>
			<PageLink to="/">
				<img src={Logo} alt="DevBlog logo" className="logo" />
			</PageLink>
			<StyledList>
				<li>
					<PageLink to="/posts">Posts</PageLink>
				</li>
				<li>
					<PageLink to="/about">About</PageLink>
				</li>
				<li>
					<PageLink to="/contacts">Contacts</PageLink>
				</li>
			</StyledList>
		</Nav>
	);
};

export default Navbar;
