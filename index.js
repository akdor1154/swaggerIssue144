const util = require('util');
const Sway = require('sway');

Sway.create({definition: 'spec/swagger.yaml'})
.then( (sway) => {

	const testOperation = sway.getOperation('/test', 'GET');

	const testData = JSON.stringify({
		a: 123,
		b: 456
	});

	const testResponse = {
        statusCode: 200,
        body: testData,
        headers: {
        	'Content-Type': 'application/json'
        }
	};

	const result = testOperation.validateResponse(testResponse);

	console.log(util.inspect(result, {colors: true, depth: Infinity}));
})