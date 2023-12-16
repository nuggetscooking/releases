
const Timer = {

	format:null, // set from  STL
	increment: true, // set from  STL

	intervalId: null,

	initialTime: 0,
	currentTime: 0,

	reset: ($initialTime = 0, $increment, $format) => { 
		Timer.pause();

		Timer.initialTime = $initialTime;
		Timer.currentTime = $initialTime;
		Timer.increment =   ( false===$increment || true===$increment ) ? $increment : 
							( false===Timer.increment || true===Timer.increment ) ? Timer.increment : true;
		Timer.format = $format || Timer.format || 'mm:ss';

		Timer.setTime(Timer.currentTime);
	},

	play: () => {
		if (!Timer.intervalId) {
		Timer.intervalId = setInterval(() => Timer.update(), 1000);
		// Timer.update();
		}
	},

	pause: () => {
		clearInterval(Timer.intervalId);
		Timer.intervalId = null;
	},

	stop: () => {
		Timer.pause();
		Timer.reset(Timer.initialTime,Timer.increment,Timer.format);
	},

	update: () => {
		Timer.setTime(  Timer.increment ? 
		++Timer.currentTime : 
		--Timer.currentTime );
	},

	setTime: $newTime => {
		let h, m, s, _digit = [];

		UpdateVarInSTL("TimeHour", h= ~~($newTime / 3600) );
		UpdateVarInSTL("TimeMinute", m= ~~($newTime / 60) );
		UpdateVarInSTL("TimeSecond", s= ~~($newTime) % 60);

		const format = $t => _digit.push($t.toString().padStart(2,'0'));

		Timer.format.match( /\w+/g ).forEach($unit => {
			switch ($unit) {
				case 'hh': format(h); break;
				case 'mm': format(m); break;
				case 'ss': format(s); break;
			}
		});

		UpdateVarInSTL("TimeDigit", _digit.join( s%2?' ':':' ) );
	}

};



