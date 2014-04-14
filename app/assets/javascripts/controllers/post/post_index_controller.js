App.PostIndexController = Ember.ObjectController.extend({
	actions: {
		delete: function(post) {
			post.destroyRecord();
			return this.transitionToRoute('posts');
			;
		},
		edit: function(post) {
			return this.transitionToRoute('post.edit');
		}
	}
});