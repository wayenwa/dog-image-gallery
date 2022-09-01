

const ItemsService = {
    init  : function(breeds) {
        
        let randomItems = this.getMultipleRandomBreeds(breeds, 100)
        return randomItems
       
    },getMultipleRandomBreeds  : function(data, num) {
       
        let content = [];

        for(let i=0; i < 100; i++){
            const shuffled = [...data].sort(() => 0.5 - Math.random());

            content.push( shuffled.slice(0, 1)[0] )
        }
        
        return content;
    }
}


export default ItemsService