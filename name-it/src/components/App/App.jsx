import React from 'react';
import Searchbox from '../Searchbox/Searchbox';
import Header from './../Header/Header';
import "./App.css";
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name = require(`@rstacruz/startup-name-generator`);

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            headerText:"Name it!",
            headerExpanded: true,
            suggestedNames: [],
        };
    }
    

    handleInputChange=(inputText)=>{
        name(inputText);
        this.setState({headerExpanded: !inputText, suggestedNames: name(inputText)});
    };

    render(){
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText} />
                <Searchbox handleInputChange={this.handleInputChange}/>
                <ResultsContainer suggestedNames={this.suggestedNames}/>
            </div>
        );
    }

}



export default App;