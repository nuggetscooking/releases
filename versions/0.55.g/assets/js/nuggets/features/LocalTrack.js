
const LocalTrack = {

	parse: ($variable,$result,$str) => {
		
		let _data = GetVarFromSTL($variable).match(/[-+?|~&!]*(\w+|\d+)/g),
			_name = _data.shift(), 
			_variable = Number(GetVarFromSTL(_name)), 
			_return = _variable;

		const _match = ($value,$reg) => null !== $value.match($reg);

		_data.forEach( ($operation) => {
			const _binary = (($value) => {
				const _value = Number( null===$value.match(/[a-zA-Z]/) 
									? $value 
									: GetVarFromSTL($value));
				return null === $operation.charAt(0).match(/[-+?]/) 
									? _value 
									: 1<<_value;
			})( $operation.substring(1) );

			if ( _match( $operation, /[+|]+/ )) { _variable |= _binary; } else 
			if ( _match( $operation, /[-~]+/ )) { _variable &= ~_binary; } else 
			if ( _match( $operation, /[?&]+/ )) { _return &= _binary; }
			if ( _match( $operation, /[!]+/ )) { 
				_return = _variable
							.toString(2)
							.replace(new RegExp(Number(!Boolean(Number(_binary))),'g'),'')
							.length;
			}
			
		} ); // End forEach

		const _sendToSTL = ($var, $val) => {
			UpdateVarInSTL($var, $val);
			( $str && $val ) && UpdateVarInSTL($var + $str, $val.toString(2)); 
		};

		_match(_data.toString(),/[-~+|]+/) && _sendToSTL(_name, _variable);
		_match(_data.toString(),/[?&]+/) && _sendToSTL($result, _return);
		_match(_data.toString(),/[!]+/) && UpdateVarInSTL($result, _return);

		_sendToSTL($variable, '');

	}
	
};



