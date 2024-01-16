
const WebObject = {

	connect : ($src = 'postMessage') => { // Todo: STL2WO postMessage argument
		
		const _frame = Query(document,'iframe');
		const _WO = ( _frame.contentDocument || _frame.contentWindow.document );

		const _inject = ($head) => {

				$head.appendChild(CreateJSNode(`../../../${nuggets.getFolder()}/webobjects/${$src}.js`));
				
				window.addEventListener("message", WebObject.receiveMessage, false);
				// TODO : event STL2WO
				_frame.contentWindow.onbeforeunload = () => WebObject.disconnect(); 
				console.log("injection done");
			}

		const _complete = () => {
				const _head = Query(_WO,"head");

				if ( 0===_head.innerHTML.length ) { // before loading target iframe base
					setTimeout(() => { WebObject.Connect($src); }, 100); 
				} else { 
					_inject(_head); 
				}
			} 

		if( 'complete'==_WO.readyState ) { 
			_complete();
		} else {
			_WO.onreadystatechange = () => { 
				if ('complete'===_WO.readyState) { _complete(); }
			}
		}

	},

	receiveMessage: ($event) => {
		if ('nuggets' !== $event.data.origin) return;		
		
		switch( $event.data.event ) {
			case 'WO2STL': 
				Object.entries($event.data)
					.filter(([key]) => 'origin'!==key && 'event'!==key )
					.forEach(([key, value]) => { UpdateVarInSTL(key,value); });
				break;
			// TODO : case STL2WO
		}
	},

	
	disconnect: () => {
		window.removeEventListener("message", WebObject.receiveMessage); 
	}

}







