
const initialState = {dogBreeds: []}

export function dogBreedReducer( state = initialState, action ) {
    switch (action.type) {
        case 'init':
            /**
             * Initialize state tree
             */
            return { dogBreeds : action.payload };
        case 'increment':
        
            /**
             * Increase number of likes
             */
            let index = action.payload;
            if(index > -1){
                return { dogBreeds: [
                    ...state.dogBreeds.slice(0,index),
                    Object.assign({}, state.dogBreeds[index], { likes: state.dogBreeds[index].likes + 1 }),
                    ...state.dogBreeds.slice(index+1)
                ]}
            }else{
                return state;
            }
            
        default:
          return state;
    }
}