import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ScoreCard from './components/ScoreCard';
import Footer from './components/Footer';

function App() {
  // Set the default match id to "40381" (or any other default value)
  const [matchId, setMatchId] = useState("40381");
  // Local state for the input field (initially the same as matchId)
  const [inputMatchId, setInputMatchId] = useState("40381");
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch match data using the current matchId
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}/hscard`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
            'x-rapidapi-key': ''
          }
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMatchData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Re-fetch data whenever the matchId changes.
  useEffect(() => {
    fetchData();
  }, [matchId]);

  // When the user submits the new match id, update state.
  const handleSubmit = (e) => {
    e.preventDefault();
    setMatchId(inputMatchId);
  };

  return (
    <div className="app">
      <Header />
      <Navigation />
      {/* New Match Selector form */}
      <div className="match-selector">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputMatchId}
            onChange={(e) => setInputMatchId(e.target.value)}
            placeholder="Enter Match ID"
          />
          <button type="submit">Load Match</button>
        </form>
      </div>
      <main className="main-content">
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">Error: {error.message}</div>}
        {matchData && <ScoreCard data={matchData} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;