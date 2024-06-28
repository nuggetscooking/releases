

// Class ?? 
// or slideId change => purge 


const Timestamps = {

	

	purge: () => {
		nuggets.removeEventListener(STORYLINE_EVENTS.SLIDE_CHANGE,Timestamps.purge);
	}, 



	video: null,
	stamps: null,

	register: ($video, $variable, ...$args) => {
		storyline.watchSlide();
		nuggets.addEventListener(STORYLINE_EVENTS.SLIDE_CHANGE,Timestamps.purge);





		Timestamps.video = Query(Query(document,'div',['data-acc-text',$video]),'video');
		Timestamps.variable = $variable;
		Timestamps.stamps = [...$args].map( (stamp) =>  parseDigit(stamp) ); // 


		($video).addEventListener('timeupdate',Timestamps.update);
	},






	update: () => {
		
		

		
	}



};



