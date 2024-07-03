onmessage = e => {
	console.log('???', e.data.data);
	let body_attrs = [];
	for (let i = 0; i < 100000; i++) {
		body_attrs.push(['1', '2', '3']);
	}
	self.postMessage(body_attrs);
};
