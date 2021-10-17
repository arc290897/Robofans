import React from 'react';

const SearchBox=({searchChange})=>{
	return(
		<input type="search" placeholder="Search Robots" className="br4" onChange={searchChange}/>
		)
}

export default SearchBox;