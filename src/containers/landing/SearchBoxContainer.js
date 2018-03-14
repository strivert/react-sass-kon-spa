import React, { Component } from 'react';
import SearchBox from 'components/landing/SearchBox';

class SearchBoxContainer extends Component {  
  onChange = () => {
  }

  render() {
    const { onClick, defaultUrl, disabled, openRecorder } = this.props

    return (
      <SearchBox
        openRecorder={openRecorder}
        defaultUrl={defaultUrl}
        onChange={this.onChange}
        onClick={onClick}
        disabled={disabled}
      />
    );
  }
}

export default SearchBoxContainer;
