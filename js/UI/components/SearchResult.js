var React = require('react');

var SearchResult = React.createClass({

	render: function(){
		return(
			<div className="panel panel-default">
				<div className="panel-body">
					<div className="row">
						<h5><span className="restaurant-name">{this.props.result.name}</span></h5>
					</div>
					<div className="row">
						<span className="restaurant-description">{this.props.result.descriptions}</span>
					</div>
					<div className="row">
						<span className="restaurant-type">{this.props.result.restaurantType}</span>
					</div>
					<div className="row">
						<span className="restaurant-phone">{this.props.result.phonenumber}</span>
					</div>
					<div className="row">
						<span className="restaurant-location">{this.props.result.location}</span>
					</div> 
					<div className="row"> </div>
				</div>
				
			</div>
			)
	}
});

module.exports = SearchResult;