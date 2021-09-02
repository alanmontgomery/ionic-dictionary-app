import { Store } from "pullstate";

const WordStore = new Store({
    
    favourites: [],
    popularWords: [],
    searchCount: 0
});

export default WordStore;

export const addToFavourites = (passedWord) => {

    const currentFavourites = WordStore.getRawState().favourites;
    const added = !currentFavourites.includes(passedWord);

    WordStore.update(s => {

        if (currentFavourites.includes(passedWord)) {
            
            s.favourites = currentFavourites.filter(word => word !== passedWord);
        } else {
            
            s.favourites = [ ...s.favourites, passedWord ];
        }
    });

    return added;
}