import React from 'react';
import ContentContainer from './content_container';
import SideBar from './side_bar';
import NowTVWebNavigation from '@nowtv/nowtv-web-navigation';

class MainLayout extends React.Component {

	componentDidMount() {
		new NowTVWebNavigation.Navigation(document.querySelector('#global-nav'));
	}

	render() {
		return (
			<div>
				<div className="n-global-nav" id="global-nav"></div>
				<ContentContainer children={this.props.children}/>
			</div>
		);
	}
}

export default MainLayout;

