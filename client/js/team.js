Meteor.subscribe("Members");
Meteor.subscribe("images")

Template.team_members.helpers({
	teamMembers: function() {
	return Team.find({},{limit:8});
  },
	teamImageView: function(picture) {
		return Images.findOne(picture).url();
	}
});
