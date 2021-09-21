import { useState, useEffect } from 'react';
import moment from 'moment';

import './App.css';

import SelectionBar from './components/SelectionBar';
import Layout from './components/Layout';
import ImageContainer from './components/ImageContainer';

import store from './storage';

import { SHOPIFY_IS_AWESOME, PERSONAL_WEBSITE_URL } from './constants';

function App() {
  const [startDate, setStartDate] = useState<string>(
    moment().format('YYYY-MM-DD')
  );
  const [clicker, setClicker] = useState<number>(0); // The clicker state acts as a counter to detect when the user clicks
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false); // The disabled state of the pull images button

  // Creating a dictionary in local storage to store the like status of each image
  useEffect(() => {
    if (!store.get(SHOPIFY_IS_AWESOME)) store.set(SHOPIFY_IS_AWESOME, {});
  }, []);

  return (
    <div className="App">
      <Layout>
        <header role="banner">
          <h1 className="header-title">Spacestagram</h1>
          <h2 className="subheader-title">
            Image-sharing from{' '}
            <span
              className="easter-egg"
              onClick={() => {
                window.open(PERSONAL_WEBSITE_URL);
              }}
            >
              the final frontier
            </span>
          </h2>
        </header>
        <main role="main">
          <section>
            <SelectionBar
              startDate={startDate}
              clicker={clicker}
              setStartDate={setStartDate}
              setClicker={setClicker}
              buttonDisabled={buttonDisabled}
            />
          </section>
          <section>
            <ImageContainer
              startDate={startDate}
              clicker={clicker}
              setButtonDisabled={setButtonDisabled}
            />
          </section>
        </main>
      </Layout>
    </div>
  );
}

export default App;
