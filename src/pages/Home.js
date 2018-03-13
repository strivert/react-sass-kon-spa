import React from 'react';
import PageTemplate from 'components/base/PageTemplate';
import HeaderContainer from 'containers/base/HeaderContainer';
import Footer from 'components/base/Footer';
import PageIntro from 'components/landing/PageIntro';
import SearchBoxContainer from 'containers/landing/SearchBoxContainer';
import TransFlowContainer from 'containers/landing/TransFlowContainer';
import IntroContainer from 'containers/landing/IntroContainer';

const Home = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer />}
      footer={<Footer />}
    >
      <PageIntro />
      <SearchBoxContainer />
      <TransFlowContainer />
      <IntroContainer />
    </PageTemplate>
  );
};

export default Home;

