import PropTypes from 'prop-types';
import Scripts from './scripts.js';
import Head from './head.js';
import React from 'react';

/*
 * The Page2018 component
 */
const Page2018 = ({
	pagetitle,
	header,
	main,
	body,
	footer,
	_pages,
	_relativeURL,
	_ID,
	_self,
}) => {
	const CleanName = name => {
		const newName = name
			.replace(/-/g, ' ')
			.replace('.md', '');

		return `${ newName.slice( 0, 1 ).toUpperCase() }${ newName.slice( 1 ) }`;
	}

	return (
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

					<div className="row wrapper gridgap content-wrapper">
						<nav>
							<ul className="navlist">
								{
									_pages[ _ID ].body.map( ( page, i ) =>
										<li key={ i }>
											<a className="js-scroll" href={`#${ page.replace('.md', '') }`}>{ CleanName( page ) }</a>
										</li>
									)
								}
							</ul>
						</nav>
						<section className="content gridgap">
							{ body }
						</section>
					</div>
				</main>

				{ footer }

				<Scripts _ID={ _ID } _relativeURL={ _relativeURL }/>
			</body>
		</html>
	);
};

Page2018.propTypes = {
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
	 * body: (partials)(2)
	 */
	body: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};

export default Page2018;
