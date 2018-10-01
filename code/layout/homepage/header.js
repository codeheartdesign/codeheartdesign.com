import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The homepage header component
 */
const HomepageHeader = ({ headline, button, _body }) => (
	<div className="row-c header">
		<h2 className="headline">{ headline }</h2>
		<div className="body">{ _body }</div>
		<a className="js-scroll btn btn--lg" href="#tickets">{ button }</a>
	</div>
);

HomepageHeader.propTypes = {
	/**
	 * headline: A mini-conf bringing together designers, design system lovers and front-end developers.
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * button: Get tickets
	 */
	button: PropTypes.string.isRequired,

	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

HomepageHeader.defaultProps = {};

export default HomepageHeader;
