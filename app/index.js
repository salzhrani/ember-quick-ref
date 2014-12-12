// var Promise = require('bluebird');
var fs      = require("fs");
var yaml    = require('js-yaml');


// create json from yml with some tweaking
var doc = yaml.safeLoad(fs.readFileSync('api.yml', 'utf8'));
var items = doc.classitems;
var data = new Array(Object.keys(doc.classitems).length);
var i = 0;
for (var prop in items) {
	var item = items[prop];
	data[i] = {
		id: i,
		type: item.itemtype,
		name: item.name,
		description: item.description,
		deprecated: item.deprecated,
		params: item.params,
		return: item.return,
		class: item.class,
		module: item.module,
		submodule: item.submodule,
		namespace: item.namespace,
		filename: prop,
		short: (item.class.indexOf('Ember.') === 0 ? item.class.substring(6) : (item.class.indexOf('RSVP.') === 0 ? item.class.substring(5) : ''))
	};
	++i;
}
fs.writeFileSync('../web/app/data.js','export default ' + JSON.stringify(data));
