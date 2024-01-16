
const CustomCSS = {

	getSheet: () => {
		let node = Query(document, 'style', ['data-id', 'nuggets']);
		if ( !node ) {
			node = Query(document, 'head').appendChild(CreateTypedNode('style', 'text/css'));
			node.setAttribute('title','nuggets'); // needed for target the good CSSStyleSheet.
		}
		return node;
	},


	newRule: ($definition) => CustomCSS.getSheet().appendChild(document.createTextNode($definition)),


	newFontFace: ($folder, $name, $font, $style, $weight) => {
		const _url = ($ext) => `url('story_content/WebObjects/${$folder}/${$font||$name}.${$ext}')`;

		CustomCSS.newRule(`
			@font-face {
				font-family: '${$name}';
				font-style: ${$style || 'normal'};
				font-weight: ${$weight || 'normal'};
				src: ${_url('eot')},
					local('☺'),
					${_url('woff')} format('woff'),
					${_url('ttf')} format('truetype'),
					${_url('svg')} format('svg');
			}
		`);
	},


	/*
	// TODO: check existing rules from CSSStyleSheet for more clean
	getStyle: (className) => {
		var cssText = "";
		var classes = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
		for (var x = 0; x < classes.length; x++) {        
			if (classes[x].selectorText == className) {
				cssText += classes[x].cssText || classes[x].style.cssText;
			}         
		}
		return cssText;
	} /**/

};


