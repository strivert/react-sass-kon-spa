import React, {Component} from 'react';
import './SearchBox.scss';
import UserButton from 'components/base/UserButton'

class SearchBox extends Component {
  state = {
    recorderOpen: true
  }

  render = () => {
    const { onChange, onClick, defaultUrl, disabled, openRecorder} = this.props;
    const { recorderOpen } = this.state
    return (
      <div className="search-panel">
        <div className="search-box">
          <input 
            type="text"
            placeholder="Add any video URL, or just drag a video file here..."
            name="search-input"
            onChange={onChange}
            ref={input => this.input = input}
          />
          <UserButton disabled={disabled} text="Make Magic" type="search" onClick={evt => onClick(this.input.value)} />
        </div>

        <div className="dotted_curved_line">
        </div>

        <div className="search-brief">
          <div className="video-ques">
            Don't have a video?
          </div>
          <div className="video-circle"></div>
          <div className="yourself-ques">
            <span>record</span> yourself
          </div>
          <div className="yourself-here" onClick={openRecorder}>
            here
          </div>
        </div>

      </div>
    );
  }
};

export default SearchBox;
