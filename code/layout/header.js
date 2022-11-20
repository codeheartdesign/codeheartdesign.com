import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The header component
 */
const Header = ({ text, _ID }) => (
	<Fragment>
		{
			_ID === 'home'
				? null
				: <div className="wrapper gridgap headernav-wrapper">
						<div className="headernav">
							<a href='https://codeheartdesign.com/'>
								{ text }
							</a>
						</div>
					</div>
		}
		<header className="row" role="banner" id="top">
			<meta itemProp="url" content="https://codeheartdesign.com/"/>
			<meta itemProp="image" content="https://codeheartdesign.com/assets/img/og-image.jpg?v2"/>
			<div itemProp="performer" itemScope itemType="http://schema.org/Person">
				<meta itemProp="name" content="Dominik Wilkowski, Alex Skougarevskaya, Jess Telford, Alex Leon"/>
			</div>
			<a className="logo" href="https://codeheartdesign.com/">
				<h1>
					<meta itemProp="name" content="Code Heart Design"/>
					<svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 392 60">
						<title>Code Heart Design</title>
						<g fill="none" fillRule="evenodd">
							<path className="c" fill="#FFF" d="M18.8 49.4C7.4 49.4.3 42 .3 29.7.3 17.3 7.4 10 18.8 10c9.6 0 17 6.2 17.2 15.2h-9.3c-.5-4.5-3.7-7.4-8-7.4-5.2 0-8.5 4.5-8.5 11.8 0 7.5 3.3 12 8.6 12 4.2 0 7.3-2.8 8-7.2H36c-.4 9-7.4 15-17.2 15zm35 0c-9 0-14.7-5.5-14.7-15 0-9.4 5.8-15 14.7-15 9 0 14.7 5.5 14.7 15s-5.7 15-14.7 15zm0-6.9c3.2 0 5.2-2.9 5.2-8.1 0-5.2-2-8.2-5.2-8.2s-5.2 3-5.2 8.2c0 5.2 2 8.1 5.2 8.1zm28.8 6.6c-7.1 0-11.4-5.5-11.4-14.8 0-9.2 4.4-14.7 11.5-14.7 4.2 0 7.4 2.2 8.6 5.5h.2V10.7h9.4v38h-9.3v-5h-.2c-1.2 3.1-4.5 5.4-8.8 5.4zM86.1 27c-3.3 0-5.3 2.8-5.3 7.5 0 4.6 2 7.4 5.3 7.4 3.4 0 5.5-2.8 5.5-7.4 0-4.7-2.1-7.5-5.5-7.5zm32.9-1c-2.9 0-5 2.2-5.2 5.2h10.4C124 28 122 26 119 26zm5.4 13.7h8.4c-.9 6-6.1 9.8-13.6 9.8-9.2 0-14.7-5.6-14.7-14.9s5.6-15.2 14.3-15.2c8.7 0 14.2 5.7 14.2 14.5v2.6h-19.4v.6c0 3.4 2.3 5.8 5.7 5.8 2.5 0 4.4-1.2 5.1-3.2z"/>
							<g className="h" fill="#FC63B3" fillRule="nonzero" transform="translate(143)">
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
								<rect className="l l5" width="5" height="5" x="24" y="12"/>
								<rect className="l l5" width="5" height="5" x="18" y="18"/>
								<rect className="l l5" width="5" height="5" x="12" y="24"/>
								<rect className="l b l5" width="5" height="5" x="6" y="30"/>
								<rect className="l b l6" width="5" height="5" x="42"/>
								<rect className="l b l6" width="5" height="5" x="36" y="6"/>
								<rect className="l b l6" width="5" height="5" x="30" y="12"/>
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
							<path className="c" fill="#FFF" d="M218 11h15.5c11.4 0 18.2 6.7 18.2 18.8 0 12.1-6.8 19.2-18.2 19.2H218V11zm9.7 7.8v22.4h4.5c6.3 0 9.7-3.8 9.7-11.4 0-7.1-3.6-11-9.7-11h-4.5zm41.6 7.5c-2.8 0-5 2.1-5.2 5h10.4c-.1-3-2.2-5-5.2-5zm5.4 13.7h8.5c-1 5.9-6.2 9.7-13.7 9.7-9.2 0-14.6-5.6-14.6-14.9s5.5-15.2 14.3-15.2c8.6 0 14.1 5.7 14.1 14.5v2.6H264v.6c0 3.4 2.3 5.8 5.6 5.8 2.5 0 4.5-1.2 5.1-3.1zm11.8-11c0-5.7 4.9-9.4 12.7-9.4 8 0 12.7 3.9 12.9 9.8h-8.6c-.2-2-1.7-3.5-4.3-3.5-2.2 0-3.8 1-3.8 2.6 0 1.2.9 2 3.6 2.6l5 1c6.2 1.2 8.8 3.5 8.8 7.8 0 6-5.3 9.8-13.2 9.8-8.6 0-13.3-3.8-13.8-9.6h9c.5 2.1 2 3.3 4.8 3.3 2.5 0 4-1 4-2.4 0-1.3-1-2-3.5-2.5l-5-1c-5.7-1.2-8.6-4.1-8.6-8.5zm29.7 20V20.3h9.4V49h-9.4zm4.6-32c-2.5 0-4.6-2-4.6-4.5 0-2.4 2-4.5 4.6-4.5 2.6 0 4.6 2 4.6 4.5s-2 4.5-4.6 4.5zM344.2 42c3.3 0 5.4-2.6 5.4-7.2s-2-7.5-5.4-7.5c-3.4 0-5.4 2.8-5.4 7.5 0 4.6 2 7.2 5.4 7.2zm-.3 18c-8.2 0-13.4-3.8-13.9-9h9c.5 1.7 2.5 2.8 5.1 2.8 3.6 0 5.5-1.9 5.5-4.8v-5.2h-.2c-1.1 3-4.5 5-8.7 5-6.9 0-11.5-5.1-11.5-14.1 0-9.2 4.4-14.7 11.6-14.7a9 9 0 0 1 8.6 5.5h.2v-5h9.3v28.3c0 6.9-6 11.1-15 11.1zM363.4 49V20.3h9.1v5.4h.2c1.5-3.8 4.5-6 8.9-6 6.4 0 10 4 10 10.9V49h-9.4V32.6c0-3.3-1.5-5.2-4.6-5.2-3 0-4.8 2.2-4.8 5.4V49h-9.4z"/>
						</g>
					</svg>
				</h1>
			</a>
			<a className="sr-only" rel="me" href="https://mastodon.social/@wilkowskidom">Mastodon</a>
		</header>
	</Fragment>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
