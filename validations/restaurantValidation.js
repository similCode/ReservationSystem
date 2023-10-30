const restaurantSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "https://example.com/product.schema.json",
    "title": "Restaurant",
    "description": "A restaurant in the app",
    "type":"object",
    "properties": {
        "name": {
            "type": "string",
            "minLength": 2,
            "maxLength": 200,
        },
        "address": {
            "type": "string",
            "minLength": 20,
            "maxLength": 200,
        },
        "telephone": {
            "type": "string",
            "pattern": "\\+53\\s+[0-9]+"
        },
        "email": {
            "type": "string",
            "format": "email"
        },
        "website": {
            "type": "string",
            "format": "uri"
        },
        "tableAmount": {
            "type": "integer",
            "exclusiveMinimum": 0,
        },
    },
    "required": ["name","address","telephone","email","website","tableAmount"]
}

module.exports = restaurantSchema