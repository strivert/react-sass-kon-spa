import React from 'react';
import './TransFlow.scss';
import PanelPiece from 'components/landing/PanelPiece'
import TransDescPiece from 'components/landing/TransDescPiece'
import PercentBar from 'components/landing/PercentBar'

const TransFlow = (props) => {
  return (
    <div className="flow-panel">
      <div className="flow-row-panel">
        <PanelPiece
          children = {
            <div className="ratio-panel">
              <div className="ratio">
                16:9
                <div className="ratio-resol">
                  (560x320)
                </div>
              </div>
            </div>
          }
          className="first"
        />
        <div className="flow-desc-panel">
          <TransDescPiece
            title="Transcode for compatibility."
            cnt="Transcode & create all the assets you need in one shot."            
            className="mb"
          />
        </div>
      </div>
      
      <div className="flow-row">
        <TransDescPiece
          title="Thumnails in sequence to preview your content"
          cnt="Transcode & create all the assets you need in one shot."
          className="center"
        />
        <PanelPiece
          children = {
            <div className="spiece-rows">
              <div className="spiece-first">
              </div>
              <div className="spiece-second">
              </div>
              <div className="spiece-third">
              </div>
              <div className="spiece-forth">
              </div>
              <div className="spiece-fiveth">
              </div>
            </div>
          }
          className = "spiece"
        />
        <div className="branch-point">
          <div className="point"></div>
        </div>
      </div>
      
      <div className="flow-row-panel">
        <PanelPiece
          children = {
            <div className="mv-panel">
              <div className="desc">
                make video b&W              
              </div>
              <div className="ratio-resol">
                Then I said, 'But Fran is so <span>handsome</span>' and is                
              </div>
            </div>
          }
        />
          <div className="flow-desc-panel">
            <TransDescPiece
              title="Thumnails in sequence to preview your content"
              cnt="Transcode & create all the assets you need in one shot."
              emph="When our a.i parser think it may have got it wrong, we let you know and allow you to edit blah blah..."
            />            
          </div>

          <div className="branch-point">
            <div className="point"></div>
          </div>
      </div>


      <div className="flow-row spiece">
        <TransDescPiece
          title="Thumnails in sequence to preview your content"
          cnt="Transcode & create all the assets you need in one shot."
          badge={
            <div className="badge-cnt">
              <div className="badge-header">
                This is a 
              </div>
              <div className="badge">
                PRO
              </div>
              <div className="badge-tailer">
                feature,
                <span> find out more</span>
              </div>
            </div>
          }
          className="center spiece"
        />
        <PanelPiece
          children = {
            <div className="spiece-rows">
              <PercentBar color="#e6b242" text="Friendship .10" percent={30} />
              <PercentBar color="#7cbb91" text="Cold .55" percent={50} />
              <PercentBar color="#72bec8" text="Bananas .70" percent={70} />
              <PercentBar color="#c386c6" text="Sqlurtiness .90" percent={100} />
            </div>
          }
          className = "spiece"
        />
        <div className="branch-point last">
          <div className="point"></div>
        </div>
      </div>

      <div className="flow-row-panel">
        <PanelPiece
          className="glow-blue"
          children = {
            <div className="code-panel">
              CODE
            </div>
          }
        />
        <div className="flow-desc-panel last">
          <TransDescPiece
            title="Thumnails in sequence to preview your content"
            cnt="Transcode & create all the assets you need in one shot."
            className="mb last"
          />
        </div>
      </div>
    </div>
  );
};

export default TransFlow;
