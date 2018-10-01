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

Sponsors.propTypes = {
	/**
	 * headline: Sponsors
	 */
	headline: PropTypes.string.isRequired,
};

Sponsors.defaultProps = {};

export default Sponsors;
