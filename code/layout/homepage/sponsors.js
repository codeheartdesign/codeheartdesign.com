import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Sponsors component
 */
const Sponsors = ({ headline, gold, silver, bronze, community, organizers, _relativeURL, _ID, _parseMD, _self }) => (
	<Fragment>
		<h3 className="row-h contentHeadline" id={ _self.split('/').slice(-1).join('').replace('.md', '') } tabIndex="0">{ headline }</h3>
		<ul className="row list content gridgap sponsortier">
			{
				gold.map( ( sponsor, i ) =>
					<li className="row-h content gridgap sponsortier-item" key={ i }>
						<svg className="sponsortier-logo" role="img" title={ sponsor.name }>
							<use xlinkHref={ _relativeURL( `assets/svg/sprite.svg#${ sponsor.svg }`, _ID ) }/>
						</svg>
						<div className="sponsortier-blurb">{ _parseMD( sponsor.blurb ) }</div>
					</li>
				)
			}
		</ul>
		<ul className="row list content gridgap sponsortier">
			{
				silver.map( ( sponsor, i ) =>
					<li className="row-h content gridgap sponsortier-item" key={ i }>
						<svg className="sponsortier-logo" role="img" title={ sponsor.name }>
							<use xlinkHref={ _relativeURL( `assets/svg/sprite.svg#${ sponsor.svg }`, _ID ) }/>
						</svg>
						<div className="sponsortier-blurb">{ _parseMD( sponsor.blurb ) }</div>
					</li>
				)
			}
		</ul>
		<ul className="row list content gridgap sponsortier">
			{
				bronze.map( ( sponsor, i ) =>
					<li className="row-h content gridgap sponsortier-item" key={ i }>
						<svg className="sponsortier-logo" role="img" title={ sponsor.name }>
							<use xlinkHref={ _relativeURL( `assets/svg/sprite.svg#${ sponsor.svg }`, _ID ) }/>
						</svg>
						<div className="sponsortier-blurb">{ _parseMD( sponsor.blurb ) }</div>
					</li>
				)
			}
		</ul>
		<ul className="row list content gridgap sponsortier">
			{
				community.map( ( sponsor, i ) =>
					<li className="row-h content gridgap sponsortier-item" key={ i }>
						<svg className="sponsortier-logo" role="img" title={ sponsor.name }>
							<use xlinkHref={ _relativeURL( `assets/svg/sprite.svg#${ sponsor.svg }`, _ID ) }/>
						</svg>
						<div className="sponsortier-blurb">{ _parseMD( sponsor.blurb ) }</div>
					</li>
				)
			}
		</ul>
		<ul className="row list content gridgap sponsortier">
			{
				organizers.map( ( sponsor, i ) =>
					<li className="row-h content gridgap sponsortier-item" key={ i }>
						<svg className="sponsortier-logo" role="img" title={ sponsor.name }>
							<use xlinkHref={ _relativeURL( `assets/svg/sprite.svg#${ sponsor.svg }`, _ID ) }/>
						</svg>
						<div className="sponsortier-blurb">{ _parseMD( sponsor.blurb ) }</div>
					</li>
				)
			}
		</ul>
	</Fragment>
);

const sponsorType = PropTypes.arrayOf(
	PropTypes.shape({
		name: PropTypes.string.isRequired,
		svg: PropTypes.string.isRequired,
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
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     blurb: Tools for teams, from startup to enterprise
	 */
	gold: sponsorType,

	/**
	 * silver:
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     blurb: Tools for teams, from startup to enterprise
	 */
	silver: sponsorType,

	/**
	 * bronze:
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     blurb: Tools for teams, from startup to enterprise
	 */
	bronze: sponsorType,

	/**
	 * community:
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     blurb: Tools for teams, from startup to enterprise
	 */
	community: sponsorType,

	/**
	 * organizers:
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     blurb: Tools for teams, from startup to enterprise
	 *   - name: Atlassian
	 *     svg: atlassian
	 *     blurb: Tools for teams, from startup to enterprise
	 */
	organizers: sponsorType,
};

Sponsors.defaultProps = {};

export default Sponsors;
