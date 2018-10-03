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
							{
								ticket.disabled
									? <Fragment>
											<span className="btn btn--disabled">{ ticket.btn }</span>
											<span className="muted">{ ticket.disabled }</span>
										</Fragment>
									: <tito-button class="tito-wrapper" event="code-heart-design/2018">{ ticket.btn }</tito-button>
							}
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
	 *     disabled: Available soon
	 *   - headline: Workshop + Conference ticket
	 *     subline: |
	 *       Description about the ticket
	 *       with markdown support
	 *     btn: Buy now – $260
	 */
	tickets: PropTypes.arrayOf(
		PropTypes.shape({
			headline: PropTypes.string.isRequired,
			subline: PropTypes.string.isRequired,
			btn: PropTypes.string.isRequired,
			disabled: PropTypes.string,
		})
	).isRequired,
};

Tickets.defaultProps = {};

export default Tickets;
