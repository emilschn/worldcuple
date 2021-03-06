import React from 'react';

type ShareProps = {
  tries: Array<string>,
  playerName: string,
  clues: number
};
type ShareState = {
  buttonLabel: string
}

class Share extends React.Component<ShareProps, ShareState> {
    state: ShareState = {
        buttonLabel: 'Share result'
    };

    render() {
        if (this.props.clues == 7) {
            let sharedString:string = "My daily result on Woldcuple: ";
            const nbTries:number = this.props.tries.length;
            for (let i:number = 0; i < nbTries; i++) {
                switch (this.props.tries[i]) {
                    case '':
                        sharedString += "⬛ ";
                        break;
                    case this.props.playerName:
                        sharedString += "🟩 ";
                        break;
                    default:
                        sharedString += "🟥 ";
                        break;
                }
            }
            return(
                <button onClick={ 
                    () => {
                        if (navigator.share) {
                            navigator.share({
                                title: 'Worldcuple',
                                text: sharedString,
                                url: 'http://john-coffee.ninja/worldcuple/',
                            });
                        } else {
                            this.setState({buttonLabel: 'Result copied!'});
                            navigator.clipboard.writeText( sharedString );
                        }
                    }}>
                    { this.state.buttonLabel }
                </button>
            )
        }
    }
}

export default Share;