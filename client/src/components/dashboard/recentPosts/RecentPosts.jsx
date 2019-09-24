import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Textarea from 'react-textarea-autosize';

import './recentPosts.scss';

const RecentPosts = ({ post, id, editPost }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(post);

  const onClick = () => {
    setEdit(!edit);
    const data = { id, post: text }
    if(edit && (text !== post)) return editPost(data);
  }

  const onChange = e => {
    setText(e.target.value)
  }
  
  return(
    <div className='recent-posts post p-2'>
      <div className='row no-gutters'>
        <div className='col-9'>
          <div className='edit'>
            {console.log(id)}
            {
              !edit ? 
              <p className='mb-0'>{post}</p> :
              <Textarea minRows={1} name='textarea' onChange={e => onChange(e)} value={text} />
            }
          </div>
        </div>
        <div className='col-3 wrapper'>
          <div className='buttons'>
            <div className='btn-edit'>
              <i className={!edit ? 'fas fa-pen' : 'fas fa-check'} onClick={onClick}></i>
            </div>
            <div className='btn-delete'>
              <i className='far fa-times-circle'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

RecentPosts.propTypes = {
  post: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  editPost: PropTypes.func.isRequired
}

export default RecentPosts;