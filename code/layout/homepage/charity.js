import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The Charity component
 */
const Charity = ({ headline, logos, button, _body, _relativeURL, _ID, _self }) => (
	<Fragment>
		<h3 className="row-h contentHeadline" id={ _self.split('/').slice(-1).join('').replace('.md', '') } tabIndex="0">{ headline }</h3>
		<div className="row-h content section charity">
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
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Charity.defaultProps = {};

export default Charity;
