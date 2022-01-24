const Airtable = require("airtable")
const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID)
const table = base("Paintings")

function minifyRecords(records) {
    return records.map(({ id, fields }) => {
        return { id, ...fields }
    })
}

export default async (req, res) => {
    const records = await table
        .select({
            sort: [{ field: "Date Added", direction: "desc" }],
        })
        .firstPage()
    const minifiedRecords = minifyRecords(records)
    res.statusCode = 200
    res.json(minifiedRecords)
}
