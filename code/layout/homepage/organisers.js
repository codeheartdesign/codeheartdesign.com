import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Organisers component
 */
const Organisers = ({ headline, _self }) => (
	<Fragment>
		<h3 className="row-h contentHeadline" id={ _self.split('/').slice(-1).join('').replace('.md', '') } tabIndex="0">{ headline }</h3>
		<div className="row-h content section">xxx</div>
	</Fragment>
);

Organisers.propTypes = {
	/**
	 * headline: Organisers
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Organisers.defaultProps = {};

export default Organisers;
