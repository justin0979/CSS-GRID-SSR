import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from 'actions';

class UsersListPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsersList = () =>
    this.props.users.map(user => <li key={user.id}>{user.name}</li>);

  render() {
    return (
      <div className="usersList">
        <Link to={'/'}>See Home Page</Link>
        <h1>Users List:</h1>
        <ul>{this.renderUsersList()}</ul>
      </div>
    );
  }
}

const loadData = store => store.dispatch(fetchUsers());

const mapStateToProps = state => ({
  users: state.users
});

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersListPage)
};
