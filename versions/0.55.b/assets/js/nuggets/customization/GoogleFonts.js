
const GoogleFont = { 
	
	createLinkNode: ($rel,$src) => Object.assign(document.createElement("link"),{ rel:$rel, href:$src } ),

	initiatize: () => {
		if ( null===Query(document,'link', ['rel','preconnect']) ) { 
			Query(document,"head").appendChild(GoogleFont.createLinkNode('preconnect',"https://fonts.googleapis.com"));
			Query(document,"head").appendChild(GoogleFont.createLinkNode('preconnect',"https://fonts.gstatic.com")).setAttribute("crossorigin", "");
		}
	},

	parseURL: ($family) => `https://fonts.googleapis.com/css2?family=${$family}&display=swap`,

	link: ($family) => {
		GoogleFont.initiatize();
		Query(document,"head").appendChild(createLinkNode('stylesheet',GoogleFont.parseURL($family)));
	},


	import: ($family) => {
		CustomCSS.newRule(`@import url('${ GoogleFont.parseURL($family) }');`);
	}

}


