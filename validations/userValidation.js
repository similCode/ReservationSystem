const userSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "https://example.com/product.schema.json",
    "title": "User",
    "description": "A user in the app",
    "type":"object",
    "properties": {
        "name": {
            "type": "string",
            "minLength": 2,
            "maxLength": 200,
        },
        "lastName": {
            "type": "string",
            "minLength": 2,
            "maxLength": 200,
        },
        "email": {
            "type": "string",
            "format":"email"
        },
        "password": {
            "type": "string",
            "minLength": 6,
            "maxLength": 300,
        },

    },
    "required": ["name","lastName","email","password"]
}

module.exports = userSchema