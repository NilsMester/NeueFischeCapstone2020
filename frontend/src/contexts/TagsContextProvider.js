import React, { useContext, useEffect, useState } from 'react';
import UserContext from './UserContext';
import TagsContext from './TagsContext';
import { getUserTags } from '../service/TagsAggregationService';

export default function TagsContextProvider({ children }) {
    const { token, tokenIsValid } = useContext(UserContext);
    const [userTagList, setUserTagList] = useState([]);

    useEffect(() => {
        tokenIsValid() &&
            getUserTags(token).then(setUserTagList).catch(console.log);
    }, [token, tokenIsValid]);

    return (
        <TagsContext.Provider value={{ userTagList, setUserTagList }}>
            {children}
        </TagsContext.Provider>
    );
}
