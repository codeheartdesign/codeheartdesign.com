import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Charity component
 */
const Charity = ({ headline, logos, button, _body, _relativeURL, _ID, _self }) => (
	<Fragment>
		<h3 className="row-h contentHeadline" id={ _self.split('/').slice(-1).join('').replace('.md', '') } tabIndex="0">{ headline }</h3>
		<div className="row-h charity">
			<ul className="charity-logos">
				{
					logos.map( ( logo, i ) =>
						<li key={ i }>
							<a href={ logo.link } target="_blank" rel="noopener noreferrer">
								<img src={ _relativeURL( `/assets/img/${ logo.img }`, _ID ) } alt={ logo.name } />
							</a>
						</li>
					)
				}
			</ul>

			{ _body }

			<div>
				<a className="btn btn--muted" href={ button.link } target="_blank" rel="noopener noreferrer">{ button.title }</a>
			</div>
		</div>
	</Fragment>
);

Charity.propTypes = {
	/**
	 * headline: Charity
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * logos:
	 *   - name: National Centre of Indigenous Excellence
	 *     img: NCIE.png
	 *     link: https://ncie.org.au
	 *   - name: Indigenous Digital Excellence
	 *     img: IDX.png
	 *     link: https://ncie.org.au/community-programs/idx/
	 */
	logos: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			img: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired,
		})
	).isRequired,

	/**
	 * button:
	 *   title: Donate now
	 *   link: http://www.givenow.com.au/ncie
	 */
	button: PropTypes.shape({
		title: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
	}).isRequired,

	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Charity.defaultProps = {};

export default Charity;
