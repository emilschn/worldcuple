import React from 'react';
import { Player } from '../types/player';
import flags from '../fixtures/flags';

type CluesProps = {
    player: Player,
    clues: number
};

class Clues extends React.Component<CluesProps> {
    renderBirthdate() {
        const dateSplit = this.props.player.birthdate.split('-');
        const birth = new Date(Number(dateSplit[0]), Number(dateSplit[1]) - 1, Number(dateSplit[2]));
        return(
            <div className="field field-birthdate" title="birthday">
                🎂 {birth.toDateString()}
                <span className="field-description">Birthday</span>
            </div>
        )
    }

    renderPosition() {
        if (this.props.clues > 1) {
            let position = '...';
            switch (this.props.player.position) {
                case 'goalkeeper':
                    position = "🧤 GK";
                    break;
                case 'defender':
                    position = "🛡️ DEF";
                    break;
                case 'midfield':
                    position = "🦶 MID";
                    break;
                case 'attacker':
                    position = "🥅 ATT";
                    break;
            }
            return(
                <div className="field field-position" title={ this.props.player.position }>
                    {position}
                    <span className="field-description">Position</span>
                </div>
            )
        }
    }

    renderSelections() {
        if (this.props.clues > 2) {
            return(
                <div className="field field-selections" title="selections">
                    🏅 {this.props.player.selections}
                    <span className="field-description">Nb of selections</span>
                </div>
            )
        }
    }

    renderGoals() {
        if (this.props.clues > 3) {
            return(
                <div className="field field-goals" title="goals in selection">
                    ⚽ {this.props.player.goals}
                    <span className="field-description">Nb of goals with selection</span>
                </div>
            )
        }
    }

    renderNation() {
        if (this.props.clues > 4) {
            return(
                <div className="field field-nation" title="nation">
                    {flags[ this.props.player.nation ]}
                    <span className="field-description">Flag of the nation</span>
                </div>
            )
        }
    }

    renderMainClub() {
        if (this.props.clues > 5) {
            return(
                <div className="field field-club" title="main club">
                    👕 {this.props.player.mainClub}
                    <span className="field-description">Main club</span>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="clues">
                { this.renderBirthdate() }
                { this.renderPosition() }
                { this.renderSelections() }
                { this.renderGoals() }
                { this.renderNation() }
                { this.renderMainClub() }
            </div>
        )
    }
}

export default Clues;