//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(32)
  const [awayScore, setAwayScore] = useState(32)
  const [sec, setSec] = useState(59)
  const [min, setMin] = useState(9)
  setTimeout(() => {
    setSec(sec - 1)
    if (sec === 0) {
      setSec(59)
      setMin(min - 1)
    } else if (min === 0) {
      setMin(9)
      setSec(59)
    }
  }, 1000);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{min}:{sec}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={e => setHomeScore(homeScore + 6)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={e => setHomeScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={e => setAwayScore(awayScore + 6)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={e => setAwayScore(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
