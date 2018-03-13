import React from 'react';
import Responsive from 'components/common/Responsive';
import './PageTemplate.scss';

const PageTemplate = ({ header, footer, children }) => {
  return (
    <div className="page-template">
      {header}
      <main>
        <Responsive>
          {children}
        </Responsive>
      </main>
      {footer}
    </div>
  );
};

export default PageTemplate;
