import React from 'react'
import Card from './Card.js'

const CardList=({robots})=>{
	
	return(
		
					robots.map((user,ind)=>{
					return (<Card 
						key={user.id} 
						id={robots[ind].id} 
						name={robots[ind].name} 
						email={robots[ind].email}/>)
				})

		)
}
export default CardList;