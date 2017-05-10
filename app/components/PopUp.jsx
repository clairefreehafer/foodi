import React from 'react';

import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

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

	const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDDRqrlHYalYAQtC_fPwZ9Z9JWAKDgD6MM&markers=${lat},${lng}&zoom=15&size=768x300`

	return (
		<Dialog
			title={info.name}
			open={true}
			actions={closeButton}
			autoScrollBodyContent={true}
			contentStyle={ dialogStyles }
			onRequestClose={() => props.handlePopUpClose()}
		>
			<img src={mapUrl} />

			<div id="info">
				<h3>Open Now?</h3> {info.opening_hours.open_now ? <span>Yes</span> : <span>No</span>}
				<h3>Phone:</h3>
				{info.formatted_phone_number}
			</div>
			<div id="reviews">
				<h2>Reviews</h2>
				<h3><a href={`https://search.google.com/local/writereview?placeid=${info.place_id}`} target="_blank">Leave a review <FontIcon className="material-icons" id="open-in-new">open_in_new</FontIcon></a></h3>
				<Divider />
				{info.reviews.map(review =>(
					<div key={review.time} className="review">
						<h4>{review.author_name} said {review.relative_time_description} with a {review.rating}-star rating:</h4>
						{review.text}
						<Divider />
					</div>
				))}

			</div>
		</Dialog>
	)
};

export default PopUp;
