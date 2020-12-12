
export default function getRecentTags(userTagList) {
        if (userTagList.length > 5) {
            return(userTagList
                /*.sort((tagA, tagB) => {
                    if (tagA.count > tagB.count) {
                        return -1
                    } else {
                        return 1
                    }
                })*/
                .map(tagItem => tagItem._id)
                .slice(-userTagList.length, 5))
        } else {
            return(userTagList.map(tagItem => tagItem).reverse())
        }
}