
export default function searchFilterTagsRecordList(searchTerm, userTagList){
        return userTagList
            .map(tagItem=>tagItem._id)
            .filter(includeSearchTerm(searchTerm));
}

function includeSearchTerm (searchTerm) {
    return (tag) => !searchTerm || tag.toLowerCase().includes(searchTerm.toLowerCase());

}