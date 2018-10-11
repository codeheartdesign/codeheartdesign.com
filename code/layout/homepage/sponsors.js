import { SVGSprite } from './../helper';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Sponsors component
 */
const Sponsors = ({ headline, gold, silver, bronze, community, organizers, _relativeURL, _ID, _parseMD, _self }) => {

	const Sponsor = ( { name, url, svg, blurb }, i ) => (
		<li className="row-h content gridgap sponsortier-item" key={ i } itemProp="sponsor" itemType="http://schema.org/Organization">
			<meta itemProp="name" content={ name }/>
			<div className="sponsortier-logo">
				<a href={ url } target="_blank" rel="noopener noreferrer" itemProp="url">
					<svg role="img" title={ name }>
						<use xlinkHref={ SVGSprite( svg, _relativeURL, _ID ) }/>
					</svg>
				</a>
			</div>
			<div className="sponsortier-blurb">
				{ _parseMD( blurb ) }
				<p><a href={ url } target="_blank" rel="noopener noreferrer">{ url }</a></p>
			</div>
		</li>
	);

	return (
		<Fragment>
			<h3 className="row-h contentHeadline" id={ _self.split('/').slice(-1).join('').replace('.md', '') } tabIndex="0">{ headline }</h3>
			<ul className="row list content gridgap sponsortier">
				{
					gold.map( ( sponsor, i ) => Sponsor( sponsor, i ) )
				}
			</ul>
			<ul className="row list content gridgap sponsortier">
				{
					silver.map( ( sponsor, i ) => Sponsor( sponsor, i ) )
				}
			</ul>
			<ul className="row list content gridgap sponsortier">
				{
					bronze.map( ( sponsor, i ) => Sponsor( sponsor, i ) )
				}
			</ul>
			<ul className="row list content gridgap sponsortier">
				{
					community.map( ( sponsor, i ) => Sponsor( sponsor, i ) )
				}
			</ul>
			<ul className="row list content gridgap sponsortier">
				{
					organizers.map( ( sponsor, i ) => Sponsor( sponsor, i ) )
				}
			</ul>
		</Fragment>
	);
};

const sponsorType = PropTypes.arrayOf(
	PropTypes.shape({
		name: PropTypes.string.isRequired,
		svg: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		blurb: PropTypes.string,
	})
);

Sponsors.propTypes = {
	/**
	 * headline: Sponsors
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * gold:
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     url: https://www.atlassian.com/
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     url: https://www.atlassian.com/
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     url: https://www.atlassian.com/
	 *     blurb: Tools for teams, from startup to enterprise
	 */
	gold: sponsorType,

	/**
	 * silver:
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     url: https://www.atlassian.com/
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     url: https://www.atlassian.com/
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     url: https://www.atlassian.com/
	 *     blurb: Tools for teams, from startup to enterprise
	 */
	silver: sponsorType,

	/**
	 * bronze:
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     url: https://www.atlassian.com/
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     url: https://www.atlassian.com/
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     url: https://www.atlassian.com/
	 *     blurb: Tools for teams, from startup to enterprise
	 */
	bronze: sponsorType,

	/**
	 * community:
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     url: https://www.atlassian.com/
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     url: https://www.atlassian.com/
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     url: https://www.atlassian.com/
	 *     blurb: Tools for teams, from startup to enterprise
	 */
	community: sponsorType,

	/**
	 * organizers:
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     url: https://www.atlassian.com/
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     url: https://www.atlassian.com/
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     url: https://www.atlassian.com/
	 *     blurb: Tools for teams, from startup to enterprise
	 */
	organizers: sponsorType,
};

Sponsors.defaultProps = {};

export default Sponsors;
