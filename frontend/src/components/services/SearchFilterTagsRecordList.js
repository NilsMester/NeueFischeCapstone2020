import {useMemo} from 'react';

export function SearchFilterTagsRecordList({searchTerm, userTagList}){
    return useMemo(() => {
        return userTagList
            .map(tagItem=>tagItem._id)
            .filter(includeSearchTerm(searchTerm));
    }, [searchTerm, userTagList])
}

function includeSearchTerm (searchTerm) {
    return (tag) => !searchTerm && tag.toLowerCase().includes(searchTerm.toLowerCase());

}