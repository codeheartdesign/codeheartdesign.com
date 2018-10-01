import PropTypes from 'prop-types';
import React from 'react';


/**
 * The footer component
 */
const Footer = ({ _body }) => (
	<footer role="banner">
		<svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 69" version="1">
			<g fill="none" fillRule="evenodd">
				<g fill="#FC63B3" transform="translate(2 5)">
					<rect className="l b l1" width="5" height="5" x="12"/>
					<rect className="l b l1" width="5" height="5" x="6" y="6"/>
					<rect className="l b l1" width="5" height="5" y="12"/>
					<rect className="l b l2" width="5" height="5" x="18"/>
					<rect className="l l2" width="5" height="5" x="12" y="6"/>
					<rect className="l l2" width="5" height="5" x="6" y="12"/>
					<rect className="l b l2" width="5" height="5" y="18"/>
					<rect className="l l3" width="5" height="5" x="18" y="6"/>
					<rect className="l l3" width="5" height="5" x="12" y="12"/>
					<rect className="l l3" width="5" height="5" x="6" y="18"/>
					<rect className="l b l3" width="5" height="5" y="24"/>
					<rect className="l b l4" width="5" height="5" x="24" y="6"/>
					<rect className="l l4" width="5" height="5" x="18" y="12"/>
					<rect className="l l4" width="5" height="5" x="12" y="18"/>
					<rect className="l l4" width="5" height="5" x="6" y="24"/>
					<rect className="l b l5" width="5" height="5" x="30" y="6"/>
					<rect className="l l5" width="5" height="5" x="24" y="12"/>
					<rect className="l l5" width="5" height="5" x="18" y="18"/>
					<rect className="l l5" width="5" height="5" x="12" y="24"/>
					<rect className="l b l5" width="5" height="5" x="6" y="30"/>
					<rect className="l b l6" width="5" height="5" x="42"/>
					<rect className="l b l6" width="5" height="5" x="36" y="6"/>
					<rect className="l l6" width="5" height="5" x="30" y="12"/>
					<rect className="l l6" width="5" height="5" x="24" y="18"/>
					<rect className="l l6" width="5" height="5" x="18" y="24"/>
					<rect className="l l6" width="5" height="5" x="12" y="30"/>
					<rect className="l b l7" width="5" height="5" x="48"/>
					<rect className="l l7" width="5" height="5" x="42" y="6"/>
					<rect className="l l7" width="5" height="5" x="36" y="12"/>
					<rect className="l l7" width="5" height="5" x="30" y="18"/>
					<rect className="l l7" width="5" height="5" x="24" y="24"/>
					<rect className="l l7" width="5" height="5" x="18" y="30"/>
					<rect className="l b l7" width="5" height="5" x="12" y="36"/>
					<rect className="l l8" width="5" height="5" x="48" y="6"/>
					<rect className="l l8" width="5" height="5" x="42" y="12"/>
					<rect className="l l8" width="5" height="5" x="36" y="18"/>
					<rect className="l l8" width="5" height="5" x="30" y="24"/>
					<rect className="l l8" width="5" height="5" x="24" y="30"/>
					<rect className="l l8" width="5" height="5" x="18" y="36"/>
					<rect className="l b l9" width="5" height="5" x="54" y="6"/>
					<rect className="l l9" width="5" height="5" x="48" y="12"/>
					<rect className="l l9" width="5" height="5" x="42" y="18"/>
					<rect className="l l9" width="5" height="5" x="36" y="24"/>
					<rect className="l l9" width="5" height="5" x="30" y="30"/>
					<rect className="l l9" width="5" height="5" x="24" y="36"/>
					<rect className="l b l9" width="5" height="5" x="18" y="42"/>
					<rect className="l l10" width="5" height="5" x="54" y="12"/>
					<rect className="l l10" width="5" height="5" x="48" y="18"/>
					<rect className="l l10" width="5" height="5" x="42" y="24"/>
					<rect className="l l10" width="5" height="5" x="36" y="30"/>
					<rect className="l l10" width="5" height="5" x="30" y="36"/>
					<rect className="l l10" width="5" height="5" x="24" y="42"/>
					<rect className="l b l11" width="5" height="5" x="60" y="12"/>
					<rect className="l l11" width="5" height="5" x="54" y="18"/>
					<rect className="l l11" width="5" height="5" x="48" y="24"/>
					<rect className="l l11" width="5" height="5" x="42" y="30"/>
					<rect className="l l11" width="5" height="5" x="36" y="36"/>
					<rect className="l l11" width="5" height="5" x="30" y="42"/>
					<rect className="l b l11" width="5" height="5" x="24" y="48"/>
					<rect className="l b l12" width="5" height="5" x="60" y="18"/>
					<rect className="l l12" width="5" height="5" x="54" y="24"/>
					<rect className="l l12" width="5" height="5" x="48" y="30"/>
					<rect className="l l12" width="5" height="5" x="42" y="36"/>
					<rect className="l l12" width="5" height="5" x="36" y="42"/>
					<rect className="l l12" width="5" height="5" x="30" y="48"/>
					<rect className="l b l13" width="5" height="5" x="60" y="24"/>
					<rect className="l b l13" width="5" height="5" x="54" y="30"/>
					<rect className="l b l13" width="5" height="5" x="48" y="36"/>
					<rect className="l b l13" width="5" height="5" x="42" y="42"/>
					<rect className="l b l13" width="5" height="5" x="36" y="48"/>
					<rect className="l b l13" width="5" height="5" x="30" y="54"/>
				</g>
			</g>
		</svg>
		{ _body }
	</footer>
);

Footer.propTypes = {
	/**
	 * _body: (text)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Footer.defaultProps = {};

export default Footer;
