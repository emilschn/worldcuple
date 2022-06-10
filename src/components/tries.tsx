import React from 'react';

type TriesProps = {
  tries: Array<string>,
  playerName: string,
  clues: number
};

class Tries extends React.Component<TriesProps> {
    render() {
        const triesList = this.props.tries.map((item, index) => {
            let className = (item === '') ? 'empty' : 'error';
            if (this.props.playerName == item) {
                className = 'success';
            }
            return(
                <li key={index} className={className}>
                    {item}
                </li>
            )
        })
        const triesRemaining = 7 - triesList.length - 1;
        const triesStr = (triesRemaining > 1) ? 'tries' : 'try';
        let triesRemainingJSX = <div></div>;
        if (triesRemaining > 0 && this.props.clues < 7 ) {
            triesRemainingJSX = <div className="tries-remaining">{ triesRemaining } {triesStr} remaining.</div>
        }
        return(
            <div>
                { triesRemainingJSX }
                <ul className="tries-list">
                    { triesList }
                </ul>
            </div>
        )
    }
}

export default Tries;