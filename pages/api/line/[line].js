const Airtable = require("airtable")
const { AIRTABLE_API_TOKEN, AIRTABLE_BASE_ID } = process.env
const base = new Airtable({ apiKey: AIRTABLE_API_TOKEN }).base(AIRTABLE_BASE_ID)
const table = base("Paintings")

function minifyRecords(records) {
    return records.map(({ id, fields }) => {
        return { id, ...fields }
    })
}

export default async (req, res) => {
    const { line } = req.query

    const records = await table
        .select({
            filterByFormula: line ? `({Line} = "${line}")` : "",
            sort: [{ field: "Date Added", direction: "desc" }],
        })
        .firstPage()
    const minifiedRecords = minifyRecords(records)
    res.statusCode = 200
    res.json(minifiedRecords)
}
