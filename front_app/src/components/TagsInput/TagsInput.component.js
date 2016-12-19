import React, { PropTypes } from 'react';
import { RIEInput } from 'riek';
import classNames from 'classnames';
import styles from './TagsInput.stylesheet.css';

const TagsInput = ({ currentNotice, onChange }) => {
  
  let tags = currentNotice.tags ? currentNotice.tags : [];
  const addTag = () => {
    onChange('addTag');
  };
  const removeTag = (i) => {
    onChange('removeTag', null, i);
  };
  const changeTagName = (data, i) => {
    onChange('changeTagName', data.tagName, i);
  };
  const validate = (value) => value.length >= 1;
  
  return (
    <div className={classNames(styles.TagsInput, 'twelve wide column ui grid left aligned')}>
      <label className={classNames(styles.TagsInput_label, 'four wide column')}>Tags:</label>
      <div className={classNames(styles.tagsList, 'twelve wide column')}>
        {tags.map((tag, i) => (
          <div key={i}
               className={classNames(styles.tag, 'ui label')}>
            <span data-tooltip="Click to change tag's name"
                  data-position='top left'>
            <RIEInput value={tag}
                      className={styles.tag_textInput}
                      validate={validate}
                      propName='tagName'
                      change={(data) => changeTagName(data, i)}
                      editProps={ { style: { color: '#d8d8d8', backgroundColor: 'transparent', border: 'none',
                        outline: 'none', minWidth: '60px', maxWidth: '70px', maxHeight: '14px' }}}
                      defaultProps={{ style: { backgroundColor: 'none', minWidth: '60px', maxWidth: '70px' }}}/>
            </span>
            <span data-tooltip="Click to delete tag"
                  data-position='top left'>
              <i className={classNames(styles.Tag_icon, 'detail remove icon')}
                 onClick={() => removeTag(i)}>
              </i>
            </span>
          </div>
        ))}
        <span data-tooltip="Click to add new tag"
              data-position='top left'>
          <i className={classNames(styles.tagsList_plusIcon, 'plus big icon')} onClick={addTag}></i>
        </span>
      </div>
    </div>
  );
};

TagsInput.propTypes = {
  currentNotice: PropTypes.object,
  onChange: PropTypes.func
};

export default TagsInput;
