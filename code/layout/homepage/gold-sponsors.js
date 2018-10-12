import { SVGSprite } from './../helper';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * The GoldSponsors component
 */
const GoldSponsors = ({ sponsors, _relativeURL, _ID }) => (
	<section className="row-m goldSponsors">
		<div className="goldSponsors-content">
			{
				sponsors.map( ( sponsor, i ) =>
					<a key={ i } href={ sponsor.url } target="_blank" rel="noopener noreferrer">
						{ sponsor.img && <img className="goldSponsors-img" src={ sponsor.img } alt={ sponsor.alt }/> }
						{
							sponsor.svg &&
								<svg className="goldSponsors-img" role="img">
									<title>{ sponsor.alt }</title>
									<use xlinkHref={ SVGSprite( `${ sponsor.svg }-centered`, _relativeURL, _ID ) }/>
								</svg>
						}
					</a>
				)
			}
		</div>
	</section>
);

GoldSponsors.propTypes = {
	/**
	 * sponsors:
	 *   - svg: atlassian
	 *     alt: Atlassian Gold Sponsors of Code Heart Design
	 *     url: https://www.atlassian.com/
	 *   - img: https://via.placeholder.com/130x30
	 *     alt: Lendi Gold Sponsors of Code Heart Design
	 *     url: https://www.lendi.com.au/
	 */
	sponsors: PropTypes.arrayOf(
		PropTypes.shape({
			svg: PropTypes.string,
			img: PropTypes.string,
			alt: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
		})
	).isRequired,
};

GoldSponsors.defaultProps = {};

export default GoldSponsors;
