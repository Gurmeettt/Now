import React from 'react';
import PropTypes from 'prop-types';
import MemberComponent from './MemberComponent';
import members from '../data/members.json';
import Moment from 'react-moment';
import './messageStyles.css';

function MessageComponent(props) {
  const message = props.individualMessage;
  const messageDate = props.individualMessageTimestamp;
  const sentBy = props.userId;
  const memberInfo = members.find(({ id }) => id === sentBy);
  return (
    <div className="messageAndMember">
      <MemberComponent memberInfo={memberInfo} />
      <div className="message">
        <div className="message-text">{message}</div>
        <div className="message-date">
          <Moment format="Do MMMM YYYY, HH:mm">{messageDate}</Moment>
        </div>
      </div>
      <div className="email">{memberInfo.email}</div>
    </div>
  );
}

MessageComponent.propTypes = {
  individualMessage: PropTypes.string.isRequired,
  individualMessageTimestamp: PropTypes.string.isRequired,
  // individualMessageTimestamp: PropTypes.instanceOf(Date).isRequired,
  userId: PropTypes.string.isRequired,
};

export default MessageComponent;
