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
					<li key={ i } className="organiser-item gridgap">
						<img className="organiser-img" src={ _relativeURL( `/assets/img/${ organiser.img }`, _ID ) } alt={ organiser.name }/>
						<div className="organiser-details">
							<p className="organiser-name">{ organiser.name }</p>
							<div className="organiser-company">{ _parseMD( organiser.company ) }</div>
							<div className="organiser-blurb">{ _parseMD( organiser.blurb ) }</div>
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
	 *     company: Atlassian
	 *     blurb: |
	 *       Organiser of [Design System Meetup](https://designsystemmeetup.com)
	 *   - name: Dominik Wilowski
	 *     img: dominik-wilowski.jpg
	 *     company: Thinkmill
	 *     link: https://www.thinkmill.com.au
	 *     blurb: |
	 *       Organiser of [Design System Meetup](https://designsystemmeetup.com)
	 */
	organisers: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			img: PropTypes.string.isRequired,
			company: PropTypes.string.isRequired,
			blurb: PropTypes.string.isRequired,
		})
	).isRequired,
};

Organisers.defaultProps = {};

export default Organisers;
