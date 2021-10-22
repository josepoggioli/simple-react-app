import React from 'react';
import logo from './logo.svg';
import './App.css';

import { App as SendBirdApp } from 'sendbird-uikit';
import 'sendbird-uikit/dist/index.css';

function App() {
  return (
    <div className="App">
      <SendBirdApp
        appId="10C56778-D849-40D0-B3EA-EB6E550D3DF9"
        userId="josepoggioli"
        nickname="josepoggioli"
      />
    </div>
  );
}

export default App;
