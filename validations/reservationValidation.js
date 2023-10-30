const reservationSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "https://example.com/product.schema.json",
    "title": "Reservation",
    "description": "A restaurant's reservation in the app",
    "type":"object",
    "properties": {
        "date": {
            "type": "string",
            "format": "date"
            //TODO fecha minima
        },
        "time": {
            "type": "string",
        },
        "people": {
            "type": "integer",
            "exclusiveMinimum": 0,
            "maximum": 15
        },
    },
    "required": ["date","time","people"]
}

module.exports = reservationSchema