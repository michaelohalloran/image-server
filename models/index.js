const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise; //to use ES6 promises
mongoose.connect('mongodb://localhost/flyers', {
	keepAlive: true,
	useMongoClient: true
});
