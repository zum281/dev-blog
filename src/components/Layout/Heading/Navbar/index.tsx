import React from "react";
import Logo from "../../../../assets/svg/logo.svg";

const Navbar: React.FunctionComponent = () => {
	return (
		<nav>
			<img src={Logo} alt="DevBlog logo" className="logo" />
		</nav>
	);
};

export default Navbar;
