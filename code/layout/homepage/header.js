import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The Header component
 */
const Header = ({ headline, _body }) => (
	<div className="row-c header">
		<h2 className="headline">{ headline }</h2>
		<div className="body">{ _body }</div>
	</div>
);

Header.propTypes = {
	/**
	 * _body: (test)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Header.defaultProps = {};

export default Header;
