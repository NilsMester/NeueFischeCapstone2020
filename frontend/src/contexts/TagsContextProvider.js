import React, {useContext, useEffect, useState} from "react";
import UserContext from "./UserContext";
import TagsContext from "./TagsContext";
import {getUserTags} from "../service/TagsAggregationService";


export default function TagsContextProvider({children}) {
    const {token, tokenIsValid} = useContext(UserContext);
    const [userTagsList, setUserTagsList] = useState([]);

    useEffect(() => {
        tokenIsValid() && getUserTags(token)
            .then(setUserTagsList)
            .catch(console.log);
    }, [token, tokenIsValid]);

    return (
        <TagsContext.Provider value={{userTagsList, setUserTagsList}}>
            {children}
        </TagsContext.Provider>
    )
}