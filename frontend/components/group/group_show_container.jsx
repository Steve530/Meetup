import { connect } from "react-redux";
import {
  fetchGroup, 
  createMembership, 
  deleteMembership
} from "../../actions/group_actions";
import GroupShow from "./group_show";
    
// import { getCurrentUser } from "../../actions/session_actions.js";
// import { closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
  // debugger
  return {
    ownProps: ownProps,
    group: state.entities.groups[ownProps.match.params.groupId],
    currentUser_id: state.session.id,
    organizer: state.entities.groups[ownProps.match.params.groupId.organizer],
    // currentUser: selectCurrentUser(state),
  }
  // isLoggedIn: selectIsLoggedIn(state),
};

const mdp = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  
  joinGroup: id => dispatch(createMembership(id)),
  leaveGroup: id => dispatch(deleteMembership(id))
  // getCurrentUser: userId => dispatch(getCurrentUser(userId)),
  
});

export default connect(
  msp,
  mdp
)(GroupShow);
