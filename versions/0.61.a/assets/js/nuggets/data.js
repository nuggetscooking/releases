/*!
 * nuggets JavaScript Library v3.7.0
 * https://nuggets.cooking/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://nuggets.cooking/license
 *
 * Date: 2024-07-24
 */



const N = {
	core: ['globals', 'nuggets', 'storyline'],
	customization: ['CustomCSS', 'GoogleFonts', 'Caption', 'CaptionBBCode', 'Lightbox'],
	features: ['Keys', 'LocalTrack', 'Timer'],
	webobjects: ['WebObject']
};

const webObjectFolder = window.location.href.match(/\w{11}(?!.*\w{11})/).toString();
const fullPath = `story_content/WebObjects/${webObjectFolder}/assets`;


