import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Heading from "./Heading";
import Footer from "./Footer";

import "../../styles/global.css";

const Layout: React.FunctionComponent = ({ children }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
				}
			}
		}
	`);
	return (
		<>
			<Helmet>
				<title>{data.site.siteMetadata.title}</title>
				<meta
					name="description"
					content={data.site.siteMetadata.description}
				/>
			</Helmet>
			<Heading />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
