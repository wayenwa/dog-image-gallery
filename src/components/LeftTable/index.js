import React from 'react';
import DogBreedsService from '../../services/DogBreedsService';
const uniqid = require('uniqid');

export default function LeftTable( props ){

    const renderRows = () => {
        let content = []

        if( props.data.length >= 1 ){
            props.data.map((breed, index) => {
                content.push(
                    <tr key={ uniqid() }>
                        <td key={ uniqid() }>
                            <b>{ breed.breed_name.charAt(0).toUpperCase() + breed.breed_name.slice(1) }</b>
                            <br/>
                            Count : { DogBreedsService.countApperanceOfBreed(props.items, breed.breed_name) }
                            <br/>
                            Likes : { breed.likes }
                        </td>
                    </tr>
                )
            })
        }

        return content
    }

    return (
        <table border="1" className='tbl-breeds mt-5 left'>
            <thead>
                <tr key={ uniqid() }>
                    <th key={ uniqid() }>Breeds Count</th>
                </tr>
            </thead>
            <tbody>
                { renderRows() }
            </tbody>
        </table>
    )

}