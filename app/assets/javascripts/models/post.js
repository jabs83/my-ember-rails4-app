//create model objects, and tell ember what attributes to expect
App.Post = DS.Model.extend({
	title: DS.attr('string'),
	body: DS.attr('string')
});