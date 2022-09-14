import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/UserNavBar";
import { getPhotos, searchPhotos } from "../../store/reducers/photos_reducer";

const SearchResultsPage = () => {
    const { query } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchPhotos(query));
    }, [])

    const photos = useSelector(getPhotos);

    return (
        <>
            <NavBar/>
        </>
    )
}

export default SearchResultsPage;