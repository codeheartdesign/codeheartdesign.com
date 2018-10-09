import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Organisers component
 */
const Organisers = ({ headline, organisers, _self, _relativeURL, _ID, _parseMD }) => (
	<Fragment>
		<h3 className="row-h contentHeadline" id={ _self.split('/').slice(-1).join('').replace('.md', '') } tabIndex="0">{ headline }</h3>
		<ul className="row-h organiser gridgap">
			{
				organisers.map( ( organiser, i ) =>
					<li key={ i }>
						<img src={ _relativeURL( `/assets/img/${ organiser.img }`, _ID ) } alt={ organiser.name }/>
						<div className="organiser-details">
							<p>{ organiser.name }</p>
							<p>{ organiser.position } / <a href={ organiser.link } target="_blank" rel="noopener noreferrer">{ organiser.company }</a></p>
							<div>{ _parseMD( organiser.blurb ) }</div>
						</div>
					</li>
				)
			}
		</ul>
	</Fragment>
);

Organisers.propTypes = {
	/**
	 * headline: Organisers
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * organisers:
	 *   - name: Alex Skougarevskaya
	 *     img: alex-skougarevskaya.jpg
	 *     position: Design Team Lead
	 *     company: Atlassian
	 *     link: https://www.atlassian.com
	 *     blurb: |
	 *       Organiser of [Design System Meetup](https://designsystemmeetup.com)
	 *   - name: Dominik Wilowski
	 *     img: dominik-wilowski.jpg
	 *     position: Team Lead
	 *     company: Thinkmill
	 *     link: https://www.thinkmill.com.au
	 *     blurb: |
	 *       Organiser of [Design System Meetup](https://designsystemmeetup.com)
	 */
	organisers: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			img: PropTypes.string.isRequired,
			position: PropTypes.string.isRequired,
			company: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired,
			blurb: PropTypes.string.isRequired,
		})
	).isRequired,
};

Organisers.defaultProps = {};

export default Organisers;
