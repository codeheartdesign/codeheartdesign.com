import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Scripts = ({ _ID, _relativeURL }) => {
	const version = require('../../package.json').version;

	return (
		<Fragment>
			<script src='https://js.tito.io/v1' async/>
			<script type="text/javascript" src={ `https://codeheartdesign.com/assets/js/script.min.js?v${ version }` } async/>
			<script src="https://www.google-analytics.com/analytics.js" async defer/>
		</Fragment>
	);
};

Scripts.propTypes = {};

Scripts.defaultProps = {};

export default Scripts;
