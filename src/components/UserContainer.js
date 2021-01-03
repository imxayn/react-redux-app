import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers, postUsers} from "../redux/user/userActions";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData.users.length > 0 &&
          userData.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
    console.log(state,'mapStateToProps')
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    postUsers: () => dispatch(postUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
