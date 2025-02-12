import React from 'react';

function ScoreCard({ data }) {
  const { matchHeader, scoreCard } = data;

  return (
    <div className="scorecard-container">
      <div className="match-details">
        <h2>{matchHeader.matchDescription}</h2>
        <p className="series-name">
          {matchHeader.seriesName} - {matchHeader.year}
        </p>
        <p className="status">{matchHeader.status}</p>
      </div>

      <div className="innings-section">
        {scoreCard.map((inning) => (
          <div className="innings" key={inning.inningsId}>
            <div className="innings-header">
              <h3>
                Innings {inning.inningsId} - {inning.batTeamDetails.batTeamName}
              </h3>
              <div className="score-info">
                <span className="runs">{inning.scoreDetails.runs}</span>/
                <span className="wickets">{inning.scoreDetails.wickets}</span> in{' '}
                <span className="overs">{inning.scoreDetails.overs}</span> overs
              </div>
            </div>
            <div className="innings-body">
              <div className="batsmen-section">
                <h4>Batsmen</h4>
                <table className="batsmen-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Runs</th>
                      <th>Balls</th>
                      <th>4s</th>
                      <th>6s</th>
                      <th>SR</th>
                      <th>Dismissal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(inning.batTeamDetails.batsmenData).map((key) => {
                      const batsman = inning.batTeamDetails.batsmenData[key];
                      return (
                        <tr key={batsman.batId}>
                          <td>{batsman.batName}</td>
                          <td>{batsman.runs}</td>
                          <td>{batsman.balls}</td>
                          <td>{batsman.fours}</td>
                          <td>{batsman.sixes}</td>
                          <td>{batsman.strikeRate}</td>
                          <td>{batsman.outDesc}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="bowlers-section">
                <h4>Bowlers</h4>
                <table className="bowlers-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Overs</th>
                      <th>Runs</th>
                      <th>Wickets</th>
                      <th>Economy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(inning.bowlTeamDetails.bowlersData).map((key) => {
                      const bowler = inning.bowlTeamDetails.bowlersData[key];
                      return (
                        <tr key={bowler.bowlerId}>
                          <td>{bowler.bowlName}</td>
                          <td>{bowler.overs}</td>
                          <td>{bowler.runs}</td>
                          <td>{bowler.wickets}</td>
                          <td>{bowler.economy}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="extras">
              <p>
                <strong>Extras: </strong>
                {inning.extrasData.total}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScoreCard;