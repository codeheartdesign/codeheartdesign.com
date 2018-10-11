import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Scripts = ({ _ID, _relativeURL }) => (
	<Fragment>
		<script src='https://js.tito.io/v1' async/>
		<script src="https://www.google-analytics.com/analytics.js" async defer/>
		<script type="text/javascript" src={ _relativeURL( `/assets/js/script.min.js`, _ID ) }/>
	</Fragment>
);

Scripts.propTypes = {};

Scripts.defaultProps = {};

export default Scripts;
