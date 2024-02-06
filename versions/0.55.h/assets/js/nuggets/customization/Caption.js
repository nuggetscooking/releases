
const Caption = {


	watch: ($handler) => {
		storyline.watchCaption();
		nuggets.addEventListener( STORYLINE_EVENTS.DISPLAY_CAPTION, $handler );
		nuggets.addEventListener( STORYLINE_EVENTS.CHANGE_CAPTION, $handler );
	}, // TODO: window resize for replacing GetCaptionContainer() with processor # (See CaptionBBCode)


	clearBox: () => {
		CustomCSS.newRule(`
			.caption { 
				margin: 0 !important;
				padding: 0 !important;
			}
			.caption p { 
				margin: 0 !important;
				padding: 0.4em 0.6em 0.1em 0.6em !important;
			}
		`);

		Caption.watch(() => {
			GetCaption().hasAttribute('style') && GetCaption().removeAttribute('style'); 
			GetCaptionText().hasAttribute('style') && GetCaptionText().removeAttribute('style');
		});
	},


	setBackground: ( $color = "#000000", $alpha = 0.6, $blur = 2, $offset = 1 ) => {
		const hexToRgb = (($hex) => { return [ ( $hex>>16 )&255, ( $hex>>8 )&255, $hex&255 ]; })( parseInt($color.replace(/^#/,''), 16) );
		CustomCSS.newRule(`
			.caption p { 
				background: rgba(${[...hexToRgb]},${$alpha}) !important;
				text-shadow: -${$offset}px 0px ${$blur}px rgba(${[...hexToRgb]},${$alpha}),
							${$offset}px 0px ${$blur}px rgba(${[...hexToRgb]},${$alpha}),
							0px -${$offset}px ${$blur}px rgba(${[...hexToRgb]},${$alpha}),
							0px ${$offset}px ${$blur}px rgba(${[...hexToRgb]},${$alpha}) !important;
			}
		`);
	},
	

	setFont: ( $font, $color = 'white', $size = '2em' ) => {
		CustomCSS.newRule(`
			.caption p { 
				font-family: '${$font}';
				color: ${$color};
				text-decoration: none;
				font-weight: normal; 
				font-size: ${$size};
				line-height: 1.1em;
			}
		`);
	}

};
