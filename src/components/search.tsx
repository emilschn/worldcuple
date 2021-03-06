import React, { RefObject } from 'react';
import searchList from '../fixtures/search';

type SearchProps = {
  onClick: Function
};
type SearchState = {
  inputText: string
};

class Search extends React.Component<SearchProps, SearchState> {
    state: SearchState = {
        inputText: ''
    };
    inputRef: RefObject<HTMLDivElement> = React.createRef();

    renderSearchBox() {
        return(
            <input type="text" value={this.state.inputText} onChange={ (e) => this.handleChange(e) } onFocus={ this.handleFocus() } placeholder="Search for a player" />
        )
    }

    renderSearchList() {
        const listItems = searchList.map((item, index) => {
            if (item.toLowerCase().indexOf(this.state.inputText.toLowerCase()) > -1) {
                return(
                    <li key={index} onClick={ (e) => this.handleClick(item) }>
                        {item}
                    </li>
                )
            }
        })

        if (this.state.inputText !== '') {
            return(
                <ul className="search-list">{ listItems }</ul>
            )
        }
        return(
            <div></div>
        )
    }

    render() {
        return(
            <div className="search" ref={ this.inputRef }>
                { this.renderSearchBox() }
                { this.renderSearchList() }
            </div>
        )
    }

    handleChange(event: any) {
        this.setState({
            inputText: event.target.value
        });
    }

    handleClick(playerName: string) {
        this.props.onClick(playerName);
        this.setState({
            inputText: ''
        });
    }

    handleFocus() {
        this.inputRef.current?.scrollIntoView();
        return undefined;
    }
}

export default Search;