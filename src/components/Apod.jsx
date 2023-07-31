import React, { useState, useEffect } from 'react';
import NasaClient from '../NasaClient';

function Apod() {
  const [apod, setApod] = useState({});

  useEffect(() => {
    NasaClient.getApod().then((apodData) => {
      setApod(apodData.data);
    });
  }, []);

  return (
    <div className="section left-align">
      <h2>Astronomy Picture of the Day</h2>
      {apod && (
        <div className="apod">
          <header>
            {apod.title}
            {' '}
            -
            <i>{apod.date}</i>
          </header>
          <img src={apod.url} id="APOD" alt="APOD" />
          <p>{apod.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default Apod;
