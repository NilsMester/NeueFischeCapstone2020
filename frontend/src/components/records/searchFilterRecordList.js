
export default function searchFilterRecordList(searchTermText, records, searchTermTagsArray){

        return records
            .filter(record => searchTermTagsArray.every(tag => record.tagList.includes(tag)))
            .filter(record => record.titel.toLowerCase().includes(searchTermText.toLowerCase()) || record.description.toLowerCase().includes(searchTermText.toLowerCase()))
            .reverse()
}

