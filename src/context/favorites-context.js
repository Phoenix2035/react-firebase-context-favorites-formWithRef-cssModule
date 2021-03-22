import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});


export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([])

    const addFavoriteHandler = favoriteMeetup => {
        setUserFavorites(prev => {
            return prev.concat(favoriteMeetup)
        })
    }

    const removeFavoriteHandler = meetupId => {
        setUserFavorites(prev => {
            return prev.filter(item => item.id !== meetupId)
        })
    }

    const itemIsFavoriteHandler = meetupId => {
        return userFavorites.find(item => item.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;

