var React = require('react');
var SearchResults = require('./SearchResults');
var request = require('request');
var Q = require('q');

var SearchUI = React.createClass({
    getInitialState: function(){
        return {
            results: []
        }
    },
    search: function(){

        var url = this.props.url +
            "/indexes/" + 
            this.props.index +
            "/docs?api-version=2016-09-01&search=" +
            encodeURIComponent(this.refs.searchText.getDOMNode().value) + 
            "*";

        var headers = {'api-key': this.props.apikey};

        var options = {
            url: url,
            headers: headers,
            withCredentials: false
        };
        
        request.get(options, this.processResults);
    },
    handleKeyDown: function(evt) {
        if (evt.keyCode == 13 ) {
            return this.search();
        }
    },
    processResults: function(error, response, body){
        var data = JSON.parse(body).value
        this.setState({results: data});
    },
    render: function() {
        var self = this;
        return (
            <div>
                <div className="header">
                    <nav className="navbar navbar-light bg-faded">
                        <h1 className="navbar-brand" href="#"><span className="appname-header">Restaurant Search App</span></h1>
                    </nav>
                </div>
            
                <div className="container">
                <div className="row">
                    <div className="input-group">
                        <input type="text" className="form-control" ref="searchText" onKeyDown={this.handleKeyDown}/>  
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.search}>Search</button>
                        </span>
                    </div>
                    <div className="empty-space">
                        <SearchResults results={this.state.results} />
                    </div> 
                </div>
            </div>
        </div>
        )
    }
});

module.exports = SearchUI;