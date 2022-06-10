import React from 'react';
import { Player } from '../types/player';

type SentenceProps = {
    player: Player,
    clues: number
};

class Answer extends React.Component<SentenceProps> {
    render() {
        if (this.props.clues <= 6) {
            return (
                <div></div>
            )
        }

        return(
            <div className="answer">
                🏆 <a href={ this.props.player.wiki } target="_blank">{ this.props.player.name }</a>
            </div>
        )
    }
}

export default Answer;