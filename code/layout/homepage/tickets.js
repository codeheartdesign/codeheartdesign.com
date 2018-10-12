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
					<li className="row-h content gridgap ticket-item" key={ i } itemProp="offers" itemScope itemType="http://schema.org/Offer">
						<meta itemProp="validFrom" content={ ticket.validfrom }/>
						<meta itemProp="validThrough" content={ ticket.validto }/>
						<meta itemProp="price" content={ ticket.price.replace('$', '') }/>
						<link itemProp="availability" href={ ticket.disabled ? 'http://schema.org/SoldOut' : 'http://schema.org/InStock' }/>
						<meta itemProp="priceCurrency" content="AUD"/>
						<div className="tickets-text">
							<h4 className="tickets-headline">{ ticket.headline }</h4>
							<div className="tickets-subline">{ _parseMD( ticket.subline ) }</div>
						</div>
						<div className="tickets-links">
							{
								ticket.disabled
									? <Fragment>
											<span className="btn btn--disabled">{ ticket.btn } &ndash; { ticket.price }</span>
											<span className="muted">{ ticket.disabled }</span>
										</Fragment>
									: <tito-button class="tito-wrapper" event="code-heart-design/2018" releases={ ticket.type }>
											<a className="btn" href={`https://ti.to/code-heart-design/2018/with/${ ticket.type }`} target="_blank" rel="noopener noreferrer" itemProp="url">
												{ ticket.btn } &ndash; { ticket.price }
											</a>
										</tito-button>
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
	 *     btn: Buy now
	 *     price: $10
	 *     type: 1hldv99zgu
	 *     disabled: Available soon
	 *     validfrom: 2018-10-15T09:00
	 *     validto: 2018-11-30T12:00
	 *   - headline: Workshop + Conference ticket
	 *     subline: |
	 *       Description about the ticket
	 *       with markdown support
	 *     btn: Buy now
	 *     price: $270
	 *     type: 1hldv99zgu
	 *     validfrom: 2018-10-15T09:00
	 *     validto: 2018-11-30T12:00
	 */
	tickets: PropTypes.arrayOf(
		PropTypes.shape({
			headline: PropTypes.string.isRequired,
			subline: PropTypes.string.isRequired,
			btn: PropTypes.string.isRequired,
			price: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			disabled: PropTypes.string,
			validfrom: PropTypes.string.isRequired,
			validto: PropTypes.string.isRequired,
		})
	).isRequired,
};

Tickets.defaultProps = {};

export default Tickets;
