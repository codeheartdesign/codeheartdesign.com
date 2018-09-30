import PropTypes from 'prop-types';
import React from 'react';


/**
 * The GoldSponsors component
 */
const GoldSponsors = ({ _body, _self }) => (
	<section className="row-m goldSponsors">
		<div className="goldSponsors-content">{ _body }</div>
	</section>
);

GoldSponsors.propTypes = {
	/**
	 * _body: (test)(12)
	 */
	_body: PropTypes.node.isRequired,
};

GoldSponsors.defaultProps = {};

export default GoldSponsors;
