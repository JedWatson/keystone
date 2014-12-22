var _ = require('underscore'),
	React = require('react'),
	Field = require('../field'),
	Note = require('../../components/note');

module.exports = Field.create({

	supports: {
		focusTarget: 'password'
	},
	
	getInitialState: function() {
		return {
			passwordIsSet: this.props.value ? true : false,
			showChangeUI: this.props.mode === 'initial' ? true : false,
			password: '',
			confirm: ''
		};
	},
	
	componentDidUpdate: function() {
		if (this._focusAfterUpdate) {
			this._focusAfterUpdate = false;
			this.refs.password.getDOMNode().focus();
		}
	},
	
	valueChanged: function(which, event) {
		this.setState(_.object([which, event.target.value]));
		if (which === 'password') {
			this.props.onChange({
				path: this.props.path,
				value: event.target.value
			});
		}
	},
	
	showChangeUI: function() {
		this._focusAfterUpdate = true;
		this.setState({
			showChangeUI: true
		});
	},
	
	renderValue: function() {
		return <div className="field-value">{this.props.value ? "password set" : "password not set"}</div>;
	},
	
	renderField: function() {
		return this.state.showChangeUI ? this.renderFields() : this.renderChangeButton();
	},
	
	renderFields: function() {
		return (
			<div className="form-row">
				<div className="col-sm-6">
					<input type="password" name={this.props.path} placeholder='New password' ref="password" value={this.props.value.first} onChange={this.valueChanged.bind(this, 'password')} autoComplete="off" className="form-control" />
				</div>
				<div className="col-sm-6">
					<input type="password" name={this.props.paths.confirm} placeholder='Confirm new password' ref="confirm" value={this.props.value.last} onChange={this.valueChanged.bind(this, 'confirm')} autoComplete="off" className="form-control" />
				</div>
			</div>
		);
	},
	
	renderChangeButton: function() {
		var label = this.state.passwordIsSet ? "Change Password" : "Set Password";
		return (
			<button type="button" className="btn btn-default" onClick={this.showChangeUI}>{label}</button>
		);
	}
	
});
