
const CreateNode = ($node) => {
	const _node = document.createElement($node);
	_node.setAttribute('data-id','nuggets');
	return _node;
}

const CreateTypedNode = ($node, $type) => Object.assign(CreateNode($node), { type: $type } ); 

const CreateJSNode = ($src) => Object.assign(CreateTypedNode('script', 'text/javascript'), { src: $src });

const Query = ($element, $selector, ...$datasets) => $element.querySelector([$selector, ...$datasets.map(data => `[${data[0]}='${data[1]}']`)].filter((value, index, self) => index === self.indexOf(value)).join(''));




const hexToRgb = ($hex) => { 
	const _hex= parseInt($color.replace(/^#/,''), 16);
	return [ ( _hex>>16 )&255, ( _hex>>8 )&255, _hex&255 ]; 
}


const parseDigit = ($time) => {
  var _t = $time.match(/([0-9])\w+/g); 
  return _t.reduceRight( (time,value,index)=> { 
    if(index==_t.length-2) time = time/1000;
    return time+parseFloat(value)*Math.pow(60,(-index+_t.length-2));
  } );
}








// Communication with Storyline player
const GetVarFromSTL = (...args) => GetPlayer().GetVar(...args);
const UpdateVarInSTL = (...args) => GetPlayer().SetVar(...args);


// Target HTML elements in Storyline player
const GetPreso = () => Query(document,'div',['id','preso']);
const GetCanvas = () => Query(document, 'canvas');
const GetSlide = () => Query(document, 'div', ['class', 'slide-container']);

const GetCaptionContainer = () => Query(document, 'div', ['class', 'caption-container']);
const GetCaption = () => Query(GetCaptionContainer(), 'div', ['class^', 'caption']);
const GetCaptionText = () => Query(GetCaption(), 'p');

const GetOverlay = () => Query(document, 'div', ['class','visible-overlay']);
const GetLightboxWrapper = () => Query(document,'div', ['id','light-box-wrapper']);

// TODO : player buttons

const GetLightboxCloseButton = () => Query(document,'button', ['id','light-box-close']);

const GetToggleFullScreenButton = () => Query(document,'button', ['id','full-screen-toggle']);
const GetMenuButton = () => Query(document,'button', ['id','hamburger']);

