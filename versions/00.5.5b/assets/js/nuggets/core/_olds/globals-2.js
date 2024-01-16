/*	Date: 2022.09.01
	Modified: 2023.12.05
	Creator: Loïc Béard

	Nuggets - 2023 - all rights reserved
	https://nuggets.cooking/

/**/	





const CreateNode = ($node, $type) => {
	let _node = document.createElement($node);
	Object.assign(_node, { type: $type } ).setAttribute('data-id','nuggets');
	return _node;
}; 


const CreateJSNode = ($src) => Object.assign(CreateNode('script', 'text/javascript'), { src: $src });



const Query = ($element, $selector, ...$datasets) => $element.querySelector([$selector, ...$datasets.map(data => `[${data[0]}='${data[1]}']`)].filter((value, index, self) => index === self.indexOf(value)).join(''));
