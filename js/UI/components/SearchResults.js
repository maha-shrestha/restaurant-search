var React = require('react');
var SearchResult = require('./SearchResult');

var SearchResults = React.createClass({
	render: function(){
		return (
			<div className="table-responsive">
				<table className="table table-striped">
					 
					{this.props.results.map(function(result, index){
						return <div class="empty-space"><SearchResult result={result} key={index} index={index + 1}/></div>
					})}
					 
				</table>
			</div>
			)
	}
});

module.exports = SearchResults;