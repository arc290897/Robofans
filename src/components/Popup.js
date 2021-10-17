import React from 'react';
import './popup.css';

const Popup = ({closePopup})=>{
	return(
		<div className="popup--back">
			<div className="popup--content">
				<div className="popup--close" onClick={closePopup}>X
				</div>
				<p className="para">This is a React app where we can get different robots using fetch request.</p>
			</div>
		</div>
		)
}

export default Popup;