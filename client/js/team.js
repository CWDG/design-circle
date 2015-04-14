Meteor.subscribe("Members");
Meteor.subscribe("images")

Template.team_members.helpers({
	teamMembers: function() {
	return Team.find({},{limit:8});
  },
	getTeamMemberImage: function(imageId) {
		return Images.findOne(imageId).url();
	}
});
