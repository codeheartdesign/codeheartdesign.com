import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The homepage header component
 */
const HomepageHeader = ({ headline, button, startDate, endDate, location, _body }) => (
	<div className="row-c header">
		<h2 className="headline" itemProp="description">{ headline }</h2>
		<meta itemProp="startDate" content={ startDate }/>
		<meta itemProp="endDate" content={ endDate }/>
		<div className="body" itemProp="location" itemScope itemType="http://schema.org/Place">
			<meta itemProp="name" content={ location.name }/>
			<div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
				<link itemProp="url" href={ location.link }/>
				<meta itemProp="streetAddress" content={ location.address }/>
				<div itemProp="hasMap"><link itemProp="sameAs" itemType="https://schema.org/Map" href={ location.map }/></div>
			</div>
			{ _body }
		</div>
		<a className="js-scroll btn btn--lg" href="#tickets">{ button }</a>
	</div>
);

HomepageHeader.propTypes = {
	/**
	 * headline: A mini-conf bringing together designers, design system lovers and front-end developers.
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * button: Get tickets
	 */
	button: PropTypes.string.isRequired,

	/**
	 * startDate: 2018-11-30T12:00
	 */
	startDate: PropTypes.string.isRequired,

	/**
	 * endDate: 2018-11-30T12:00
	 */
	endDate: PropTypes.string.isRequired,

	/**
	 * location:
	 *   name: The Experience Center, PWC
	 *   link: https://www.pwc.com.au
	 *   address: One International Towers, Watermans Quay, Barangaroo NSW 2000
	 *   map: https://maps.google.com/maps?ll=-33.863927,151.201887&z=16&t=m&hl=en-US&gl=AU&mapclient=embed&cid=15086941290643850687
	 */
	location: PropTypes.shape({
		name: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
		address: PropTypes.string.isRequired,
		map: PropTypes.string.isRequired,
	}).isRequired,

	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

HomepageHeader.defaultProps = {};

export default HomepageHeader;
