/*!
 * nuggets JavaScript Library v0.5.5a
 * https://nuggets.cooking/
 *
 * Released under the MIT license
 * https://nuggets.cooking/license
 *
 * Date: 2023-12-15
 */

const N = {
	core: ['globals', 'nuggets', 'storyline'],
	customization: ['CustomCSS', 'GoogleFonts', 'Caption', 'CaptionBBCode', 'Lightbox'],
	features: ['Keyboard', 'LocalTrack', 'Timer'],
	webobjects: ['WebObject']
};

const webObjectFolder = window.location.href.match(/\w{11}(?!.*\w{11})/).toString();
const fullPath = `story_content/WebObjects/${webObjectFolder}/assets`;






