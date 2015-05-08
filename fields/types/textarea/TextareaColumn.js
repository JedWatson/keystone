var React = require('react');

var TextareaColumn = React.createClass({

	render: function() {
		var value = this.props.data.fields[this.props.col.path];
		return (
			<td>
				<div className='col-value'>{value ? value.substring(0, 500) : null}</div>
			</td>
		);
	}
});

module.exports = TextareaColumn;
