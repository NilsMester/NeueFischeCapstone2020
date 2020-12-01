import {useMemo} from 'react';

export function SearchFilterTagList({searchTerm, userTagList, recordData}){

    const filteredUserTagList = useMemo(() => {
        if (!searchTerm) return userTagList.filter(tag => !recordData.tagList.includes(tag._id)).map(tagItem => tagItem._id);

        return userTagList.filter(tag=>!recordData.tagList.includes(tag._id)).map(tagItem=>tagItem._id).filter((tag) => {
            return (
                tag.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
    }, [searchTerm, userTagList, recordData.tagList])
    return filteredUserTagList;
}