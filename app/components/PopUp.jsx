import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const PopUp = (props) => {
	var dialogStyles = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
};

	const closeButton = <FlatButton
		label="Close"
		primary={true}
		onClick={() => props.handlePopUpClose()}
	/>

	const info = props.restaurantInfo

	const lat = info.geometry.location.lat();
	const lng = info.geometry.location.lng();

	const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDDRqrlHYalYAQtC_fPwZ9Z9JWAKDgD6MM&markers=${lat},${lng}&zoom=15&size=400x400`

	return (
		<div>
		<Dialog
			title={info.name}
			open={true}
			actions={closeButton}
			autoScrollBodyContent={true}
			contentStyle={ dialogStyles }
			onRequestClose={() => props.handlePopUpClose()}
		>
			<img src={mapUrl} />
			<b>Open Now?</b> {info.opening_hours.open_now ? <span>Yes</span> : <span>No</span>}<br />

			<b>Address:</b><br />gm

			{info.formatted_address}
		</Dialog>
		</div>
	)
};

export default PopUp;
