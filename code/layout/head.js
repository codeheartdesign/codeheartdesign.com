import PropTypes from 'prop-types';
import React from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The partial component
 *
 * @disable-docs
 */
const Head = ({ pagetitle }) => {
	const version = require('../../package.json').version;
	const Styles = () => Fs.readFileSync( Path.normalize(`${ __dirname }/../css/head.min.css`), 'utf8' );

	return (
		<head>
			<title>{ pagetitle ? pagetitle : 'Code Heart Design Conference Sydney' }</title>
			<meta charSet="utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<meta httpEquiv="x-ua-compatible" content="ie=edge"/>
			<meta name="robots" content="index, follow"/>
			<meta name="author" content="Dominik Wilkowski"/>
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=A07n9dnJnd"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=A07n9dnJnd"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=A07n9dnJnd"/>
			<link rel="manifest" href="/site.webmanifest?v=A07n9dnJnd"/>
			<link rel="mask-icon" href="/safari-pinned-tab.svg?v=A07n9dnJnd" color="#fc63b3"/>
			<meta name="msapplication-TileColor" content="#1a2441"/>
			<link rel="shortcut icon" href="/favicon.ico?v=A07n9dnJnd"/>
			<meta name="msapplication-TileColor" content="#1c2541"/>
			<meta name="theme-color" content="#ff0000"/>
			<meta property="og:image:height" content="1257"/>
			<meta property="og:image:width" content="2400"/>
			<meta property="og:description" content="A mini-conf bringing together designers, design system lovers and front-end developers."/>
			<meta property="og:title" content="Code Heart Design Conference Sydney"/>
			<meta property="og:site_name" content="Code Heart Design Conference Sydney"/>
			<meta property="og:url" content="https://codeheartdesign.com/"/>
			<meta property="og:image" content={`https://codeheartdesign.com/assets/img/og-image.jpg?v${ version }`}/>
			<meta property="og:image:height" content="1257"/>
			<meta property="og:image:width" content="2400"/>
			<meta name="twitter:card" content="summary_large_image"/>
			<meta name="twitter:title" content="Code Heart Design Conference Sydney"/>
			<meta name="twitter:description" content="A mini-conf bringing together designers, design system lovers and front-end developers."/>
			<meta name="twitter:name" content="Code Heart Design Conference Sydney"/>
			<meta name="twitter:image" content={`https://codeheartdesign.com/assets/img/og-image.jpg?v${ version }`}/>
			<style dangerouslySetInnerHTML={{ __html: Styles() }} />
			<link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700i" rel="stylesheet"/>
			<link rel="stylesheet" href={`https://codeheartdesign.com/assets/css/site.min.css?v${ version }`}/>
		</head>
	);
};

Head.propTypes = {};

Head.defaultProps = {};

export default Head;
