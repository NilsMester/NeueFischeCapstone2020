import {useMemo} from 'react';

export function SearchFilterTagList({searchTerm, userTagList, recordData}){
    return useMemo(() => {
        return userTagList
            .map(tagItem=>tagItem._id)
            .filter(tag=>!recordData.tagList.includes(tag))
            .filter(includeSearchTerm(searchTerm));
    }, [searchTerm, userTagList, recordData.tagList])
}

function includeSearchTerm (searchTerm) {
    return (tag) => !searchTerm && tag.toLowerCase().includes(searchTerm.toLowerCase());

}