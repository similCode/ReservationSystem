const commentSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "https://example.com/product.schema.json",
    "title": "Comment",
    "description": "A user's comment about a restaurant",
    "type":"object",
    "properties": {
        "comment": {
            "type": "string",
            "minLength": 2,
        },
        "date": {
            "type": "string",
            "format": "date"
        },
        "classification": {
            "type": ["number","string"],
        },
    },
    "required": ["comment","date","classification"]
}

module.exports = commentSchema