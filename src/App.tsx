import React from 'react';
import './App.css';
import { Player } from './types/player';
import GetCurrentPlayer from './requests/currentPlayer';
import Clues from './components/clues';
import Answer from './components/answer';
import Search from './components/search';
import Tries from './components/tries';
import Share from './components/share';

type AppProps = {};
type AppState = {
  currentPlayer: Player,
  nbClues: number,
  tries: Array<string>
};

class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    currentPlayer: GetCurrentPlayer(),
    nbClues: 1,
    tries: []
  };

  constructor(props: any) {
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  renderButton() {
    if (this.state.nbClues < 6) {
      return(
        <button onClick={() => this.nextClue()}>NEXT CLUE</button>
      )
    }
    if (this.state.nbClues == 6) {
      return(
        <button onClick={() => this.nextClue()}>RESULT</button>
      )
    }
    return (
      <span></span>
    )
  }

  render() {
    return(
      <div className="app">
        <header className="app-header">
          Worldcuple
        </header>
        <div className="app-description">With 6 clues, find 1 football player that has played during a World Cup</div>
        <Clues player={this.state.currentPlayer} clues={this.state.nbClues} />
        <Search onClick={this.handleSearchClick} />
        { this.renderButton() }
        <Answer player={this.state.currentPlayer} clues={this.state.nbClues} />
        <Tries tries={this.state.tries} playerName={this.state.currentPlayer.name} clues={this.state.nbClues} />
        <Share tries={this.state.tries} playerName={this.state.currentPlayer.name} clues={this.state.nbClues} />
      </div>
    );
  }

  nextClue() {
    this.setState({
      nbClues: this.state.nbClues + 1,
      tries: this.state.tries.concat([''])
    });
  }

  handleSearchClick(playerName:string) {
    let newNbClues = this.state.nbClues + 1;
    if (playerName == this.state.currentPlayer.name) {
      newNbClues = 7;
    }

    this.setState({
      nbClues: newNbClues,
      tries: this.state.tries.concat([playerName])
    });
  }
}

export default App;
