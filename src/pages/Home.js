import React, { Component } from 'react';
import PageTemplate from 'components/base/PageTemplate';
import HeaderContainer from 'containers/base/HeaderContainer';
import Footer from 'components/base/Footer';
import PageIntro from 'components/landing/PageIntro';
import SearchBoxContainer from 'containers/landing/SearchBoxContainer';
import TransFlowContainer from 'containers/landing/TransFlowContainer';
import IntroContainer from 'containers/landing/IntroContainer';
import VideoRecorder from 'react-video-recorder'
import konch from 'konch-sdk';
konch.config({ key: '1kkcdeFLY15iaQy5ocEtYaZcquEkis3T4Fjaxmy4' })

class Home extends Component {
  state = {
    processing: false,
    recorderOpen: false,
    progress: {},
    collection: {}
  }

  componentDidMount = props => {
    const defaultCollectionId = '0c72f5ae-d554-49a5-8214-4cec4c52d328' 
    this.updateWithLatestCollection(defaultCollectionId)
  }

  updateWithLatestCollection = (id) => {
    console.log('Updating Collection', id)
    konch.collection(id)
          .then(response => {
            const collection = response.result
            if (collection.transcripts) clearInterval(this.poller)
            this.setState({collection})
          })
  }

  startPolling = collectionId => {
    this.updateWithLatestCollection(collectionId)
    this.poller = setInterval(()=>{this.updateWithLatestCollection(collectionId)}, 3000);
  }

  uploadBlob = videoBlob => {
    this.setState({processing: true})
    console.log('Video Blob', videoBlob.size, videoBlob)
    konch.upload(videoBlob, progress=> {
        console.log(progress)
        this.setState({progress})
      })
      .then(response=>{
        console.log(response)
        this.startPolling(response.result)
        this.setState({processing: false})
      })      
      .catch(err => {
        this.setState({processing: false})
        console.error(err)
      })
  }

  onSubmitUrl = url => {
    clearInterval(this.poller)
    this.setState({processing: true})
    konch.process(url)
      .then(response => {
        console.log(response)
        this.setState({processing: false})
        const collectionId = response.result
        this.startPolling(collectionId)
      })
      .catch(error => {
        console.error(error)
        this.setState({processing: false})
      })
  }

  openRecorder = () => {
    this.setState({recorderOpen: true})
  }

  closeRecorder = () => {
    this.setState({recorderOpen: false})
  }

  render = () => {
    const { collection, processing, recorderOpen, progress} = this.state
    return (
      <PageTemplate 
        header={<HeaderContainer />}
        footer={<Footer />}
      >
        <PageIntro /> 
        <SearchBoxContainer 
          openRecorder={this.openRecorder}
          disabled={processing} 
          defaultUrl={collection.source} 
          onClick={this.onSubmitUrl} />
        <TransFlowContainer collection={collection} />
        <IntroContainer />

        { recorderOpen && 
          <div className="videoOverlay">
              <div onClick={this.closeRecorder}>Close</div>
              <VideoRecorder
                  ref={video => this.video = video}
                  onRecordingComplete={(
                    videoBlob,
                    startedAt,
                    thumbnailBlob,
                    duration
                  ) => {
                    this.uploadBlob(videoBlob)
                    this.closeRecorder()
                  }}
                />
                {JSON.stringify(progress)}
          </div>
        }

      </PageTemplate>
    );
  }
};

export default Home;

