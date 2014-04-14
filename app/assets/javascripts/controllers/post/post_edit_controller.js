App.PostEditController = Ember.ObjectController.extend({
	actions: {
		update: function(post) {
			post.save();
			return this.transitionToRoute('post',post);
		},
		cancel: function(post) {
			post.rollback();
			return this.transitionToRoute('post',post);
		}
	}
});