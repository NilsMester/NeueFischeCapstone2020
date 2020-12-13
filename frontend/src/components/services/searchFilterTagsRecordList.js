
export default function searchFilterTagsRecordList(searchTerm, userTagList){
        return userTagList
            .sort((tagA, tagB) => {
                if (tagA.count > tagB.count) {
                    return -1
                } else {
                    return 1
                }
            })
            .map(tagItem=>tagItem._id)
            .filter(includeSearchTerm(searchTerm));
}

function includeSearchTerm (searchTerm) {
    return (tag) => !searchTerm || tag.toLowerCase().includes(searchTerm.toLowerCase());

}