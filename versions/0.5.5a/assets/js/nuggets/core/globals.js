
const CreateNode = ($node) => {
	const _node = document.createElement($node);
	_node.setAttribute('data-id','nuggets');
	return _node;
}

const CreateTypedNode = ($node, $type) => Object.assign(CreateNode($node), { type: $type } ); 

const CreateJSNode = ($src) => Object.assign(CreateTypedNode('script', 'text/javascript'), { src: $src });

const Query = ($element, $selector, ...$datasets) => $element.querySelector([$selector, ...$datasets.map(data => `[${data[0]}='${data[1]}']`)].filter((value, index, self) => index === self.indexOf(value)).join(''));
