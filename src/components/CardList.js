import React from 'react';
import Card from './Card';

export const CardList = ({robots})=>{
	const CardComponent=robots.map((user,i)=>{
		return <Card key={i} id={user.id} name={user.name} email={user.email}/>
	})
	return(
		<div>
			
			{/*<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>*/}
			{CardComponent}
			
		</div>
		)
}