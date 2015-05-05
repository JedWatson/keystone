var React = require('react');

var Columns = {
	name: require('../../fields/types/name/NameColumn'),
	email: require('../../fields/types/email/EmailColumn'),
	text: require('../../fields/types/text/TextColumn'),
	boolean: require('../../fields/types/boolean/BooleanColumn'),
	password: require('../../fields/types/password/PasswordColumn'),
	location: require('../../fields/types/location/LocationColumn'),
	select: require('../../fields/types/select/SelectColumn'),
	money: require('../../fields/types/money/MoneyColumn'),
	url: require('../../fields/types/url/UrlColumn'),
	datetime: require('../../fields/types/datetime/DatetimeColumn'),
	date: require('../../fields/types/date/DateColumn'),
	code: require('../../fields/types/code/CodeColumn'),
	markdown: require('../../fields/types/markdown/MarkdownColumn'),
	html: require('../../fields/types/html/HtmlColumn'),
	embedly: require('../../fields/types/embedly/EmbedlyColumn'),
	textarea: require('../../fields/types/textarea/TextareaColumn'),
	cloudinaryimage: require('../../fields/types/cloudinaryimage/CloudinaryimageColumn'),
	cloudinaryimages: require('../../fields/types/cloudinaryimages/CloudinaryimagesColumn'),
	key: require('../../fields/types/key/KeyColumn'),
	s3file: require('../../fields/types/s3file/S3FileColumn')
};

Columns.__unrecognised__ = Columns.text;
module.exports = Columns;