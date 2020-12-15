export default function getRecentRecords(records) {
    if (records.length > 3) {
        return records
            .map((record) => record)
            .reverse()
            .slice(-records.length, 3);
    } else {
        return records.map((record) => record).reverse();
    }
}
