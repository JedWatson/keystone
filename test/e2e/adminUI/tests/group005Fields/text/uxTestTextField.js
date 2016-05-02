var fieldTests = require('../commonFieldTestUtils.js');

module.exports = {
	before: fieldTests.before,
	after: fieldTests.after,
	'Text field can be filled via the initial modal': fieldTests.assertInitialFormUX({
		listName: 'Text',
		inputs: {
			'name': {value: 'Text Field Test 1'},
			'fieldA': {value: 'Some text for field A'},
		}
	}),
	'Text field can be filled via the edit form': fieldTests.assertEditFormUX({
		listName: 'Text',
		inputs: {
			'fieldB': {value: 'Some text for field B'},
		}
	}),
};
