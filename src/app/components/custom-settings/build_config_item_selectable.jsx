import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class BuildConfigItemSelectable extends React.Component {
    render() {
    	const {environment} = this.props;
			return (
				<div className="col-lg-6">
					<div className="card card-inverse card-primary">
						<div className="card-block">
								<h4 className="card-title">{environment}</h4>
						</div>
					</div>
				</div>
			);
    }
}

BuildConfigItemSelectable.propTypes = {
	environment: PropTypes.string.isRequired,
};

export default connect()(BuildConfigItemSelectable);
