import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const PopUp = (props) => {
	const closeButton = <FlatButton
		label="Close"
		primary={true}
		onClick={() => props.handlePopUpClose()}
	/>

	return (
		<div>
		<Dialog
			title="test"
			open={true}
			actions={closeButton}
			onRequestClose={() => props.handlePopUpClose()}
		>
			test
		</Dialog>
		</div>
	)
};

export default PopUp;
