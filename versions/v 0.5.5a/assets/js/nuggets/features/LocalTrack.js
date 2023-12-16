
const LocalTrack = {

	parse: ($variable,$result,$str) => {

		let _data = GetVarFromSTL($variable).match(/[-+?|~&]*(\w+|\d+)/g),
			_name = _data.shift(), 
			_variable = Number(GetVarFromSTL(_name)), 
			_return = _variable;

		const _match = ($value,$reg) => null !== $value.match($reg);

		_data.forEach( ($value) => {

			const _binary = (($value) => {

				const _value = Number( null===$value.match(/[a-zA-Z]/) ? $value : GetVarFromSTL($value));
				return null === $value.charAt(0).match(/[-+?]/) ? _value : 1<<_value;

			})($value.substring(1));

			if ( _match( $value, /[+|]+/ )) { _variable |= _binary; } else 
			if ( _match( $value, /[-~]+/ )) { _variable &= ~_binary; } else 
			if ( _match( $value, /[?&]+/ )) { _return &= _binary; }
			
		} );


		const _sendToSTL = ($var, $val) => {
			UpdateVarInSTL($var, $val);
			if (!$str) { UpdateVarInSTL($var + $str, $val.toString(2)) };
		};

		if ( _match(_data.toString(),/[-~+|]+/) ) _sendToSTL(_name, _variable);
		if ( _match(_data.toString(),/[?&]+/) ) _sendToSTL($result, _return);

		_sendToSTL($variable, '');

	}
};
