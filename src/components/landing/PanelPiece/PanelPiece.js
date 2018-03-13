import React from 'react';
import cx from 'classnames';
import './PanelPiece.scss';

const PanelPiece = ({ children, className }) => (
  <div className={cx('panel-piece', className)}>
    { children }
  </div>
);

export default PanelPiece;
