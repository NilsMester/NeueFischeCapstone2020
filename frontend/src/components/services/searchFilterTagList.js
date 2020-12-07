
export default function searchFilterTagList(searchTerm, userTagList, recordData){

        return userTagList
            .map(tagItem=>tagItem._id)
            .filter(tag=>!recordData.tagList.includes(tag))
            .filter(includeSearchTerm(searchTerm));

}

function includeSearchTerm (searchTerm) {
    return (tag) => !searchTerm || tag.toLowerCase().includes(searchTerm.toLowerCase());
}