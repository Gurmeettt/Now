import React from 'react';
import PropTypes from 'prop-types';
import './memberStyles.css';

function MemberComponent(props) {
  const memberName = props.memberInfo.firstName + ' ' + props.memberInfo.lastName;
  const memberAvatar = props.memberInfo.avatar;
  return (
    <div className="member">
      {memberAvatar != null ? <img src={memberAvatar} className="memberImage" alt="unavailable" /> : null}
      <div className="memberName">{memberName}</div>
    </div>
  );
}

MemberComponent.propTypes = {
  memberInfo: PropTypes.array.isRequired,
  lastName: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default MemberComponent;
