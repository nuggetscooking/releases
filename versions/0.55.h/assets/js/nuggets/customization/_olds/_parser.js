	/*	*******************************
	
			Captions Marks Parser

 		******************************* /**/

	__addNamespace(Caption,'parser',(function() {

		const 	ALL 	= /\[\[([@#\.|]?[a-zA-Z0-9]{0,}){1,}\]\]/g, // \[\[.{0,}\]\]
				MARKS 	= /[@#!\.]/g,
				PROFIL 	= /@[A-Za-z]{1,}/g,		// [[@Comics|@Patrick]]
				ALIGN 	= /#[A-Z]{1,2}/, 		// [[#DL]]
				SPEED 	= /![0-9]{3}/, 			// [[!200]]
				CUEPOINT= /\.[0-9]{1,}/;		// [[.1!200]] [[.2]] [[.3]]

		var	_instance;

		// CONSTRUCTOR
		var CaptionMarks = function() {
			if ( !_instance ) { _instance = this; }
			return _instance;
		};

		CaptionMarks.prototype.toString = function() { return '[Extension CaptionMarks]'; };



		CaptionMarks.prototype.execute = function($node) {
			var	_parse = function($object,...args) {

					var _mark, _count = 0, _lastIndex = 0, // All marks

						// CUEPOINT marks
						_speed = NaN, _words = 0, _caracters = 0, 
						_parseCuepointParameters = function($mark,$speed){
							if ( $speed ) { _speed = $speed[0]; } // .substring(1)
							_caracters += $mark.length; // counts caracters
							_words += $mark .replace(/[.,:;!?]/g,' ') // ponctuations init delay
											.split(' ').length-1; }, // counts words => language with longuest words ?

						_schrink = function(...args) { 
							return [...args].join("|");
											// .replace(MARKS,'');
						},

						_match = function($REGEXP) { 
							var _matching = _mark[0].match(eval($REGEXP)), 
								_type = $REGEXP.toLowerCase();
							
							if (_matching) { 
								if ('CUEPOINT'==$REGEXP) 
									{ _matching.forEach(($cue,$i) => _matching[$i] = _schrink($cue,_speed,_words,_caracters) ); } 
								else { _matching.forEach(($item,$i) => _matching[$i] = _schrink($item) ); }

								if ( !$object[_type] ) { $object[_type] = Array.from(_matching); } 
								else { $object[_type] = $object[_type].concat(Array.from(_matching)); }
							} }; // End _match

					// Parse all caption marks
					while( null!==(_mark=ALL.exec($node.innerHTML) )) {
						var _substring = $node.innerHTML.substring(_lastIndex,_mark.index); // __speed
						_parseCuepointParameters(_substring,_substring.match(SPEED));

						_lastIndex = ALL.lastIndex; 
						[...args].forEach($REGEXP => _match($REGEXP) );
						_count++;
					} // End while
						
					return $object; } // End _parse

			return (function($object) {
				return _parse($object,'PROFIL','ALIGN','CUEPOINT');
			})({ innerHTML: $node.innerHTML.replace(ALL,'') });
		};
 		

 		// Return the only one occurence
		return new CaptionMarks();
	})(), false ); 

 	// Adding second namespace to acces directly Extension
	__addNamespace(document,'CaptionMarks',Caption.parser);

