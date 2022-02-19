/* eslint-disable no-undef */
module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
	},
	plugins: [
		{
			resolve: "gatsby-source-contentful",
			options: {
				accessToken: "1AV46rcG07x196Sl6iLl6nYgXkVjUj4cTBtihpAOBLU",
				spaceId: "hsgcuhzq5wje",
			},
		},
		"gatsby-plugin-emotion",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/assets/images/icon.png",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/assets/images/",
			},
			__key: "images",
		},
		"gatsby-plugin-typescript",
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: "/src/assets/svg/",
				},
			},
		},
	],
};
