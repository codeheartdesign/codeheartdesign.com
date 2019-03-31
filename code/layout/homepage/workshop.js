import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Workshop component
 */
const Workshop = ({ headline, banner, name, workshop, abstract, link, video, _body, _self, _relativeURL, _ID }) => (
	<Fragment>
		<h3 className="row-h contentHeadline" id={ _self.split('/').slice(-1).join('').replace('.md', '') } tabIndex="0">{ headline }</h3>
		<div className={`row-h workshop content section section-${ headline.toLowerCase().replace(' ', '-') }`}>
			<div className="section-banner" style={{ backgroundImage: `url("${ _relativeURL( `/assets/img/${ banner }`, _ID ) }")` }}></div>
			<div className="workshop-name">{ name }</div>
			<h4 className="workshop-workshop">{ workshop }</h4>
			<div className="workshop-abstract">{ abstract }</div>
			{ _body }

			<a className="cta" href={ link[ 1 ].url }>{ link[ 1 ].name }</a>

			<div style={{
				padding: '56.25% 0 0 0',
				marginTop: '2rem',
				position: 'relative',
			}}>
				<iframe src={`${ video }?color=FC63B3&byline=0&portrait=0`} style={{
					position:'absolute',
					top:0,
					left:0,
					width:'100%',
					height:'100%',
				}} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={ true }/>
			</div>
			<script src="https://player.vimeo.com/api/player.js"/>
			<div>
				<a className="btn btn--muted js-scroll" href={ link[ 0 ].url }>{ link[ 0 ].name }</a>
			</div>
		</div>
	</Fragment>
);

Workshop.propTypes = {
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
	link: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	).isRequired,

	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Workshop.defaultProps = {};

export default Workshop;
