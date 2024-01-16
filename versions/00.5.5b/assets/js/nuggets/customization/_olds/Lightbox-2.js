/*
LightBox nuggets : V1.0
Date: 2022.09.01
Creator: Loïc Béard

Nuggets - 2022 - all rights reserved
https://nuggets.cooking/

// need 'CustomCSS.js'

/**/

const LightBox = {

	PresoObserver: null,
	watch: function() {
		if ( null===LightBox.PresoObserver ) {
			LightBox.PresoObserver = new MutationObserver(LightBox.observe);
			LightBox.PresoObserver.observe(document.querySelector("div[id='preso']"),{ childList: true });	
		}
	},


	wrapper: null,
	container:null,
	MainObserver:null,

	observe: function() {
		LightBox.wrapper = document.querySelector("div[id='light-box-wrapper']");
		
		if (null!=LightBox.wrapper) {
			LightBox.container = LightBox.wrapper.querySelector("main")
								.querySelector("div[class='slide-container']")

			// to-do: move this part on "maskInterface"
			var _observe = function() { 
				var _svg = LightBox.container.querySelectorAll("svg");
					_svg[0].remove();
			}

			LightBox.MainObserver = new MutationObserver(_observe);
			LightBox.MainObserver.observe(LightBox.container,{ childList: true });

		} 
	},

	disconnect: function() {
		LightBox.MainObserver.disconnect();
		LightBox.MainObserver = null;
	},



	maskInterface: function(){
		LightBox.watch();

		// CSS Definition to remove backgrounds and the close button
		CustomCSS.newRule("#light-box-close { display: none !important }");

		CustomCSS.newRule("#light-box-wrapper { background: none !important }");
		CustomCSS.newRule(".lightBoxSlide { background: none !important }");
		
	},

	resetSize: function(){
		LightBox.watch();
		//To-do:get position and size of main 'wrapper.slide' and set it to the 'light-box-wrapper.main.slide-container'
	}



}





	