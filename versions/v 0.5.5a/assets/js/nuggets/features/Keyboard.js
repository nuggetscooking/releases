
const Keyboard = {

	list: {},
	registerShortcut: (...args) =>  {
		const length = Object.keys(Keyboard.list).length;
		if ( 0===length ) { 			
			console.log("shortcuts init");
			document.addEventListener('keydown', Keyboard.onKeyDown);
			document.addEventListener('keyup', Keyboard.onKeyUp);
		}
		Keyboard.list[args.shift()] = args.sort();
	},

	keys:[],
	onKeyUp: ($event) => {
		const _index = Keyboard.keys.indexOf($event.key);
		if ( -1!==_index ) { Keyboard.keys.splice(_index,1); }
	},    

	onKeyDown: ($event) => {
		console.log("press "+$event.key);
		if (-1===Keyboard.keys.indexOf($event.key) ) { 
			Keyboard.keys.push($event.key);
			Keyboard.keys.sort();  

			for ( const _shortcut in Keyboard.list ) {
				if (Keyboard.list[_shortcut].length===Keyboard.keys.length &&
					Keyboard.list[_shortcut].every( ($v,$i) => $v===Keyboard.keys[$i] ) ) {
						const _value = GetVarFromSTL(_shortcut);
						if ( 'boolean'===typeof _value ) { UpdateVarInSTL(_shortcut,!_value); }
				}
			}
		}
	}


}



