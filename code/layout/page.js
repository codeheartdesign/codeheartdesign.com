import PropTypes from 'prop-types';
import Scripts from './scripts.js';
import Head from './head.js';
import React from 'react';

/*
 * The Page component
 */
const Page = ({
	pagetitle,
	header,
	main,
	footer,
	_pages,
	_relativeURL,
	_ID,
	_self,
}) => (
	<html>
		<Head _ID={ _ID } _relativeURL={ _relativeURL } pagetitle={ pagetitle }/>

		<body className={ _ID } itemScope itemType="http://schema.org/Event">
			<div className="grid gridgap">
				<div className="col">&nbsp;</div>
				<div className="col">&nbsp;</div>
				<div className="col">&nbsp;</div>
				<div className="col">&nbsp;</div>
				<div className="col">&nbsp;</div>
				<div className="col">&nbsp;</div>
				<div className="col">&nbsp;</div>
				<div className="col">&nbsp;</div>
				<div className="col">&nbsp;</div>
				<div className="col">&nbsp;</div>
				<div className="col">&nbsp;</div>
				<div className="col">&nbsp;</div>
			</div>

			{ header }

			<main className="wrapper gridgap">
				{ main }
			</main>

			{ footer }

			<Scripts _ID={ _ID } _relativeURL={ _relativeURL }/>
		</body>
	</html>
);

Page.propTypes = {
	/**
	 * pagetitle: Homepage
	 */
	pagetitle: PropTypes.string.isRequired,

	/**
	 * header: (partials)(2)
	 */
	header: PropTypes.node.isRequired,

	/**
	 * main: (partials)(2)
	 */
	main: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node,
};

export default Page;
