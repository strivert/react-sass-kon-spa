import React from 'react';
import './SearchBox.scss';
import UserButton from 'components/base/UserButton'

const SearchBox = (props) => {
  const { onChange, onClick } = props;
  return (
    <div className="search-panel">
      <div className="search-box">
        <input 
          type="text"
          placeholder="Add any video URL, or just drag a video file here..."
          name="search-input"
          onChange={onChange}
        />
        <UserButton text="Make Magic" type="search" onClick={onClick} />
      </div>

      <div className="dotted_curved_line">
      </div>

      <div className="search-brief">
        <div className="video-ques">
          Don't have a video?
        </div>
        <div className="video-circle">
        </div>
        <div className="yourself-ques">
          <span>record</span> yourself
        </div>
        <div className="yourself-here">
          here
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
