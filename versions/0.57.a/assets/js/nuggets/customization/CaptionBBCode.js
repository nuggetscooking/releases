
// Regexs
const ALL   = /\[([@#\.|]?[a-zA-Z0-9]{0,}){1,}\]/g,
	MARKS   = /[@#!\.]/g,
	STYLE 	= /@[A-Za-z]{1,}/g,					// [@Comics|@Patrick]
	TRIGGER = /![A-Za-z0-9]{3,}/,				// [!Pause|!Quiz:123]
	ALIGN   = /#[A-Z]{1,2}/,   					// [#DL]
	TIMER 	= /\b\d{2}(?::\d{2})?\.\d{3}\b/; 			// [.100] in milliseconds


const CaptionBBCodes = {

	initialize: () => Caption.watch( CaptionBBCode.parseHandler ),

	parsing: false, 
	parseHandler: ($event) => {
		if ( !CaptionBBCode.parsing ) {
			console.log( "parse BB Code");			
			CaptionBBCode.parsing = true;
			CaptionBBCode.parse(GetCaptionText());
			// delay to avoid endless loops when parsing is too fast for MutationObserver
			setTimeout(() => { CaptionBBCode.parsing = false; }, 10); 

		}
	},


	execute: ($n) => {
		const _parse = ($o,...args) => {
			let _mark, _matching;
			while( null!== (_mark=ALL.exec($n.innerHTML)) ) {
				[...args].forEach(function($r) {
					if (_matching= _mark[0].match(eval($r.toUpperCase()))) { 
						if ( !$o[$r] ) { $o[$r] = Array.from(_matching); } 
						else { $o[$r] = $o[$r].concat(Array.from(_matching)); } } });} //end while
			return $o;
		}
		return (($o)=>{ return _parse($o,'style','trigger'); })({innerHTML:$n.innerHTML.replace(ALL,'')});
	},		


	parse: ($text) => {
		const _args = CaptionBBCode.execute($text);
		$text.innerHTML = _args.innerHTML;

		if ( _args.style && _args.style.length ) {
			$text.setAttribute('class',[..._args.style].join(' ').replace(MARKS,'')); 
		} 

		/*
		var _align = _args.align && _args.align.length ? _args.align : ['#B'], // Only one by caption: '#B', #T'
		_classes = $text.getAttribute('class');
		_fit = ['caption',nuggets.caption.alignment.fit(..._align), ...String(_classes).split(' ')]; 

		console.log( "\tAlign: "+_fit );
		nuggets.storyline.caption.setAttribute('class',_fit.filter($=>'null'!==$).join(' ')); 
		/**/

		
	}

}
