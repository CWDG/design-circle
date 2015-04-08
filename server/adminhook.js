Meteor.startup(function() {
	for (i in AdminConfig.adminEmails) {
		var email = AdminConfig.adminEmails[i];
		console.log(email);
		var user;
		if ((user = Meteor.users.findOne({'emails.address': email}))) {
			console.log(user.profile);
			if (!user.roles) {
				user.roles = [];
				user.roles[0] = 'admin';
			} else if (user.roles.indexOf('admin') == -1) {
				user.roles.push('admin');
			}
			Meteor.users.update({_id: user._id}, {$set: {roles: user.roles}});
		}
	}
});

Accounts.onCreateUser(function(options, user) {
	if (options.profile) {
		user.profile = options.profile;
	}
	console.log(JSON.stringify(user));
	for (i in user.emails) {
		console.log(user.emails[i]);
		if (AdminConfig.adminEmails.indexOf(user.emails[i].address) > -1) {
			user.roles = ["admin"];
		}
	}
	return user;
});
