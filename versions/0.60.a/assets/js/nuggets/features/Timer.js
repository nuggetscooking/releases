
const Timer = {

	format:null, // set from  STL
	increment: true, // set from  STL

	intervalId: null,

	initialTime: 0,
	currentTime: 0,

	reset: ($initialTime = 0, $increment, $format) => { // ...args
		Timer.pause();
		
		Timer.initialTime = $initialTime;
		Timer.currentTime = $initialTime;
		
		Timer.increment =   ( false===$increment || true===$increment ) 
								? $increment 
								: ( false===Timer.increment || true===Timer.increment ) 
									? Timer.increment 
									: true;

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
		Timer.setTime(  Timer.increment 
			? ++Timer.currentTime 
			: --Timer.currentTime );
	},

	setTime: $newTime => {
		UpdateVarInSTL('ElapseTime',$newTime);

		const format = $t => $t.toString().padStart(2,'0'); 

		Timer.format.match( /\w+/g ).forEach($unit => {
			switch ($unit) {
				case 'hh': UpdateVarInSTL('TimeHour',format( ~~($newTime / 3600) )); break;
				case 'mm': UpdateVarInSTL('TimeMinute',format( ~~($newTime / 60) )); break;
				case 'ss': UpdateVarInSTL('TimeSecond',format( ~~($newTime) % 60 )); break;
			}
		});
	}

};



