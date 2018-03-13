import React from 'react';
import cx from 'classnames';
import './Intro.scss';
import { Link } from 'react-router-dom';
import UserButton from 'components/base/UserButton'

const Intro = () => {
  return (
    <div className="intro-panel">
      <h1>Developers, We have webhooks & endpoints for you</h1>
      <p>
        Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. <br />
        Lorem Ipsum har været  standard fyldtekst siden 1500-tallet, hvor en.
      </p>

      <div className="intros">
        <Link to="/">
          <div className="intro-card">
            <div className="intro-icon-wrapper"></div>
            <div className="intro-name">Create endpoints</div>
            <div className="intro-desc">Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været  standard fyldtekst siden 1500-tallet, hvor en  ukendt trykker sammensatte en tilfældig</div>
          </div>
        </Link>

        <Link to="/">
          <div className="intro-card">
            <div className="intro-icon-wrapper"></div>
            <div className="intro-name">Create endpoints</div>
            <div className="intro-desc">Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været  standard fyldtekst siden 1500-tallet, hvor en  ukendt trykker sammensatte en tilfældig</div>
          </div>
        </Link>

        <Link to="/">
          <div className="intro-card">
            <div className="intro-icon-wrapper"></div>
            <div className="intro-name">Create endpoints</div>
            <div className="intro-desc">Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været  standard fyldtekst siden 1500-tallet, hvor en  ukendt trykker sammensatte en tilfældig</div>
          </div>
        </Link>

        <Link to="/">
          <div className="intro-card">
            <div className="intro-icon-wrapper"></div>
            <div className="intro-name">Create endpoints</div>
            <div className="intro-desc">Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været  standard fyldtekst siden 1500-tallet, hvor en  ukendt trykker sammensatte en tilfældig</div>
          </div>
        </Link>
      </div>

      <div className="create-btn-wrapper">
        <UserButton text="Create an account" onClick={()=>{}} />
      </div>

    </div>
  );
};

export default Intro;
