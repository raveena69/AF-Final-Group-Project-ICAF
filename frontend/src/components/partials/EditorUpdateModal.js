import React from 'react'
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateUser } from "../../actions/editorActions";
import { withRouter } from "react-router-dom";
import { toast } from 'react-toastify';
import $ from 'jquery';

import 'react-toastify/dist/ReactToastify.css';

class EditorUpdateModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.record.id,
            firstName: this.props.record.firstName,
            lastName: this.props.record.lastName,
            email: this.props.record.email,
            username: this.props.record.username,
            errors: {},
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.record) {
            this.setState({
                id: nextProps.record.id,
                firstName: nextProps.record.firstName,
                lastName: nextProps.record.lastName,
                email: nextProps.record.email,
                username: nextProps.record.username,
            })
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
        if (nextProps.auth !== undefined
            && nextProps.auth.user !== undefined
            && nextProps.auth.user.data !== undefined
            && nextProps.auth.user.data.message !== undefined
            && nextProps.auth.user.data.success) {
            $('#update-user-modal').modal('hide');
            toast(nextProps.auth.user.data.message, {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    onChange = e => {
        if (e.target.id === 'user-update-firstName') {
            this.setState({ firstName: e.target.value });
        }
        if (e.target.id === 'user-update-lastName') {
            this.setState({ lastName: e.target.value });
        }
        if (e.target.id === 'user-update-email') {
            this.setState({ email: e.target.value });
        }
        if (e.target.id === 'user-update-username') {
            this.setState({ username: e.target.value });
        }
        if (e.target.id === 'user-update-password') {
            this.setState({ password: e.target.value });
        }
    };

    onUserUpdate = e => {
        e.preventDefault();
        const newUser = {
            _id: this.state.id,
            firstName: this.state.firstName,
            email: this.state.email,
            lastName: this.state.lastName,
            username: this.state.username,
            password: this.state.password,
            errors: {},
        };
        this.props.updateUser(newUser);
    };

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="modal fade" id="update-user-modal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Update Editor</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form noValidate onSubmit={this.onUserUpdate} id="update-user">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.id}
                                        id="user-update-id"
                                        type="text"
                                        className="d-none"/>
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <label htmlFor="firstName">First Name</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.firstName}
                                                id="user-update-firstName"
                                                type="text"
                                                error={errors.firstName}
                                                className={classnames("form-control", {
                                                    invalid: errors.firstName
                                                })}/>
                                            <span className="text-danger">{errors.firstName}</span>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <label htmlFor="lastName">Last Name</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.lastName}
                                                id="user-update-lastName"
                                                type="text"
                                                error={errors.lastName}
                                                className={classnames("form-control", {
                                                    invalid: errors.lastName
                                                })}/>
                                            <span className="text-danger">{errors.lastName}</span>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.email}
                                                error={errors.email}
                                                id="user-update-email"
                                                type="email"
                                                className={classnames("form-control", {
                                                    invalid: errors.email
                                                })}
                                            />
                                            <span className="text-danger">{errors.email}</span>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <label htmlFor="username">Username</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.username}
                                                error={errors.username}
                                                id="user-update-username"
                                                type="email"
                                                className={classnames("form-control", {
                                                    invalid: errors.username
                                                })}
                                            />
                                            <span className="text-danger">{errors.username}</span>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <label htmlFor="password">Password</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                data-reset-input={true}
                                                autoComplete={''}
                                                onChange={this.onChange}
                                                error={errors.password}
                                                id="user-update-password"
                                                type="password"
                                                className={classnames("form-control", {
                                                    invalid: errors.password
                                                })}
                                            />
                                            <span className="text-danger">{errors.password}</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button
                                    form="update-user"
                                    type="submit"
                                    className="btn btn-primary">
                                    Update Editor
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

EditorUpdateModal.propTypes = {
    updateUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { updateUser }
)(withRouter(EditorUpdateModal));
