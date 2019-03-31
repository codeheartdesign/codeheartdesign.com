import PropTypes from 'prop-types';
import React from 'react';


/**
 * The backhome component
 */
const Backhome = ({ _body }) => (
	<div className="row">{ _body }</div>
);

Backhome.propTypes = {
	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Backhome.defaultProps = {};

export default Backhome;
