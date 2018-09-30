import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Content component
 *
 * @disable-docs
 */
const Content = ({ _body }) => (
	<div className="row-c">
		{ _body }
	</div>
);

Content.propTypes = {
	/**
	 * _body: (test)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Content.defaultProps = {};

export default Content;