import React, { Component } from 'react';
import SearchBox from 'components/landing/SearchBox';

class SearchBoxContainer extends Component {  
  onChange = () => {
  }

  onClick = () => {
    // alert('Clicked');
  }

  render() {
    const { onChange, onClick } = this;

    return (
      <SearchBox
        onChange={onChange}
        onClick={onClick}
      />
    );
  }
}

export default SearchBoxContainer;
