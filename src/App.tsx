import React, { useState } from 'react';
import moment from 'moment';

import logo from './logo.svg';
import './App.css';

import SelectionBar from "./components/SelectionBar"
import Layout from "./components/Layout"
import ImageContainer from "./components/ImageContainer"

function App() {
  const [startDate, setStartDate] = useState<string>(moment().format("YYYY-MM-DD"));
  const [clicker, setClicker] = useState<number>(0);

  return (
    <div className="App">
      <Layout>
        <h1 className="header-title">Spacestagram</h1>
        <h2 className="subheader-title">Image-sharing from the final frontier</h2>
        <SelectionBar startDate={startDate} clicker={clicker} setStartDate={setStartDate} setClicker={setClicker} />
        <ImageContainer startDate={startDate} clicker={clicker} />
      </Layout>
    </div>
  );
}

export default App;
