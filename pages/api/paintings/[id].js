const Airtable = require("airtable")
const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID)
const table = base("Paintings")

export default async (req, res) => {
  const { id } = req.query
  const painting = await table.find(id)
  res.statusCode = 200
  res.json(painting.fields)
}
