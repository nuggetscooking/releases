

const LightBox = {


	smoothFadeIn: ($start='opacity: 0',$end='opacity: 1',$time=0.25) => {
		CustomCSS.newRule(`
			.visible-overlay { 
				animation: fadeIn-overlay 0.25s; 
			}
			@keyframes fadeIn-overlay {
			  0% { opacity: 0; }
			  100% opacity: 1; }
			}

			#light-box-wrapper { 
				animation: fadeIn-wrapper ${$time}s;
			}

			@keyframes fadeIn-wrapper {
			  0% { ${$start}; }
			  100% { ${$end}; }
			}
		`);
	},



	// Close Button
	removeCloseButton: () => {
		CustomCSS.newRule(`
			#light-box-close { 
				display: none !important;
			}
		`);
	},
	


	removeWhiteBackground: () => {		

		CustomCSS.newRule(`
			#light-box-wrapper,
			.lightBoxSlide {
				background: none !important; 
			}
		`);

		const _remove = () => {
			const _observer = new MutationObserver(($event) => {
				const background = Query(GetLightboxWrapper(),'svg',['data-display-name','SlideBackground']);
				if ( background ) { background.setAttribute('style','opacity:0'); }
				_observer.disconnect(); });
			_observer.observe(GetLightboxWrapper(),{ childList: true, subtree: true });
		}

		storyline.watchLightbox() && nuggets.addEventListener( STORYLINE_EVENTS.OPEN_LIGHTBOX, _remove );

	}



}


