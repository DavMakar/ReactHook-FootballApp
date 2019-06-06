import React from 'react'


export default function Loader(){
    return (
		<div className='container'>
			<div className='loader'>
				<img src='https://image.flaticon.com/icons/svg/53/53283.svg' className='ball ball-1' alt='ball' />
				<img src='https://image.flaticon.com/icons/svg/53/53283.svg' className='ball ball-2' alt='ball' />
				<img src='https://image.flaticon.com/icons/svg/53/53283.svg' className='ball ball-3' alt='ball' />
			</div>
		</div>
	);
}