import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Tickets component
 */
const Tickets = ({ headline, map, _body, _self }) => (
	<Fragment>
		<h3 className="row-h contentHeadline" id={ _self.split('/').slice(-1).join('').replace('.md', '') } tabIndex="0">{ headline }</h3>
		<iframe className="row-h content location-map" src={ map } width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
		<div className="row-h content">{ _body }</div>
	</Fragment>
);

Tickets.propTypes = {
	/**
	 * headline: Tickets
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * map: https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8919158026515!2d151.20123545133035!3d-33.86667627628615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd15f952b780005bf!2sPwC+Australia!5e0!3m2!1sen!2sau!4v1538382187035
	 */
	map: PropTypes.string.isRequired,

	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Tickets.defaultProps = {};

export default Tickets;
