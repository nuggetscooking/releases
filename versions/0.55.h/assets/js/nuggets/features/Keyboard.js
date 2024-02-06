
const Keys = {

	type: 'key',
	list: {},
	registerShortcut: (...args) =>  {
		const length = Object.keys(Keys.list).length;
		if ( 0===length ) { 			
			console.log("shortcuts init");
			document.addEventListener('keydown', Keys.onKeyDown);
			document.addEventListener('keyup', Keys.onKeyUp);
		}
		Keys.list[args.shift()] = args.sort();
	},

	keys:[],
	onKeyUp: ($event) => {
		const _index = Keys.keys.indexOf($event[Keys.type]);
		if ( -1!==_index ) { Keys.keys.splice(_index,1); }
	},    

	onKeyDown: ($event) => {
		console.log(`key [${$event[Keys.type]}] pressed`); 
		if (-1===Keys.keys.indexOf($event[Keys.type]) ) { 
			Keys.keys.push($event[Keys.type]);
			Keys.keys.sort();  

			for ( const _shortcut in Keys.list ) {
				if (Keys.list[_shortcut].length===Keys.keys.length &&
					Keys.list[_shortcut].every( ($v,$i) => $v===Keys.keys[$i] ) ) {
						const _value = GetVarFromSTL(_shortcut);
						if ( 'boolean'===typeof _value ) { UpdateVarInSTL(_shortcut,!_value); }
				}
			}
		}
	}


}



