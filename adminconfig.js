AdminConfig = {
	name: 'Design Circle',
	adminEmails: ['fuhr.8@osu.edu',
		'schuller.33@osu.edu',
		'rogman.1@osu.edu',
		'bulgart.1@osu.edu',
		'fuller.412@osu.edu',
		'j3rn@j3rn.com'],
	collections: {
		About: {
			tableColumns:[
				{label: 'Title', name: 'title'},
				{label: 'Date', name: 'date'}]
		},
		Events: {
			tableColumns: [
				{label: 'Title', name: 'title'},
				{label: 'Description', name: 'description'},
				{label: 'Date', name: 'date'}
			]
		},
		BlogPosts: {
			tableColumns: [
				{label: 'Title', name: 'title'},
				{label: 'Subject', name: 'subject'},
				{label: 'Date', name: 'date'},
			]
		},
		Team: {
			tableColumns: [
				{label: 'Name', name: 'name'},
				{label: 'Position', name: 'position'},
				{label: 'Major', name: 'major'},
			]
		}
	},
	autoForm: {
		omitFields: ['date']
	}
};

if (Meteor.isClient) {
	window.AdminConfig = AdminConfig;
}
else if (Meteor.isServer) {
	global.AdminConfig = AdminConfig;
}
