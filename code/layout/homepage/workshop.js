import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Section component
 */
const Section = ({ headline, banner, name, workshop, abstract, link, _body, _self, _relativeURL, _ID }) => (
	<Fragment>
		<h3 className="row-h contentHeadline" id={ _self.split('/').slice(-1).join('').replace('.md', '') } tabIndex="0">{ headline }</h3>
		<div className={`row-h workshop content section section-${ headline.toLowerCase().replace(' ', '-') }`}>
			<div className="section-banner" style={{ backgroundImage: `url("${ _relativeURL( `/assets/img/${ banner }`, _ID ) }")` }}></div>
			<div className="workshop-name">{ name }</div>
			<h4 className="workshop-workshop">{ workshop }</h4>
			<div className="workshop-abstract">{ abstract }</div>
			{ _body }
			<div>
				<a className="btn btn--muted js-scroll" href={ link.url }>{ link.name }</a>
			</div>
		</div>
	</Fragment>
);

Section.propTypes = {
	/**
	 * headline: Section
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * banner: image.jpg
	 */
	banner: PropTypes.string.isRequired,

	/**
	 * name: Sharon Steed
	 */
	name: PropTypes.string.isRequired,

	/**
	 * workshop: Communicating with Empathy
	 */
	workshop: PropTypes.string.isRequired,

	/**
	 * abstract: |
	 *  Teaching developers and designers the behaviors needed to be effective communicators and optimal collaborators.
	 */
	abstract: PropTypes.string.isRequired,

	/**
	 * link:
	 *   url: "#tickets"
	 *   name: Get tickets
	 */
	link: PropTypes.shape({
		url: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	}).isRequired,

	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Section.defaultProps = {};

export default Section;
