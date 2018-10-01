import PropTypes from 'prop-types';
import React from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({ _body, _self }) => (
	<section className="row" id={ _self.split('/').slice(-1).join('').replace('.md', '') } tabIndex="0">
		{ _body }
	</section>
);

Partial.propTypes = {
	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Partial.defaultProps = {};

export default Partial;
