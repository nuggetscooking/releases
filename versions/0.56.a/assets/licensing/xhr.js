

var _init, _xhr, _div,

	_request = function($url,$fallback) {
		_xhr = new XMLHttpRequest();
		_xhr.open("POST",$url, true); 
		_xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		_xhr.onreadystatechange = function() { 
		    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) 
		    	{ $fallback(_xhr); } }
		_xhr.send(); }, 

	_locale = (function($i18n,$locale) { 
		return $locale.match($i18n[$i18n.findIndex(function($reg) { 
			return $reg.test($locale); } )])||'en'; })([/^fr\b/,/^en\b/],navigator.language),

	_error = function($err,$user,$mod) {
		document.querySelector('body').appendChild(_div=document.createElement('div'));
		_request( 	`nuggets/_assets/errors/${_locale}/${$err}.html`,
					function($xhr) {								
						_div.innerHTML = $xhr.response.replace(/{{nuggetsID}}/g,$user)
														.replace(/{{courseID}}/g,$mod); 
					} ); };


		// 02. waiting for response from STL player
		window.addEventListener('message',_init=function($e) {
			window.removeEventListener('message',_init,false);

			// 03-1. access always granted from local or back-office
			if ('null'===$e.origin || 
				null!==$e.origin.match(/(127.0.0.1|360.articulate.com\/review)/) ) { 
				PostMessage({ lib:L, attr:A });				



			// 03-2. check license		      
		    } else { 
				console.log(`nuggets IDs: ${$e.data.nuggetsID}/${$e.data.courseID}`);
				


				if ( null==$e.data.nuggetsID ) { // no nuggets key set in STL
					PostMessage({ lib:L, attr:A });


				} else {

					var _checkKey = function($key) { return 1; } // -1: unreadable, 0:standalone, 1:connexion
					
					if ( -1==_checkKey($e.data.nuggetsID) ) { // error 'unreadable key'
						_error('unreadable',$e.data.nuggetsID,$e.data.courseID); // 000



					// package Web or SCORM 
					} else if ( 0==_checkKey($e.data.nuggetsID) ) { // key type: standalone
						// check information: 
							// date: valid || error 'expired contractant license' 	011
							// DNS: valide || error 'DNS not allowed'				012

						// can be used as Web export, so courseID not needed
						// also can be used to as SCORM export



					} else if ( 1==_checkKey($e.data.nuggetsID) ) {// key type: connexion 

						// $e.data.courseId: ok || error 'missing course id' 		100
							// => The license key need the module published as SCORM/xAPI
							// mode Web: If you need a Web exploitation, use a standalone key insteed.


						if ( null!==$e.data.courseId ) { 
							var _isLicensed = function() {
								// Request KO : 'Error connexion to Nuggets: return error code'


								// Abonnement KO : 'expired provider license' 		101
								// Abonnement OK à jour
									// check règle de vérifications
										// OK: PostMessage({ lib:L, attr:A });
										// KO: 
											// 'expired contractant license'
											// 'DNS not allowed'

							}
							_request(`${url}?user=${$e.data.nuggetsID}&project=${$e.data.courseID}`,_isLicensed); // TODO: nuggets URL
						}


					} // end else
				} // end else
		    } // end else

		  },false);
		