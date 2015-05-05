var React = require('react');

var Columns = {
	text: require('../../fields/types/text/TextColumn'),
	boolean: require('../../fields/types/boolean/BooleanColumn'),
	password: require('../../fields/types/password/PasswordColumn'),
	location: require('../../fields/types/location/LocationColumn'),
	select: require('../../fields/types/select/SelectColumn'),
	money: require('../../fields/types/money/MoneyColumn'),
	url: require('../../fields/types/url/UrlColumn'),
	datetime: require('../../fields/types/datetime/DateTimeColumn'),
	code: require('../../fields/types/code/CodeColumn'),
	markdown: require('../../fields/types/markdown/MarkdownColumn'),
	html: require('../../fields/types/html/HtmlColumn'),
	embedly: require('../../fields/types/embedly/EmbedlyColumn'),
	textarea: require('../../fields/types/textarea/TextareaColumn'),
	cloudinaryimage: require('../../fields/types/cloudinaryimage/CloudinaryimageColumn')
};

Columns.__unrecognised__ = Columns.text;
module.exports = Columns;