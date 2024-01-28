// Todo: STL2WO postMessage argument
console.log("postMessage PROXY for WebObject linked");

const SendToSTL = ($object) => { 
	window.parent.postMessage(Object.assign( $object,{ origin: 'nuggets', event:'WO2STL' }),'*'); 
}