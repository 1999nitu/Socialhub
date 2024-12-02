import React from 'react';

function MultipleUsers(props) {
  return (
    <div className='user' onClick={() => props.handleUserClick(props.user)}>
      <img src={props.user.images} alt='User Image' width="50px"/>
      <h2 className='user-nme'>{props.user.name}</h2>
    </div>
  );
}


export default MultipleUsers;
