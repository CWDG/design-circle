AdminConfig = {
	name: 'Design Circle',
	adminEmails: ['fuhr.8@osu.edu'],
	collections: {
		Events: {
			tableColumns: [
				{label: 'Title', name: 'title'},
				{label: 'Description', name: 'description'},
				{label: 'Date', name: 'date'}
			]
		}
	}
};

if (Meteor.isClient) {
	window.AdminConfig = AdminConfig;
}
else if (Meteor.isServer) {
	global.AdminConfig = AdminConfig;
}
