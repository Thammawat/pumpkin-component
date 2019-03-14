import React, { Component } from 'react'
import { StampCard, RewardCard } from './lib'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StampCard
          cover={
            'https://firebasestorage.googleapis.com/v0/b/mi-crm-staging-pumpkin-admin.appspot.com/o/brands%2FbY6cojM7TMghotvtnXd7%2Fcover?alt=media&token=fbf15948-91ac-4546-9874-d3511118f411'
          }
          logo={
            'https://firebasestorage.googleapis.com/v0/b/mi-crm-staging-pumpkin-admin.appspot.com/o/brands%2FbY6cojM7TMghotvtnXd7%2Flogo?alt=media&token=435361cd-c3bf-4f29-b855-04a74928d24b'
          }
          name={'Potos'}
          description={'Pro Ceramic Provider'}
          point={0}
          textColor={'red'}
          gradientColor={'#000000'}
        />
        <RewardCard
          title={'title'}
          description={'description'}
          point={0}
          primaryColor={'blue'}
        />
      </div>
    )
  }
}

export default App
