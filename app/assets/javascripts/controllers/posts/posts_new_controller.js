App.PostsNewController = Ember.ObjectController.extend({
	actions: {
		submit: function(post) {
			post.save();
			this.transitionToRoute('posts');
			return
		}
	}
});