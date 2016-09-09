var keystone = require('keystone');

/**
 * Contents Model
 * ==================
 */

var Contents = new keystone.List('Contents', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Contents.add({
	name: { type: String, required: true },
});

Contents.relationship({ ref: 'Post', path: 'categories' });

Contents.register();
