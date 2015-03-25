Meteor.subscribe("Members");

Template.team_members.teamMembers= function() {
	return Team.find({},{limit:8});
};
