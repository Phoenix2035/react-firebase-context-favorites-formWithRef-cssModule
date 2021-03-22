import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../context/favorites-context";

function Favorites() {
    const favoritesCtx = useContext(FavoritesContext);


    let content

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>Tou got no favorites yet. Start adding Some?</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default Favorites
