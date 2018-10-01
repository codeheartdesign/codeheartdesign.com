import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Tickets component
 */
const Tickets = ({ headline, map, _body, _parseMD, _self }) => (
	<Fragment>
		<h3 className="row-h contentHeadline" id={ _self.split('/').slice(-1).join('').replace('.md', '') } tabIndex="0">{ headline }</h3>
		<iframe className="row-h content location-map" src={ map } width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
		<div className="row-h content">{ _body }</div>
	</Fragment>
);

Tickets.propTypes = {
	/**
	 * headline: Tickets
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * map: Tickets
	 */
	map: PropTypes.string.isRequired,
};

Tickets.defaultProps = {};

export default Tickets;
