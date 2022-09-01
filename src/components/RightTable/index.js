import React from 'react';
import './rightTbl.css';
const uniqid = require('uniqid');

export default function RightTable( props ){
    
    const renderCols = () => {
        let content = []
       
        if( props.data !== undefined && props.data.length >= 1 ){
            props.data.map((item, index) => {
                let imageUrl = item.image
                content.push( 
                    <div className='col'  key={ uniqid() } style={{backgroundImage: `url(${imageUrl})`}} onClick={  () => {props.handleClick(index)} } >
                        <div className='breed-name-holder'>{ item.breed_name.charAt(0).toUpperCase() + item.breed_name.slice(1) }</div>
                        <div className='likes-holder'>Likes : { item.likes }</div>
                    </div> 
                )
            })
        }

        return content
    }

    return (
        <div className='dog-columns right mt-5'>
            <div>
                <div className='title'>Dog Columns</div>
                { renderCols() }
            </div>
        </div>
    )

}