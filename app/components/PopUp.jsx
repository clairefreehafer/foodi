import React from 'react';

/** material ui components */
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const PopUp = (props) => {
	/**
	 * inline styles for the pop up to override anything else.
	 * it renders in a funky spot without this.
	 */
	let dialogStyles = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
};

	/**
	 * close button at bottom of pop up, passed as a prop
	 * to the material ui Dialog component
	 */
	const closeButton = <FlatButton
		label="Close"
		primary={true}
		onClick={() => props.handlePopUpClose()}
		style={{color: 'rgb(234, 57, 35)'}}
	/>

	const info = props.restaurantInfo

	/** get the restaurant latitude and longitude for the map */
	const lat = info.geometry.location.lat();
	const lng = info.geometry.location.lng();

	{/* the unfortunate way to style static maps :p */}
	const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDDRqrlHYalYAQtC_fPwZ9Z9JWAKDgD6MM&markers=color:0xEA3923|${lat},${lng}&zoom=15&size=640x300&style=feature:administrative|element:all|visibility:simplified&style=feature:landscape|element:geometry|visibility:simplified|color:0xfcfcfc&style=feature:poi|element:geometry|visibility:simplified|color:0xfcfcfc&style=feature:road.highway|element:geometry|visibility:simplified|color:0xdddddd&style=feature:road.arterial|element:geometry|visibility:simplified|color:0xdddddd&style=feature:road.local|element:geometry|visibility:simplified|color:0xeeeeee&style=feature:water|element:geometry|visibility:simplifeid|color:0xdddddd`

	return (
		<Dialog
			title={info.name}
			open={true}
			actions={closeButton}
			autoScrollBodyContent={true}
			contentStyle={dialogStyles}
			onRequestClose={() => props.handlePopUpClose()}
		>
			{/* map */}
			<img src={mapUrl} style={{marginLeft: '40px', marginRight: '40px'}} />

			{/* shows if restaurant is open, the address, and phone number */}
			<div id="info">
				<div className="info-box">
					<h3>Open Now?</h3> {info.opening_hours.open_now ? <span>Yes</span> : <span>No</span>}
				</div>
				<div className="info-box">
					<h3>Address</h3> {info.formatted_address}
				</div>
				<div className="info-box">
					<h3>Phone</h3> {info.formatted_phone_number}
				</div>
			</div>

			<div id="reviews">
				<h2>Reviews</h2>

				{/* link to leave a review */}
				<h3><a href={`https://search.google.com/local/writereview?placeid=${info.place_id}`} target="_blank">Leave a review <FontIcon className="material-icons" id="open-in-new">open_in_new</FontIcon></a></h3>
				<Divider />

				{/* reviews that have been fetched from google using our getRestaurantInfo action creator */}
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
