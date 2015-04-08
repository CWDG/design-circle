Meteor.subscribe("Members");

Template.team_members.helpers({
	teamMembers: function() {
	return Team.find({},{limit:8});
}
});

