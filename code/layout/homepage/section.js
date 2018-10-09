import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Section component
 */
const Section = ({ headline, banner, _body, _self, _relativeURL, _ID }) => (
	<Fragment>
		<h3 className="row-h contentHeadline" id={ _self.split('/').slice(-1).join('').replace('.md', '') } tabIndex="0">{ headline }</h3>
		<div className={`row-h content section section-${ headline.toLowerCase().replace(' ', '-') }`}>
			{ banner && <div className="section-banner" style={{ backgroundImage: `url("${ _relativeURL( `/assets/img/${ banner }`, _ID ) }")` }}></div> }
			{ _body }
		</div>
	</Fragment>
);

Section.propTypes = {
	/**
	 * headline: Section
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * banner: Section
	 */
	banner: PropTypes.string,

	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Section.defaultProps = {};

export default Section;
