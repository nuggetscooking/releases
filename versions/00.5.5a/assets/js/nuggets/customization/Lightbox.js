

const LightBox = {

	watch: () => {
		storyline.watchLightBox();
		nuggets.addEventListener( STORYLINE_EVENTS.DISPLAY_LIGHTBOX, LightBox.observe );
	},
 
	observer:null,

	observe: function() {
		
		const _observe = function($event) { 			
			const svg = Query(GetLightboxWrapper(),'svg',['data-display-name','SlideBackground']);				
				if ( svg ) {
					LightBox.observer.disconnect();
					LightBox.observer = null;

					svg.setAttribute('style','opacity:0');
				}
		}

		LightBox.observer = new MutationObserver(_observe);
		LightBox.observer.observe(GetLightboxWrapper(),{ childList: true, subtree: true });
	},




	reset: ($params = { background : 'hide', closeButton : 'hide' } ) => { // by default, all elements I dislike :)
		LightBox.watch();

		const _find = ($key) => -1!==Object.keys($params).indexOf($key);

		if ( _find("closeButton") ) { LightBox.resetCloseButton($params.closeButton); }
		if ( _find("background") ) { LightBox.resetBackground($params.background); }
		if ( _find("overlay") ) {}

		if ( _find("size") ) {} // TODO
		if ( _find("position") ) {} // TODO
	},

	// TODO: 'hide' // new SVG image (base64)
	resetCloseButton: () => {
		CustomCSS.newRule("#light-box-close { display: none !important }"); 
	},

	// TODO: 'hide' 
	resetBackground: (...args) => {
		CustomCSS.newRule("#light-box-wrapper { background: none !important }");
		CustomCSS.newRule(".lightBoxSlide { background: none !important }");
	},

	// TODO: 'hide' // color
	resetOverlay: (...args) => { 

	},

	// TODO: 
	resetSize: (...args) => { 

	},

	// TODO: 
	resetPosition: (...args) => { 

	}

}
