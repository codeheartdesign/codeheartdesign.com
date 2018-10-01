import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Tickets component
 */
const Tickets = ({ headline, tickets, _parseMD, _self }) => (
	<Fragment>
		<h3 className="row-h contentHeadline" id={ _self.split('/').slice(-1).join('').replace('.md', '') } tabIndex="0">{ headline }</h3>
		<ul className="row list content gridgap">
			{
				tickets.map( ( ticket, i ) =>
					<li className="row-h content gridgap ticket-item" key={ i }>
						<div className="tickets-text">
							<h4 className="tickets-headline">{ ticket.headline }</h4>
							<div className="tickets-subline">{ _parseMD( ticket.subline ) }</div>
						</div>
						<div className="tickets-links">
							<a className="btn" href={ ticket.link }>{ ticket.btn }</a>
						</div>
					</li>
				)
			}
		</ul>
	</Fragment>
);

Tickets.propTypes = {
	/**
	 * headline: Tickets
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * tickets:
	 *   - headline: Conference ticket
	 *     subline: |
	 *       Description about the ticket
	 *       with markdown support
	 *     btn: Buy now – $10
	 *     link: https://google.com
	 *   - headline: Workshop + Conference ticket
	 *     subline: |
	 *       Description about the ticket
	 *       with markdown support
	 *     btn: Buy now – $260
	 *     link: https://google.com
	 */
	tickets: PropTypes.arrayOf(
		PropTypes.shape({
			headline: PropTypes.string.isRequired,
			subline: PropTypes.string.isRequired,
			btn: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired,
		})
	).isRequired,
};

Tickets.defaultProps = {};

export default Tickets;
