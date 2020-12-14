export default function searchFilterTagList(
    searchTerm,
    userTagList,
    recordData
) {
    return userTagList
        .sort((tagA, tagB) => {
            if (tagA.count > tagB.count) {
                return -1;
            } else {
                return 1;
            }
        })
        .map((tagItem) => tagItem._id)
        .filter((tag) => !recordData.tagList.includes(tag))
        .filter(includeSearchTerm(searchTerm));
}

function includeSearchTerm(searchTerm) {
    return (tag) =>
        !searchTerm || tag.toLowerCase().includes(searchTerm.toLowerCase());
}
