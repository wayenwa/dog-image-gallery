import React, { useState, useEffect } from 'react';
import LeftTable from './LeftTable';
import RightTable from './RightTable';
import { GetData } from '../utilities/GetData'
import { BASE_API } from '../shared/constants'
import DogBreedsService from '../services/DogBreedsService';
import ItemsService from '../services/ItemsService';
import { store } from '../store/DogBreedStore';
import axios from 'axios';
import { Container } from "react-bootstrap";
import { FadeLoader } from 'react-spinners';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

function Main(){
    const [ breeds, setBreeds ]     = useState([]);
    const [ items, setItems ]   = useState([]);
    const [ loading, setLoading ]   = useState(false);


    useEffect(() => {
        initializeData()
        updateState();
        store.subscribe(updateState);
    },[]);
    const updateState = () =>{
        const state = store.getState();
        setBreeds(state.dogBreeds)
    }

    const initializeData = () => {
        setLoading(true)
        GetData('breeds/list/all').then((result) => {
            
            let res =  result.data.message
            
            let data = DogBreedsService.init(res)
            
            // store.dispatch({type: 'init', payload : data})
            setBreeds(data)
            
            let columns = generateImages(ItemsService.init(data))
            
            setItems( columns )

            store.dispatch({type: 'init', payload : data})
        
        })
    }

    const generateImages = function(data) {
        const combineData = (result) => {
            data.map((breed, k) => {
                data[k].image = result[k].data.message
            })
            setLoading(false)
            return setItems(data)
        }

        function getImg(breedName) {
            return axios.get(
                `${BASE_API}breed/${breedName}/images/random`
              );
          }
          
          async function getDogImg() {
            const withImg = await Promise.all(data.map(place => getImg(place.breed_name)));
            
            return withImg;
          }
          
          getDogImg().then(res => combineData(res));
          
    }

    const increaseLikes = (index) => {   
        /**
         * Update Dog Breeds likes count 
         */
        let itemData = items[index];

        var breedIndex = breeds.findIndex(x=> x.breed_name === itemData.breed_name);
       
        setItems( [
            ...items.slice(0,index),
            Object.assign({}, items[index], { likes: items[index].likes + 1 }),
            ...items.slice(index+1)
        ])

        store.dispatch({type: 'increment', payload : breedIndex })
    }
    
    
    return (
        <Container>
            <span className="spinner-holder absolute" style={{position:'fixed',zIndex:'999'}}>
                <FadeLoader
                    style={{display: 'block', margin: '0 auto', borderColor: 'red'}}
                    sizeUnit={"px"}
                    size={10}
                    color={'#ca5d41'}
                    loading={loading}
                />
            </span>
            <LeftTable
                data    = { breeds }
                items   = { items }
            />
            <RightTable
                data    = { items }
                handleClick = { increaseLikes }
            />
        </Container>
    )

}

export default Main;