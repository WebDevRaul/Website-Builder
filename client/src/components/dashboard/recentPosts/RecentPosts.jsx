import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validatePost from '../../utils/validator/dashboard';

import Textarea from 'react-textarea-autosize';

import './recentPosts.scss';

const RecentPosts = ({ post, id, position,  editPost, deletePost }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState(undefined);
  const [row, setRow] = useState(1);

  useEffect(() => {
    setText(post);
  },[post])

  const onClick = () => {
    setEdit(!edit);
    setRow(3);

    const { errors, isValid } = validatePost(text);
    const data = { id, post: text, position }

    if (!isValid) {
      setError(errors.post);
      setEdit(true);
    } else {
      if(edit && (text !== post)) {
        editPost(data);
        setError(undefined);
        setRow(1);
      }
    }
  }

  const onChange = e => {
    setText(e.target.value)
  }

  const onDelete = () => {
    deletePost(id);
  }
  
  return(
    <div className='recent-posts post p-2'>
      {!!error ? <span className='error'>{error}</span> : null}
      
      <div className='row no-gutters'>
        <div className='col-9'>
          <div className='edit'>
            {
              !edit ? 
              <p className='mb-0'>{post}</p> :
              <>
                <Textarea minRows={row} name='textarea' onChange={e => onChange(e)} value={text} />
                <span className={classnames('badge', { 'over': text.length > 50 })}>{text.length}</span>
              </>
            }
          </div>
        </div>
        <div className='col-3 wrapper'>
          <div className='buttons'>
            <div className='btn-edit'>
              <i className={!edit ? 'fas fa-pen' : 'fas fa-check'} onClick={onClick}></i>
            </div>
            <div className='btn-delete'>
              <i className='far fa-times-circle' onClick={onDelete}></i>
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
  editPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired
}

export default RecentPosts;