const Airtable = require("airtable")
const API_KEY = "key1VdAQdRSQkT0Hz"
const base = new Airtable({ apiKey: API_KEY }).base("app6By4Lpv9cgRO7k")
const table = base("Paintings")

async function getPainting(id) {
    const record = await table.find(id)
    return { id: record.id, ...record.fields }
}

async function getLatestPaintings(numberOfPaintings = 100) {
    const records = await base("Paintings")
        .select({
            view: "Main View",
            maxRecords: numberOfPaintings,
            sort: [{ field: "Date Added", direction: "desc" }],
        })
        .firstPage()
    return records.map(record => ({ id: record.id, ...record.fields }))
}

async function getLatestPaintingsByLine(line) {
    const records = await base("Paintings")
        .select({
            view: "Main View",
            filterByFormula: line ? `({Line} = "${line}")` : "",
            maxRecords: 25,
            sort: [{ field: "Date Added", direction: "desc" }],
        })
        .firstPage()
    return records.map(record => ({ id: record.id, ...record.fields }))
}

async function getFutureEvents() {
    const records = await base("News&Events")
        .select({
            maxRecords: 3,
        })
        .firstPage()
    return records.map(record => ({ id: record.id, ...record.fields }))
}

module.exports = {
    getLatestPaintings,
    getLatestPaintingsByLine,
    getPainting,
    getFutureEvents,
}
