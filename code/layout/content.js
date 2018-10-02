import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Content component
 */
const Content = ({ _body }) => (
	<div className="row-c">
		{ _body }
	</div>
);

Content.propTypes = {
	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Content.defaultProps = {};

export default Content;
