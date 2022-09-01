import { COUNT_OF_RANDOM_ITEM } from '../shared/constants'
import { GetData } from '../utilities/GetData';


const DogDataMappingService = {
    init  : function(initialData) {
         /**
         * Convert result from API to array type
         */
        var allDogBreedsArr = Object.keys(initialData);
        
        /**
         * Select Random items from allDogBreedsArr,
         * 2nd parameter signifies number of selected items
         */

        let randomDogBreeds = this.getMultipleRandomBreeds(allDogBreedsArr, COUNT_OF_RANDOM_ITEM)
        
        /**
         * add Object elements to each array select dog breeds,
         * for counter tracking
         */
        let result = this.formatDataStruct(randomDogBreeds)
        
        return result
        
    },getMultipleRandomBreeds  : function(data, num) {
        const shuffled = [...data].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);
    },
    formatDataStruct : function(breeds) {
        let content = []
        /**
         * Initialize data structure
         */
        const obj = breeds.reduce((accumulator, value) => {
            let struc           = {}
            struc.breed_name    = value
            struc.count         = 0
            struc.likes         = 0
            struc.image         = 'test'
            return [...accumulator, struc];
        }, []);
        
        return obj
    },getColumnImages : function(breedName) {
        let content = []
        
        for(let i=0; i < 20; i++){
            GetData('breed/'+breedName+'/images/random').then((result) => {
                content.push(result)
            })
        }

        return content;
    },countApperanceOfBreed : function(collection, needle) {
        
        if(collection !==undefined){
            return collection.reduce(function (n, breed) {
                return n + (breed.breed_name == needle);
            }, 0);
        }else{
            return 0
        }
        
    }
}


export default DogDataMappingService